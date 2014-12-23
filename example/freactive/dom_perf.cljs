(ns freactive.dom-perf
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.dom :as dom]
    [freactive.core :refer [atom cursor] :as r]
    [figwheel.client :as fw :include-macros true]
    [freactive.animation :as animation]
    [goog.string :as gstring]
    [cljs.core.async :refer [chan put! <!]])
  (:require-macros
  [cljs.core.async.macros :refer [go go-loop]]
  [freactive.macros :refer [rx debug-rx]]))

(enable-console-print!)

(dom/enable-fps-instrumentation!)

(defn- get-window-width [] (.-innerWidth js/window))

(defn- get-window-height [] (.-innerHeight js/window))

(defonce width (atom (get-window-width)))

(defonce height (atom (get-window-height)))

(defonce mouse-x (atom (/ (get-window-width) 2)))

(defonce mouse-y (atom (/ (get-window-height) 2)))

(defonce init
         (do
           (dom/listen! js/window "mousemove"
                        (fn [e]
                          (reset! mouse-x (.-clientX e))
                          (reset! mouse-y (.-clientY e))))

           (dom/listen! js/window "resize"
                        (fn [e]
                          (reset! width (get-window-width))
                          (reset! height (get-window-height))))

           (dom/listen! js/window "touchmove"
                        (fn [e]
                          (let [touches (.-touches e)]
                            (when (= 1 (alength touches))
                              (.preventDefault e)
                              (let [touch (aget touches 0)]
                                (reset! mouse-x (.-clientX touch))
                                (reset! mouse-y (.-clientY touch)))))))))

(defn circle [x y]
  [:svg/circle {:cx x :cy y :r 2 :stroke "black" :fill "black"}])

(defonce n (atom 4))

(defn- spacing-factor [n i]
  (let [i (inc i)
        n (inc n)
        x (/ i n)]
    (- 1 (.pow js/Math (- 1 x) 2))))

(defn- jitter [easer cb]
  (let [value (- 1.0 (* 0.01 (rand)))]
    ((animation/easing-chain
       [[easer value 50 animation/quint-out]
        [easer 1.0 50 animation/quint-in]
        [easer value 50 animation/quint-out]
        [easer 1.0 50 animation/quint-out]]) cb)))

(defn view []
  [:div
   {:width "100%" :height "100%"}
   [:div
    {:width "100%"
     :style
     {:position "absolute" :left 0 :top 0 :height "12px"
      :font-size "12px"
      :font-family "sans-serif"}}
    (let [number-of-points
          (rx (let [n* @n n* (+ 1 (* 2 n*))] (* n* n*)))]
     [:span
      [:strong [:em [:a {:href "https://github.com/aaronc/freactive"} "freactive"]
       " performance test. "
                [:em
                 "Please report issues "
                 [:a {:href "https://github.com/aaronc/freactive/issues"} "here"]]
                ". "]
      "N = " (rx (str @n)) " "
      [:button {:on-click (fn [_] (swap! n dec))} "-"]
      [:button {:on-click (fn [_] (swap! n inc))} "+"]
      ", number of points = "
       (rx (str @number-of-points))
       ". fps = " (rx (str @dom/fps))
       ", DOM attrs set/second (when moving) ~= " (rx (str (* @dom/fps @number-of-points)))
       ", mouse at "
       (rx (str @mouse-x ", " @mouse-y))
      ". "]])]
   (let [ease-x (animation/easer 0.0)
         ease-y (animation/easer 0.0)
         graph-state (atom nil)
         action-ch (chan)]
     (go-loop []
       (let [action (<! action-ch)]
         (case @graph-state
           :updating
           (when (= action :ready)
             (reset! graph-state :ready))
           (reset! graph-state action))
         (recur)))
     [:div
      {:width "100%" :height "100%"
       :on-mousedown (fn [_] (put! action-ch :jitter))}
      [:svg/svg
       {:width   "100%" :height "100%"
        :style   {:position "absolute" :left 0 :top "20px"}
        :viewBox (rx (str "0 20 " @width " " @height))}
       (circle mouse-x mouse-y)
       (rx (let [n* @n
                 spacer (partial spacing-factor n*)
                 offsets (map spacer (range n*))
                 lefts (vec (for [x offsets] (rx (* x @mouse-x @ease-x))))
                 rights (vec (for [x (reverse offsets)] (rx (let [w @width] (- w (* x (- w @mouse-x) @ease-x))))))
                 tops (vec (for [y offsets] (rx (* y @mouse-y @ease-y))))
                 bottoms (vec (for [y (reverse offsets)] (rx (let [h @height] (- h (* y (- h @mouse-y) @ease-y))))))]
             (dom/with-transitions
               [:svg/g {:data-state graph-state}
                (for [i (range n*)] (circle (nth lefts i) mouse-y))
                (for [i (range n*)] (circle (nth rights i) mouse-y))
                (for [j (range n*)] (circle mouse-x (nth tops j)))
                (for [j (range n*)] (circle mouse-x (nth bottoms j)))
                (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth tops j)))
                (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth bottoms j)))
                (for [i (range n*) j (range n*)] (circle (nth rights i) (nth tops j)))
                (for [i (range n*) j (range n*)] (circle (nth rights i) (nth bottoms j)))]
               {:node-attached (fn [x cb]
                                 (animation/start-easing! ease-x 0.0 1.0 1000
                                                          animation/quad-in nil)
                                 (animation/start-easing! ease-y 0.0 1.0 1000 animation/quad-out
                                                          (fn [] (put! action-ch :ready))))
                :on-jitter (fn [x cb]
                             (jitter ease-x nil)
                             (jitter ease-y (fn []
                                              (put! action-ch :ready))))
                :node-detaching (fn [x cb]
                                  (put! action-ch :updating)
                                  (animation/start-easing! ease-x 1.0 0.0 1000
                                                           animation/quad-out nil)
                                  (animation/start-easing! ease-y 1.0 0.0 1000 animation/quad-in cb))})))]])])

(dom/mount! (.getElementById js/document "root") (view))

(fw/watch-and-reload)

