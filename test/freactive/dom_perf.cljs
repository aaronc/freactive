(ns freactive.dom-perf
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.experimental.dom2 :as dom]
    [freactive.core :refer [atom cursor]]
    [figwheel.client :as fw :include-macros true])
  (:require-macros
  [freactive.macros :refer [rx]]))

(enable-console-print!)

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

(defonce n (atom 4))

;(defn left-offset-x [i]
;  (rx (* (inc i) (/ @mouse-x (inc @n)))))
;
;(defn right-offset-x [i]
;  (rx (let [mx @mouse-x] (+ mx (* (inc i) (/ (- @width mx) (inc @n)))))))
;
;(defn top-offset-y [j]
;  (rx (* (inc j) (/ @mouse-y (inc @n)))))
;
;(defn bottom-offset-y [j]
;  (rx (let [my @mouse-y] (+ my (* (inc j) (/ (- @height my) (inc @n)))))))

(defn view []
  [:div

   [:svg/svg
   {:width "100%" :height "100%"
     :style {:position "absolute" :left 0 :top 0 }}
   (circle mouse-x mouse-y)
   (rx (let [n* @n
             lefts (vec (for [i (range n*)] (rx (* (inc i) (/ @mouse-x (inc n*))))))
             rights (vec (for [i (range n*)] (let [mx @mouse-x] (+ mx (* (inc i) (/ (- @width mx) (inc n*)))))))
             tops (vec (for [j (range n*)] (rx (* (inc j) (/ @mouse-y (inc n*))))))
             bottoms (vec (for [j (range n*)] (rx (let [my @mouse-y] (+ my (* (inc j) (/ (- @height my) (inc n*))))))))]
         [:svg/g
          (for [i (range n*)] (circle (nth lefts i) mouse-y))
          (for [i (range n*)] (circle (nth rights i) mouse-y))
          (for [j (range n*)] (circle mouse-x (nth tops j)))
          (for [j (range n*)] (circle mouse-x (nth bottoms j)))
          (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth tops j)))
          (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth bottoms j)))
          (for [i (range n*) j (range n*)] (circle (nth rights i) (nth tops j)))
          (for [i (range n*) j (range n*)] (circle (nth rights i) (nth bottoms j)))]))
   ;(rx [:svg/g (for [i (range @n)] (circle (left-offset-x i) mouse-y))])
   ;(rx [:svg/g (for [i (range @n)] (circle (right-offset-x i) mouse-y))])
   ;(rx [:svg/g (for [j (range @n)] (circle mouse-x (top-offset-y j)))])
   ;(rx [:svg/g (for [j (range @n)] (circle mouse-x (bottom-offset-y j)))])
   ;(rx [:svg/g (for [i (range @n) j (range @n)]
   ;               (circle (left-offset-x i) (top-offset-y j)))])
   ;(rx [:svg/g (for [i (range @n) j (range @n)]
   ;               (circle (right-offset-x i) (top-offset-y j)))])
   ;(rx [:svg/g (for [i (range @n) j (range @n)]
   ;               (circle (left-offset-x i) (bottom-offset-y j)))])
   ;(rx [:svg/g (for [i (range @n) j (range @n)]
   ;               (circle (right-offset-x i) (bottom-offset-y j)))])

    [:svg/circle {:fill "red" :on-mousedown (fn [e] (swap! n dec))
                  :r 8 :cx 8 :cy 8}]
    [:svg/circle {:fill "green" :on-mousedown (fn [e] (swap! n inc))
                  :r 8 :cx 24 :cy 8}]
    ]

   [:span (rx (str @mouse-x ", " @mouse-y))
    ". n = " (rx (str @n))
    ". complexity = " (rx  (str (let [n* @n n* (+ 1 (* 2 n*))]
                                 (* n* n*))))
    ". fps = " (rx (str @dom/fps))

    ]])

(dom/mount! (.getElementById js/document "root") (view))

(fw/watch-and-reload
  ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
  ;;:jsload-callback (fn [] (print "reloaded")
  )


;; MBA Chrome
;; n=4, 37-43fps
;; n=8, 20-30fps
;; n-12, 4.7fps
;;
;; After refactor request-animation-frame
;; n=4, 47-57fps
;; n=8, 28fps
;; n=12, 18fps


