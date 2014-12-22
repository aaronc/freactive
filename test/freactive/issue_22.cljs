(ns freactive.issue-22
  (:require-macros [freactive.macros :refer [rx]])
  (:require [freactive.core :refer [atom cursor]]
            [freactive.dom :as dom]
            [figwheel.client :as fw]))

(enable-console-print!)

(defonce state (atom {:page 0 :items {:a "a" :b "b" :c "c" :d "d"}}))

(defn item [c]
  [:div c])

(defn view []
  (let [page (cursor state :page)
        item-keys (cursor state #(-> % :items keys))]
    [:div
     (rx (if (= @page 0)
           [:div "No bug"]
           [:div "Bug"
            (rx (into [:div] (mapv (fn [k] (item (cursor state [:items k]))) @item-keys)))]))
     [:div [:button {:on-click (fn [_] (swap! state update-in [:page] #(- 1 %)))} "toggle page"]]]))

(defonce root (dom/append-child! (.-body js/document) [:div#root]))

(dom/mount! root (view))

(fw/watch-and-reload
  :jsload-callback (fn []
                     ;; (stop-and-start-my app)
                     ))

