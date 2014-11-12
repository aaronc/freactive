(ns freactive.experimental.items-view
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom rx*]]
    [freactive.experimental.dom :as dom]
    [freactive.experimental :refer [observable-collection
                                    observe-changes transact!]]))

(deftype ItemsView [elem-spec dom-node transitions template-fn coll]
  freactive.experimental.dom/IElement
  (-get-element-spec [_] elem-spec)
  (-get-dom-node [_] dom-node)
  (-set-dom-node [this node]
    (set! (.-dom-node this) node))
  (-get-transition [_ transition-name]
    (get transitions transition-name))
  (-set-transitions [this transitions]
    (set! (.-transitions this) transitions)))

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
                     (dom/remove-child! view (.-elem elem-container))
                     (swap! elem-mappings dissoc k)))
                 (when v
                   (let [state (atom v)
                         elem (dom/append-child! view (template-fn state))]
                     (swap! elem-mappings assoc k (ItemContainer. elem state))))))))]

    (dom/with-transitions
      view
      :show
      (fn on-mount [view]
        (println "coll" coll)
        (update-fn view coll @(.-state coll))
        (observe-changes coll view update-fn)))))


(def c0 (observable-collection {:a "abc"}))

(defonce v0
  (dom/mount! dom/root
    (items-view [:ul] (fn [x] (rx* (fn [] [:li @x]))) c0)))
