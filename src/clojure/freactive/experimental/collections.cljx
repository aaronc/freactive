(ns freactive.experimental.collections
  (:refer-clojure :exclude [assoc! dissoc!])
  (:require
    [freactive.core :as r]))


(def ^:dynamic *tx-coll*)

(defprotocol IObservableCollection
  (-transact!* [coll f])
  (-add-change-watch [coll key f])
  (-remove-change-watch [coll key])
  (-update! [coll key f])
  (-insert! [coll val]
   "Inserts a value into the collection with an auto-generated key if supported and returns the
  generated key. Throws an exception if not supported.")
  (-get-cursor [coll key]))

(def ^:dynamic ^:private *tx-state*)
(def ^:dynamic ^:private *tx-changes*)

(defn- add-change [change]
  (set! *tx-changes* (conj *tx-changes* change)))

(deftype ObservableCollection [state-ref observers cursors insert-fn]
  IDeref
  (-deref [_] @state-ref)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ObservableCollection: ")
    (pr-writer @state-ref writer opts)
    (-write writer ">"))

  IObservableCollection
  (-transact!* [coll f]
    (binding [*tx-coll* coll
              *tx-changes* []]
      (swap! state-ref
             (fn [state]
               (binding [*tx-state* state]
                 (set! *tx-changes* [])
                 (f)
                 *tx-state*)))
      (let [changes *tx-changes*]
        (doseq [[k f] observers]
          (f k coll changes))
        (when-not (empty? cursors)
          (doseq [[k v] changes]
            (when-let [cursor (get cursors k)]
              (r/-invalidate cursor))))
        changes)))
  (-update! [coll key f]
    (-transact!* coll
                 (fn []
                   (let [new-state (update *tx-state* key f)
                         new-val (get new-state key)]
                     (set! *tx-state* new-state)
                     (add-change [key new-val])
                     new-val))))
  (-insert! [coll val]
    (assert insert-fn "insert! not supported by collection")
    (-transact!* coll (fn [] (insert-fn val))))
  (-get-cursor [coll key]
    (if-let [cursor (get cursors key)]
      cursor
      (set! (.-cursors coll)
            assoc
            cursors
            key
            (r/cursor*
              coll
              (fn [state] (get state key))
              (fn [state new-val]
                (add-change [key new-val])
                (update state key new-val))
              (fn [coll f]
                (-transact!* coll (fn [] (set! *tx-state* (f *tx-state*)))))
              false
              (fn [_])
              ;(fn [sully] (set! (.-cursors coll)
              ;                  (assoc cursors key
              ;                         (fn []
              ;                           (set! (.-cursors coll) (dissoc cursors key))
              ;                           (sully)))))
              ))))

  ITransientAssociative
  (-assoc! [coll key val]
    (-transact!* coll
                 (fn []
                   (set! *tx-state* (assoc *tx-state* key val))
                   (add-change [key val]))))

  ITransientMap
  (-dissoc! [coll key]
    (-transact!* coll
                 (fn []
                   (set! *tx-state* (dissoc *tx-state* key))
                   (add-change [key]))))

  ;; ILookup ICounted IDeref ISeqable ISequential
  )

(defn transact!* [coll f]
  (if *tx-coll*
    (f)
    (-transact!* coll f)))

(defn observable-map
  ([])
  ([init]
   (ObservableCollection. init nil nil nil)))

(defn observable-seq
  ([])
  ([init]
   (ObservableCollection. init nil nil
                          (fn [val]
                            (let [i (count *tx-state*)
                                  new-state (assoc *tx-state* i val)]
                              (set! *tx-state* new-state)
                              (add-change [i val])
                              i)))))
