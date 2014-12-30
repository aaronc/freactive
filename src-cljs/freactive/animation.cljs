(ns freactive.animation
  (:require
    [freactive.core :as r]
    [freactive.dom :as dom]
    [goog.object]))

(deftype AnimationEaser [id state easing-fn animating on-complete
                         watches fwatches]
  Object
  (fastDeref [this]
    (when-let [invalidate r/*invalidate-rx*]
      (.addFWatch this (.-id invalidate)
                  (fn [key ref _ _]
                    (.removeFWatch ref key)
                    (invalidate))))
    state)

  r/IReactive
  (-get-binding-fns [this]
    #js
    {:raw-deref #(.fastDeref %)
     :add-watch #(.addFWatch % %2 %3)
     :remove-watch #(.removeFWatch % %2)})

  IWatchable
  (-notify-watches [this oldval newval]
    (.notifyFWatches this oldval newval))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key))
    this)

  IDeref
  (-deref [this] (.fastDeref this)))

(r/apply-js-mixin AnimationEaser r/fwatch-mixin)

(defn easer [init-state]
  (AnimationEaser. (r/new-reactive-id) init-state nil false nil nil #js {}))

(defn start-easing!
  ([easer from to duration easing-fn when-complete]
   (let [cur (.-state easer)
         ratio (/ (- to cur) (- to from))
         duration (* ratio duration)]
     (start-easing! easer to duration easing-fn when-complete)))
  ([easer to duration easing-fn when-complete]
   (let [start-ms (.rawDeref dom/frame-time)
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
       (.addFWatch dom/frame-time (.-id easer)
                  (fn [_ _ _ new-ms]
                    (if (.-animating easer)
                      (let [cur-state (.-state easer)
                            new-state ((.-easing-fn easer) new-ms)]
                        (set! (.-state easer) new-state)
                        (.notifyFWatches easer cur-state new-state))
                      (do
                        (.removeFWatch dom/frame-time (.-id easer))
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
