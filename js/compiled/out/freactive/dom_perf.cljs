(ns freactive.dom-perf
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.experimental.dom2 :as dom]
    [freactive.core :refer [atom cursor] :as r]
    [figwheel.client :as fw :include-macros true]
    [freactive.experimental.animation])
  (:require-macros
  [freactive.macros :refer [rx debug-rx animation-rx]]))

(enable-console-print!)

(defonce mouse-x (atom 0))

(defonce mouse-y (atom 0))

(defn- get-window-width [] (.-innerWidth js/window))
(defn- get-window-height [] (.-innerHeight js/window))

(defonce width (atom (get-window-width)))

(defonce height (atom (get-window-height)))

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

(defn- spacing-factor [n i]
  (let [i (inc i)
        n (inc n)
        x (/ i n)]
    (- 1 (.pow js/Math (- 1 x) 2))))

(defn- btn [x y fill text f]
  [:svg/g {:on-mousedown f}
   [:svg/text {:x x :y (+ 4 y) :text-anchor "middle"} text]
   [:svg/circle {:fill fill :r 8 :cx x :cy y}]])

(defn view []
  [:div
   [:div
    {:width "100%"
     :style
     {:position "absolute" :left 0 :top 0 :height "1em"}}
    (let [complexity (rx (str (let [n* @n n* (+ 1 (* 2 n*))] (* n* n*))))]
     [:span (rx (str @mouse-x ", " @mouse-y))
      ". n = " (rx (str @n)) " "
      [:button {:on-click (fn [_] (swap! n dec))} "-"]
      [:button {:on-click (fn [_] (swap! n inc))} "+"]
      " complexity = " complexity
      ". fps = " (rx (str @dom/fps)) ". That' is roughly "
      (rx (str (* @dom/fps @complexity)))
      " DOM attributes updated per second."])]
   [:svg/svg
   {:width "100%" :height "100%"
     :style {:position "absolute" :left 0 :top "1em"}}
   (circle mouse-x mouse-y)
    (debug-rx
      (rx (let [n* @n
                spacer (partial spacing-factor n*)
                offsets (map spacer (range n*))
                lefts (vec (for [x offsets] (rx (* x @mouse-x))))
                rights (vec (for [x (reverse offsets)] (rx (let [w @width] (- w (* x (- w @mouse-x)))))))
                tops (vec (for [y offsets] (rx (* y @mouse-y))))
                bottoms (vec (for [y (reverse offsets)] (rx (let [h @height] (- h (* y (- h @mouse-y)))))))]
            [:svg/g
             (for [i (range n*)] (circle (nth lefts i) mouse-y))
             (for [i (range n*)] (circle (nth rights i) mouse-y))
             (for [j (range n*)] (circle mouse-x (nth tops j)))
             (for [j (range n*)] (circle mouse-x (nth bottoms j)))
             (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth tops j)))
             (for [i (range n*) j (range n*)] (circle (nth lefts i) (nth bottoms j)))
             (for [i (range n*) j (range n*)] (circle (nth rights i) (nth tops j)))
             (for [i (range n*) j (range n*)] (circle (nth rights i) (nth bottoms j)))]))
      (fn [capture]
        (println "captured" capture))
      (fn [_ _]
        (println "invalidated")))
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

    ;(btn (rx (- @width 40)) 16 "red" "-" (fn [e] (swap! n dec)))
    ;(btn (rx (- @width 16)) 16 "green" "+" (fn [e] (swap! n inc)))

    ;[:svg/g {:on-mousedown (fn [e] (swap! n dec))}
    ; [:svg/circle {:fill "red"
    ;               :r    8 :cx (rx ) :cy 16}]
    ; :svg/text {:x (rx (- @width 50))}]
    ;[:svg/circle {:fill "green" :on-mousedown (fn [e] (swap! n inc))
    ;              :r 8 :cx (rx (- @width 16)) :cy 16}]
    ;
    ]

   ])

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



