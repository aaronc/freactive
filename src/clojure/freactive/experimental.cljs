(ns freactive.experimental)

(deftype ObservableCollection [state auto-key observers])

(declare do-txs)

(defn- do-tx [state tx auto-key]
  (cond
    (map? tx)
    (let [id (auto-key)]
      [(assoc state id tx) [id tx]])

    (sequential? tx)
    (let [[id op & args] tx]
      (cond
        (sequential? id)
        (do-txs state tx auto-key)

        (map? op)
        [(assoc state id op) [id op]]

        (nil? op)
        [(dissoc state id) [id nil]]

        (ifn? op)
        (let [cur (get state id)
              res (apply op cur args)]
          [(assoc state id res) [id res]])))))

(defn- do-txs [state txs auto-key]
  (loop [state state
         txs-res []
         [tx & txs] txs]
    (if tx
      (let [[state tx-res] (do-tx state tx auto-key)
            txs-res (if (sequential? (first tx-res))
                      (concat txs-res tx-res)
                      (conj txs-res tx-res))]
        (recur state txs-res txs))
      )))

(defn- do-cas! [atomic old-state new-state]
  (compare-and-set! atomic old-state new-state))

(defn- notify-coll [coll txs-res]
  (doseq [[k f] (.-observers coll)]
    (f k coll txs-res)))

(defn transact!* [coll tx-data]
  (let [auto-key (.-auto-key coll)
        state (.-state coll)]
    (loop []
      (let [cur-state @state
            [new-state txs-res] (do-txs cur-state tx-data auto-key)]
        (if (do-cas! state cur-state new-state)
          (notify-coll coll txs-res)
          (recur))))))

(defn transact! [coll & tx-data]
  (let [fst (first tx-data)]
    (cond
      (or (keyword? fst) (integer? fst) (string? fst))
      (transact!* coll [tx-data])

      :default
      (apply transact!* coll tx-data))))

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
  ([init & {:keys [auto-inc]}]
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
     (ObservableCollection. init
       (when auto-inc
         (fn [] (count @init)))
       nil))))

(defn observe-changes [coll key f]
  (set! (.-observers coll) (assoc (.-observers coll) key f)))

