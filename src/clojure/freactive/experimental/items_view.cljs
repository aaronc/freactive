(ns freactive.experimental.items-view
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom]]
    [freactive.experimental.dom2 :as dom]
    [freactive.experimental :refer [observable-collection
                                    observe-changes transact!]])
  (:require-macros [freactive.macros :refer [rx]]))

(defrecord ItemsView [elem-spec element transitions template-fn coll]
  dom/IElementSpec
  (-get-virtual-dom [_] elem-spec)

  dom/IRemove
  (-remove [_] (dom/-remove element)))

(deftype ItemContainer [elem state])

(defn items-view
  [container template-fn items]
  (let [coll
        (cond
          (instance? freactive.experimental/ObservableCollection items)
          items

          :default
          (observable-collection items))

        container
        (cond
          (keyword? container)
          [container]

          :default
          container)

        elem-mappings (atom {})

         view (ItemsView. container nil nil template-fn coll)

         update-fn
         (fn [view coll changes]
           (doseq [[k v] changes]
             (let [elem-container (get @elem-mappings k)]
               (if elem-container
                 (if v
                   (reset! (.-state elem-container) v)
                   (do
                     (dom/-remove (.-elem elem-container))
                     (swap! elem-mappings dissoc k)))
                 (when v
                   (let [state (atom v)
                         elem (dom/append-child! (.-element view) (template-fn state))]
                     (swap! elem-mappings assoc k (ItemContainer. elem state))))))))]

    (dom/with-transitions
      view
      {:show
       (fn on-mount [element _]
         (println "mounted")
         (set! (.-element view) element)
         (println "coll" coll)
         (update-fn view coll @(.-state coll))
         (observe-changes coll view update-fn))})))


(def c0 (observable-collection {:a "abc"}))

(def i0 (items-view [:ul] (fn [x] (rx [:li @x])) c0))

(dom/mount! (dom/get-body) i0)
