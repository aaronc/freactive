(ns freactive.experimental)

(defrecord ObservableCollection [state id-key])

(declare do-txs)

(defn- do-tx [state tx id-key]
  (cond
    (map? tx)
    (let [id (id-key tx)]
      [(assoc state id tx) [id tx]])

    (sequential? tx)
    (let [[id op & args] tx]
      (cond
        (sequential? id)
        (do-txs state tx id-key)

        (map? op)
        (let [op (assoc op id-key id)]
          [(assoc state id op) [id op]])

        (nil? op)
        [(dissoc state id) [id nil]]

        (ifn? op)
        (let [cur (get state id)
              res (apply op cur args)
              res (assoc res id-key id)]
          [(assoc state id res) [id res]])))))

(defn- do-txs [state txs id-key]
  (loop [state state
         txs-res []
         [tx & txs] txs]
    (if tx
      (let [[state tx-res] (do-tx state tx id-key)
            txs-res (if (sequential? (first tx-res))
                      (concat txs-res tx-res)
                      (conj txs-res tx-res))]
        (recur state txs-res txs))
      )))

(defn- do-cas! [atomic old-state new-state]
  (compare-and-set! atomic old-state new-state))

(defn- notify-coll [coll txs-res]
  txs-res)

(defn transact!* [coll tx-data]
  (let [id-key (.-id-key coll)
        state (.-state coll)]
    (loop []
      (let [cur-state @state
            [new-state txs-res] (do-txs cur-state tx-data id-key)]
        (if (do-cas! state cur-state new-state)
          (notify-coll coll txs-res)
          (recur))))))

(defn transact! [coll & tx-data]
  (let [fst (first tx-data)]
    (cond
      (or (keyword? fst) (integer? fst) (string? fst))
      (transact coll [tx-data])

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

(defn observable-coll
  ([atomic & {:keys [id-key]
              :or {id-key :id}}]
   (ObservableCollection. atomic id-key)))

(defn observe-coll [coll key f])

(defn cursor
  ([atomic])
  ([atomic korks]))
