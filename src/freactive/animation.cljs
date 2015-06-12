(ns freactive.animation
  (:require
    [freactive.core :as r]
    [freactive.dom :as dom]
    [goog.object]))

(deftype AnimationEaser [id state easing-fn animating on-complete
                         watches fwatches]
  Object
  (rawDeref [this] state)
  (reactiveDeref [this]
    (r/register-dep this id r/fwatch-binding-info)
    state)
  (clean [_])
  (addFWatch [this key f]
    (when-not (aget (.-fwatches this) key)
      (set! (.-watchers this) (inc (.-watchers this)))
      (aset (.-fwatches this) key f)))
  (removeFWatch [this key]
    (when (aget (.-fwatches this) key)
      (set! (.-watchers this) (dec (.-watchers this)))
      (js-delete (.-fwatches this) key)))
  (notifyFWatches [this oldVal newVal]
    (goog.object/forEach
     (.-fwatches this)
     (fn [f key _]
       (f key this oldVal newVal)))
    (doseq [[key f] (.-watches this)]
      (f key this oldVal newVal)))

  r/IReactive
  (-get-binding-fns [this] r/fwatch-binding-info)

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
  (-deref [this] (.reactiveDeref this)))

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

(defn quad-in [p] (* p p))

(defn quad-out [p] (- (* p (- p 2))))
