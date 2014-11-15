(ns freactive.experimental.animation
  (:require
    [freactive.core :as r]))

(deftype AnimationEaser [])

(deftype AimationReactiveExpression [f base-rx active]
  IWatchable
  (-add-watch [this key cb]
    (if active
      (cb key this nil (f))))
  (-remove-watch [this key]
    (when-not active
      (-remove-watch base-rx key)))
  ;(-notify-watches [this oldval newval]
  ;  (-notify-watches base-rx oldval newval))


  r/IInvalidates
  (-add-invalidation-watch [this key cb]
    (if active
      (cb key this)
      (r/-add-invalidation-watch base-rx key cb)))
  (-remove-invalidation-watch [this key]
    (when-not active
      (r/-remove-invalidation-watch base-rx key)))
  ;(-notify-invalidation-watches [this]
  ;  (r/-notify-invalidation-watches base-rx))

  IDeref
  (-deref [_]
    (if active
      (do
        (when r/*invalidate-rx*
          (r/*invalidate-rx*))
        (f))
      @base-rx)))

(defn animation-rx* [f]
  (let [base-rx (r/rx* f)]
    (AimationReactiveExpression. f base-rx true)))
