(ns freactive.dom-perf
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.experimental.dom :as dom]
    [freactive.core :refer [atom cursor]])
  (:require-macros
  [freactive.macros :refer [rx]]))

(defonce root (dom/append! (dom/get-body) [:div#root]))

(defonce mouse-x (atom 0))

(defonce mouse-y (atom 0))

(defn- get-window-width [] (.-innerWidth js/window))
(defn- get-window-height [] (.-innerHeight js/window))

(defonce width (atom (get-window-width)))
(defonce height (atom (get-window-height)))

(defonce init
  (dom/listen! js/window "mousemove" (fn [e]
                                       (reset! mouse-x (.-clientX e))
                                       (reset! mouse-y (.-clientY e)))))

(defonce init2
  (dom/listen! js/window "resize" (fn [e]
                                    (reset! width (get-window-width))
                                    (reset! height (get-window-height)))))

(defn circle [x y]
  [:svg/circle {:cx x :cy y :r 2 :stroke "black" :fill "black"}])

(defonce n (atom 7))

(defn left-offset-x [i]
  (rx (* (inc i) (/ @mouse-x (inc @n)))))

(defn right-offset-x [i]
  (rx (let [mx @mouse-x] (+ mx (* (inc i) (/ (- @width mx) (inc @n)))))))

(defn top-offset-y [j]
  (rx (* (inc j) (/ @mouse-y (inc @n)))))

(defn bottom-offset-y [j]
  (rx (let [my @mouse-y] (+ my (* (inc j) (/ (- @height my) (inc @n)))))))

(defn view []
  [:div

   [:svg/svg
    {:width "100%" :height "100%"
     :style {:position "absolute" :left 0 :top 0 }}
    (circle mouse-x mouse-y)
    (rx [:svg/g (for [i (range @n)] (circle (left-offset-x i) mouse-y))])
    (rx [:svg/g (for [i (range @n)] (circle (right-offset-x i) mouse-y))])
    (rx [:svg/g (for [j (range @n)] (circle mouse-x (top-offset-y j)))])
    (rx [:svg/g (for [j (range @n)] (circle mouse-x (bottom-offset-y j)))])
    (rx [:svg/g (for [i (range @n) j (range @n)]
                  (circle (left-offset-x i) (top-offset-y j)))])
    (rx [:svg/g (for [i (range @n) j (range @n)]
                  (circle (right-offset-x i) (top-offset-y j)))])
    (rx [:svg/g (for [i (range @n) j (range @n)]
                  (circle (left-offset-x i) (bottom-offset-y j)))])
    (rx [:svg/g (for [i (range @n) j (range @n)]
                  (circle (right-offset-x i) (bottom-offset-y j)))])
    ]

   [:span (rx (str @mouse-x ", " @mouse-y))
    ". n = " (rx (str @n))
    ". complexity = " (rx  (str (let [n* @n n* (+ 1 (* 2 n*))]
                                 (* n* n*))))
    [:button {:on-click (fn [e]
                          (println e)
                          (swap! n dec))} "-"]

    [:button {:on-click (fn [e]
                          (println e)
                          (swap! n inc))} "+"]
    ]
   ])

(dom/mount! root (view))
