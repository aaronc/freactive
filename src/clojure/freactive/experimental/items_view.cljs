(ns freactive.experimental.items-view
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom]]
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

(defn items-view
  [container template-fn items]
  (let [coll
        (cond
          (instance? freactive.experimental/ObservableCollection items)
          items

          :default
          (observable-collection items :auto-inc true))

        container
        (cond
          (keyword? container)
          [container]

          :default
          container)

         view (ItemsView. container nil nil template-fn coll)

         update-fn
         (fn [view coll changes]
           (doseq [[k v] changes]
             (dom/append-child! view (template-fn (atom v)))))]

    (dom/with-transitions
      view
      :show
      (fn on-mount [view]
        (println "coll" coll)
        (update-fn view coll @(.-state coll))
        (observe-changes coll view update-fn)))))


(def c0 (observable-collection {:a "abc"}))

(dom/mount! dom/root (items-view [:ul] (fn [x] [:li @x]) c0))
