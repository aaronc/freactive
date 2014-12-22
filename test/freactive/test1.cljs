(ns freactive.test1
  (:refer-clojure :exclude [atom])
  (:require [freactive.dom :as dom]
            [freactive.core :refer [atom rx cursor]]
            [figwheel.client :as fw])
  (:require-macros
  [freactive.macros :refer [rx debug-rx]]))

(enable-console-print!)

;(def clicks (atom 0))
;
;(def selected (atom -1))
;
;(def list-of-stuff (atom ["A" "B" "C"]))
;
;(defn my-view []
;  [:div
;   [:h1 "Hello World!"]
;   [:p "You have clicked " clicks " times"]
;   [:button {:on-click (fn [e]
;                         (swap! clicks inc)
;                         (swap! selected inc)
;                         (swap! list-of-stuff conj @clicks))} "Click Me"]
;   (rx
;     [:ul
;      (for [x @list-of-stuff]
;        [:li
;         {:style {:font-weight
;                      (rx (if (= x @selected) "bold" "normal"))
;                      :font-size (str @clicks "px")}}
;         [:input {:type "text" :name (when (= x @selected) "hello")}]
;         x])])])

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

(dom/mount! (.getElementById js/document "root") (view))

(fw/watch-and-reload)
