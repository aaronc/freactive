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

(defn easing-chain [easings]
  (if-let [easing-params (first easings)]
    (let [next-easing (easing-chain (rest easings))]
      (fn [callback]
        (apply start-easing!
               (conj easing-params (fn [] (next-easing callback))))))
    (fn [callback]
      (when callback
        (callback)))))

(def linear identity)

(defn quad-in
  "Modeled after the parabola y = x^2"
  [p]
  (* p p))

(defn quad-out
  "Modeled after the parabola y = -x^2 + 2x"
  [p]
  (- (* p (- p 2))))
