(ns freactive.experimental.collections
  (:refer-clojure :exclude [assoc! dissoc!])
  (:require
    [freactive.core :as r]))

(def ^:dynamic *tx-coll*)

(defprotocol IObservableCollection
  (-add-collection-watch [coll key f])
  (-remove-collection-watch [coll key]))

(def ^:dynamic ^:private *tx-state*)
(def ^:dynamic ^:private *tx-changes*)

(defn- add-change [change]
  (set! *tx-changes* (conj *tx-changes* change)))

(deftype ObservableMap [state-ref observers]
  IDeref
  (-deref [_] @state-ref)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ObservableMap: ")
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
        changes)))

  (-update! [coll key f]
    (-transact!* coll
                 (fn []
                   (let [new-state (update *tx-state* key f)
                         new-val (get new-state key)]
                     (set! *tx-state* new-state)
                     (add-change [key new-val])
                     new-val))))

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
                   (add-change [key])))))

(defn transact!* [coll f]
  (if *tx-coll*
    (f)
    (-transact!* coll f)))

(defn observable-map
  ([])
  ([init]
   (ObservableMap. init nil nil nil)))

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
