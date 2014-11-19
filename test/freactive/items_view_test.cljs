(ns freactive.items-view-test
  (:refer-clojure :exclude [atom])
  (:require [freactive.dom :as dom]
            [freactive.core :refer [atom rx]]
            [freactive.experimental.observable-collection :refer
            [observable-collection transact!]]
            [freactive.experimental.items-view :as items-view]
            [figwheel.client :as fw]
            [cljs.core.async :refer [chan put! <!]])
  (:require-macros
  [cljs.core.async.macros :refer [go go-loop]]
  [freactive.macros :refer [rx]]))

(enable-console-print!)

(dom/enable-fps-instrumentation!)

(defn item-view [item]
  (let [state (atom :viewing)
        action-ch (chan)]
    (go-loop []
       (let [action (<! action-ch)]
         (case @state
           :viewing
           (when (= action :edit)
             (reset! state :editing))
           :editing
           (when (= action :commit)
             (reset! state :viewing)))
         (recur)))
    [:li
     (dom/with-transitions
       [:input {:value @item :data-state @state
                :on-keypress
                (fn [e]
                  (when (= (.-keyCode e) 13)
                    (put! action-ch :commit)
                    (.preventDefault e)))
                :on-changed
                (fn [e] (reset! item (.. e -target -value)))
                :style {:display
                        (rx
                          (if (= @state :editing)
                            ""
                            "none"))}}]
       {})
     [:span
      {:on-mousedown (fn [e] (put! action-ch :edit))
       :style {:display
                     (rx
                       (if (= @state :viewing)
                         ""
                         "none"))}}
      @item]]))

(defn view []
  (let [items (observable-collection {:a 1 :b 2})
        items-view (items-view/items-view :ul item-view
                                          items)]
    [:div
     items-view
     [:div
      [:span "New Item:"]
      [:button {:on-click (fn [e] (transact! items [:assoc! 0 57]))} "Add"]
      ]
     ]))

(dom/mount! (.getElementById js/document "root") (view))

(fw/watch-and-reload)
