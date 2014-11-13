(ns freactive.dom.items-view
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom]]
    [freactive.dom :as dom]
    [freactive.observable-collection :refer [observable-collection
                                    observe-changes transact!]])
  (:require-macros [freactive.macros :refer [rx]]))

(defprotocol IItemsView
  (-sort! [view compare-fn])
  (-apply-filter! [view f])
  (-remove-filter! [view f])
  (-reset-view [view])
  (-set-view-range [view start end]))

(defrecord ItemsView [element coll]
  dom/IHasElement
  (-get-element [_] element)

  dom/IRemove
  (-remove [_] (dom/-remove element)))

(deftype ItemContainer [elem state])

(defn items-view
  [container template-fn items]
  (let [coll
        (cond
          (instance? freactive.observable-collection/ObservableCollection items)
          items

          :default
          (observable-collection items))

        container
        (cond
          (keyword? container)
          [container]

          :default
          container)

        element (dom/build-element container)

        elem-mappings (atom {})

         view (ItemsView. element coll)

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

    (update-fn view coll @(.-state coll))
    (observe-changes coll view update-fn)

    #_(dom/with-transitions
      view
      {:show
       (fn on-mount [element _]
         (println "mounted")
         (set! (.-element view) element)
         (println "coll" coll)
         )})

    view))
