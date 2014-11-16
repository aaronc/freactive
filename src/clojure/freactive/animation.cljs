(ns freactive.animation
  (:require
    [freactive.core :as r]
    [freactive.dom :as dom]))

(deftype AnimationEaser [state easing-fn animating on-complete
                         watches invalidation-watches]
  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key))
    this)

  IDeref
  (-deref [this]
    (if r/*invalidate-rx*
      (add-watch this r/*invalidate-rx* r/*invalidate-rx*))
    state))

(defn easer [init-state]
  (AnimationEaser. init-state nil false nil nil nil))

(defn start-easing!
  ([easer from to duration easing-fn when-complete]
   (let [cur (.-state easer)
         ratio (/ (- to cur) (- to from))
         duration (* ratio duration)]
     (start-easing! easer to duration easing-fn when-complete)))
  ([easer to duration easing-fn when-complete]
   (let [start-ms (r/-raw-deref dom/frame-time)
         from (.-state easer)
         total-change (- to from)
         scaled-easing-fn
         (fn [new-ms]
           (let [t (/ (- new-ms start-ms) duration)
                 t (if (>= t 1.0)
                     (do
                       (set! (.-animating easer) false)
                       ;;(println "ending animation loop")
                       1.0)
                     t)
                 y (easing-fn t)]
             ;;(println "easing" t (.-animating easer))
             (+ from (* y total-change))))]
     (set! (.-easing-fn easer) scaled-easing-fn)
     (set! (.-on-complete easer) when-complete)
     (when-not (.-animating easer)
       ;;(println "starting animation loop")
       (set! (.-animating easer) true)
       (add-watch dom/frame-time easer
                  (fn [_ _ _ new-ms]
                    (if (.-animating easer)
                      (let [cur-state (.-state easer)
                            new-state ((.-easing-fn easer) new-ms)]
                        (set! (.-state easer) new-state)
                        (-notify-watches easer cur-state new-state))
                      (do
                        (remove-watch dom/frame-time easer)
                        (when-let [cb (.-on-complete easer)]
                          (set! (.-on-complete easer) nil)
                          (cb)))))))
     easer)))

;(deftype AnimationReactiveExpression [state f active]
;  IWatchable
;  (-add-watch [this key cb]
;    (when active
;      (cb key this nil state)))
;  (-remove-watch [this key])
;  (-notify-watches [this oldval newval] )
;
;  r/IInvalidates
;  (-add-invalidation-watch [this key cb]
;    (when active
;      (cb key this)))
;  (-remove-invalidation-watch [this key])
;  (-notify-invalidation-watches [this])
;
;  IDeref
;  (-deref [_]
;    (when (and active r/*invalidate-rx*)
;      (r/*invalidate-rx*))
;    state))
;
;(defn animation-rx* [f]
;  (let [r (AnimationReactiveExpression. nil f true)]
;    (add-watch dom/frame-time r (fn [_ _ _ _] (set! (.-state r) (f))))
;    r))

;; Easing functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; Adapted from https://github.com/danielytics/ominate
; Who adapted it from https://github.com/warrenm/AHEasing
; And probably ultimately from Robert Penner

(def PI   (.-PI js/Math))
(def PI_2 (/ (.-PI js/Math) 2))

(def linear identity)

(defn quad-in
  "Modeled after the parabola y = x^2"
  [p]
  (* p p))

(defn quad-out
  "Modeled after the parabola y = -x^2 + 2x"
  [p]
  (- (* p (- p 2))))

(defn quad-in-out
  "Modeled after the piecewise quadratic
   y = (1/2)((2x)^2)               [0, 0.5)
   y = -(1/2)((2x-1)*(2x-3) - 1)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* 2 p p)
    (+ (* 4 p) (* -2 p p) -1)))

(defn cube-in
  "Modeled after the cubic y = x^3"
  [p]
  (* p p p))

(defn cube-out
  "Modeled after the cubic y = (x - 1)^3 + 1"
  [p]
  (let [f (dec p)]
    (inc (* f f f))))

(defn cube-in-out
  "Modeled after the piecewise cubic
   y = (1/2)((2x)^3)         [0, 0.5)
   y = (1/2)((2x-2)^3 + 2)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* p p p 4)
    (let [f (- (* 2 p) 2)]
      (inc (* 0.5 f f f)))))

(defn quart-in
  "Modeled after the quartic x^4"
  [p]
  (* p p p p))

(defn quart-out
  "Modeled after the quartic y = 1 - (x - 1)^4"
  [p]
  (let [f (dec p)]
    (inc (* f f f (- 1 p)))))

(defn quart-in-out
  "Modeled after the piecewise quartic
   y = (1/2)((2x)^4)          [0, 0.5)
   y = -(1/2)((2x-2)^4 - 2)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* p p p p 8)
    (let [f (dec p)]
      (inc (* -8 f f f f)))))

(defn quint-in
  "Modeled after the quintic y = x^5"
  [p]
  (* p p p p p))

(defn quint-out
  "Modeled after the quintic y = (x - 1)^5 + 1"
  [p]
  (let [f (dec p)]
    (inc (* f f f f f))))

(defn quint-in-out
  "Modeled after the piecewise quintic
   y = (1/2)((2x)^5)         [0, 0.5)
   y = (1/2)((2x-2)^5 + 2)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* 16 p p p p p)
    (let [f (- (* 2 p) 2)]
      (inc (* 0.5 f f f f f)))))

(defn sine-in
  "Modeled after quarter-cycle of sine wave"
  [p]
  (inc (.sin js/Math (* (dec p) PI_2))))

(defn sine-out
  "Modeled after quarter-cycle of sine wave (different phase)"
  [p]
  (.sin js/Math (* p PI_2)))

(defn sine-in-out
  "Modeled after half sine wave"
  [p]
  (* 0.5 (- 1 (.cos js/Math (* p PI)))))

(defn circular-in
  "Modeled after shifted quadrant IV of unit circle"
  [p]
  (- 1 (.sqrt js/Math (- 1 (* p p)))))

(defn circular-out
  "Modeled after shifted quadrant II of unit circle"
  [p]
  (.sqrt js/Math (* (- 2 p) p)))

(defn circular-in-out
  "Modeled after the piecewise circular function
   y = (1/2)(1 - sqrt(1 - 4x^2))             [0, 0.5)
   y = (1/2)(sqrt(-(2x - 3)*(2x - 1)) + 1)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* 0.5 (- 1 (.sqrt js/Math (- 1 (* 4 (* p p))))))
    (* 0.5 (inc (.sqrt js/Math (- (* (- (* 2 p) 3) (dec (* 2 p)))))))))

(defn exp-in
  "Modeled after the exponential function y = 2^(10(x - 1))"
  [p]
  (if (= p 0)
    p
    (.pow js/Math 2 (* 10 (dec p)))))

(defn exp-out
  "Modeled after the exponential function y = -2^(-10x) + 1"
  [p]
  (if (= p 1)
    p
    (- 1 (.pow js/Math 2 (* -10 p)))))

(defn exp-in-out
  "Modeled after the piecewise exponential
   y = (1/2)2^(10(2x - 1))           [0,0.5)
   y = -(1/2)*2^(-10(2x - 1))  + 1   [0.5,1]"
  [p]
  (if (or (= p 0) (= p 1))
    p
    (if (< p 0.5)
      (* 0.5 (.pow js/Math 2 (- (* 20 p) 10)))
      (inc (* -0.5 (.pow js/Math 2 (+ (* -20 p) 10)))))))

(defn elastic-in
  "Modeled after the damped sine wave y = sin(13PI_2*x)*pow(2, 10 * (x - 1))"
  [p]
  (* (.sin js/Math (* 13 PI_2 p))
     (.pow js/Math 2 (* 10 (dec p)))))

(defn elastic-out
  "Modeled after the damped sine wave y = sin(-13PI_2*(x + 1))*pow(2, -10x) + 1"
  [p]
  (inc (* (.sin js/Math (* -13 PI_2 (inc p)))
          (.pow js/Math 2 (* -10 p)))))

(defn elastic-in-out
  "Modeled after the piecewise exponentially-damped sine wave:
   y = (1/2)*sin(13PI_2*(2*x))*pow(2, 10 * ((2*x) - 1))        [0,0.5)
   y = (1/2)*(sin(-13PI_2*((2x-1)+1))*pow(2,-10(2*x-1)) + 2)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (* 0.5
       (.sin js/Math (* 13 PI_2 2 p))
       (.pow js/Math 2 (* 10 (dec (* 2 p)))))
    (* 0.5
       (+ (* (.sin js/Math (* -13 PI_2 (* 2 p)))
             (.pow js/Math 2 (* -10 (inc (* 2 p)))))
          2))))

(defn back-in
  "Modeled after the overshooting cubic y = x^3-x*sin(x*pi)"
  [p]
  (- (* p p p)
     (* p (.sin js/Math (* p PI)))))

(defn back-out
  "Modeled after overshooting cubic y = 1-((1-x)^3-(1-x)*sin((1-x)*pi))"
  [p]
  (let [f (- 1 p)]
    (- 1 (- (* f f f)
            (.sin js/Math (* f PI))))))

(defn back-in-out
  "Modeled after the piecewise overshooting cubic function:
   y = (1/2)*((2x)^3-(2x)*sin(2*x*pi))             [0, 0.5)
   y = (1/2)*(1-((1-x)^3-(1-x)*sin((1-x)*pi))+1)   [0.5, 1]"
  [p]
  (if (< p 0.5)
    (let [f (* 2 p)]
      (* 0.5 (- (* f f f)
                (.sin js/Math (* f PI)))))
    (let [f (- 1 (dec (* 2 p)))]
      (+ (* 0.5 (- 1 (- (* f f f)
                        (* f (.sin js/Math (* f PI))))))
         0.5))))

(defn bounce-out [p]
  (cond
    (< p (/ 1 2.75))    (* 7.5625 p p)
    (< p (/ 2 2.75))    (+ (* 7.5625
                              (- p (/ 1.5 2.75))
                              (- p (/ 1.5 2.75)))
                           0.75)
    (< p (/ 2.5 2.75))  (+ (* 7.5625
                              (- p (/ 2.5 2.75))
                              (- p (/ 2.5 2.75)))
                           0.9375)
    :else               (+ (* 7.5625
                              (- p (/ 2.625 2.75))
                              (- p (/ 2.625 2.75)))
                           0.984375)))

(defn bounce-in [p]
  (- 1 (bounce-out (- 1 p))))

(defn bounce-in-out [p]
  (if (< p 0.5)
    (* 0.5 (bounce-in (* p 2)))
    (+ (* 0.5 (bounce-out (dec (* p 2)))) 0.5)))


;TERMS OF USE - EASING EQUATIONS
;
;Open source under the BSD License.
;
;Copyright © 2001 Robert Penner
;All rights reserved.
;
;Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
;
;Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
;Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
;Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
;THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
