(ns freactive.experimental)

(deftype ObservableCollection [state observers]

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ObservableCollection: ")
    (pr-writer @state writer opts)
    (-write writer ">"))

  ;; ILookup ICounted IDeref ISeqable ISequential
  )

(declare do-txs)

(defn- do-tx [state tx]
  (cond
    (sequential? tx)
    (let [[id op & args] tx]
      (cond
        (sequential? id)
        (do-txs state tx auto-key)

        (nil? op)
        [(dissoc state id) [id nil]]

        (ifn? op)
        (let [cur (get state id)
              res (apply op cur args)]
          [(assoc state id res) [id res]])


        :default
        [(assoc state id op) [id op]]))))

(defn- do-txs [state txs]
  (loop [state state
         txs-res []
         [tx & txs] txs]
    (if tx
      (let [[state tx-res] (do-tx state tx)
            txs-res (if (sequential? (first tx-res))
                      (concat txs-res tx-res)
                      (conj txs-res tx-res))]
        (recur state txs-res txs))
      [state txs-res])))

(defn- do-cas! [atomic old-state new-state]
  (compare-and-set! atomic old-state new-state))

(defn- notify-coll [coll txs-res]
  (doseq [[k f] (.-observers coll)]
    (f k coll txs-res))
  txs-res)

(defn transact!* [coll tx-data]
  (let [state (.-state coll)]
    (loop []
      (let [cur-state @state
            [new-state txs-res] (do-txs cur-state tx-data)]
        (if (do-cas! state cur-state new-state)
          (notify-coll coll txs-res)
          (recur))))))

(defn transact! [coll & tx-data]
  (let [fst (first tx-data)]
    (cond
      (or (keyword? fst) (integer? fst) (string? fst))
      (transact!* coll [tx-data])

      :default
      (transact!* coll tx-data))))

;(defn transact! [coll & tx-data]
;  (apply transact!* coll tx-data))

;; (transact! coll [0 nil])
;; (transact! coll 0 nil)
;; (transact! coll {:id 0 :a 1})
;; (transact! coll 0 assoc :a 1)
;; (transact! coll [0 assoc :a 1])
;; (transact! coll [0 assoc :a 1] [1 assoc :b 2])
;; (transact! coll [[0 assoc :a 1] [1 assoc :b 2]])

(defn observable-collection
  ([]
   (observable-collection nil))
  ([init]
   (let [init
         (cond
           (satisfies? cljs.core/IDeref init)
           init

           (map? init)
           (atom init)

           (sequential? init)
           (atom (zipmap (range) init))

           :default
           (atom {}))]
     (ObservableCollection. init nil))))

(defn observe-changes [coll key f]
  (set! (.-observers coll) (assoc (.-observers coll) key f)))

