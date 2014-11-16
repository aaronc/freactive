(ns freactive.experimental.animation
  (:require
    [freactive.core :as r]
    [freactive.experimental.dom2 :as dom]))

(deftype AnimationEaser [state easing-fn animating on-complete
                         watches invalidation-watches]
  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (if animating
      (f)
      (set! (.-watches this) (assoc watches key f)))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key))
    this)

  r/IInvalidates
  (-notify-invalidation-watches [this]
    (doseq [[key f] invalidation-watches]
      (f key this)))
  (-add-invalidation-watch [this key f]
    (if animating
      (f)
      (set! (.-invalidation-watches this) (assoc invalidation-watches key f)))
    this)
  (-remove-invalidation-watch [this key]
    (set! (.-invalidation-watches this) (dissoc invalidation-watches key)))

  IDeref
  (-deref [this]
    (if r/*invalidate-rx*
      (if animating
        (r/*invalidate-rx*)
        (r/-add-invalidation-watch this r/*invalidate-rx* r/*invalidate-rx*)))
    state))

(defn easer [init-state]
  (AnimationEaser. init-state nil false nil))

(defn start-easer! [easer to in-ms easing-fn when-complete]
  (let [start-ms (r/-raw-deref dom/frame-time)
        from (.-state easer)
        total-change (- to from)
        scaled-easing-fn
        (fn [new-ms]
          (let [t (/ (- new-ms start-ms) in-ms)
                t (if (>= t 1.0)
                    (do
                      (set! (.-animating easer) false)
                      (println "ending animation loop")
                      1.0)
                    t)
                y (easing-fn t)]
            ;;(println "easing" t (.-animating easer))
            (+ from (* y total-change))))]
    (set! (.-easing-fn easer) scaled-easing-fn)
    (set! (.-on-complete easer) when-complete)
    (when-not (.-animating easer)
      (println "starting animation loop")
      (set! (.-animating easer) true)
      (let [state (.-state easer)]
        (-notify-watches easer state state))
      (r/-notify-invalidation-watches easer)
      (add-watch dom/frame-time easer
                 (fn [_ _ _ new-ms]
                   (if (.-animating easer)
                     (set! (.-state easer) (scaled-easing-fn new-ms))
                     (do
                       (remove-watch dom/frame-time easer)
                       (when-let [cb (.-on-complete easer)]
                         (set! (.-on-complete easer) nil)
                         (cb)))))))
    easer))

(deftype AnimationReactiveExpression [state f active]
  IWatchable
  (-add-watch [this key cb]
    (when active
      (cb key this nil state)))
  (-remove-watch [this key])
  (-notify-watches [this oldval newval] )

  r/IInvalidates
  (-add-invalidation-watch [this key cb]
    (when active
      (cb key this)))
  (-remove-invalidation-watch [this key])
  (-notify-invalidation-watches [this])

  IDeref
  (-deref [_]
    (when (and active r/*invalidate-rx*)
      (r/*invalidate-rx*))
    state))

(defn animation-rx* [f]
  (let [r (AnimationReactiveExpression. nil f true)]
    (add-watch dom/frame-time r (fn [_ _ _ _] (set! (.-state r) (f))))
    r))

(defn linear [t] t)


