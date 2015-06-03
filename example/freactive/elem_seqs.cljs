(ns freactive.elem-seqs
  (:refer-clojure :exclude [atom])
  (:require
   [freactive.dom :as dom]
   [freactive.core :refer [atom cursor] :as r]
   [figwheel.client :as fw :include-macros true]
   [freactive.animation :as animation]
   [goog.string :as gstring]
   [cljs.core.async :refer [chan put! <!]]
   [freactive.core-test])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [freactive.macros :refer [rx debug-rx cfor]]
   [cljs.test :refer [run-all-tests]]))

(def root0 (atom {0 {0 426 2647 1369 3697 4}
                  1 {2136 267 26 246}}))

(defn coll-viewer [coll-cur]
  [:div
   [:h1 "Collection " (str (r/cursor-key coll-cur))]
   [:button {:on-click (fn [e] (assoc! coll-cur (rand-int 5000) (rand-int 5000)))}
    "Add Rand!"]
   [:ul
    (cfor [cur coll-cur]
          (let [key (r/cursor-key cur)]
            [:li [:label (str key)
                  [:input {:value cur
                           :on-change (fn [e]
                                        (reset! cur (.-value (.-target e))))}]] 
             [:button {:on-click (fn [e] (dissoc! coll-cur key))} "Del"]]))]
   [:div (r/rapply pr-str coll-cur)]
   [:button {:on-click (fn [e] (dissoc! root0 (r/cursor-key coll-cur)))}
   "Remove Collection"]])

(dom/mount!
 (.getElementById js/document "root")
 [:div
  (r/cmap coll-viewer root0)
  [:button {:on-click (fn [e] (assoc! root0 (rand-int 10) {}))}
   "Add or Replace Rand Collection"]])
