(ns freactive.core
  (:refer-clojure :exclude [atom]))

;;(def ^:dynamic *register-dep* nil)

(def ^:dynamic *invalidate-rx* nil)

(def ^:dynamic *lazy* nil)

;(defn register-dep [ref]
;  (when *register-dep* (*register-dep* ref)))

(defprotocol IReactive)

(defprotocol IInvalidates
  (-notify-invalidation-watches [this])
  (-add-invalidation-watch [this key f])
  (-remove-invalidation-watch [this key]))


(defn add-invalidation-watch [this key f]
  (-add-invalidation-watch this key f))

(defn remove-invalidation-watch [this key]
  (-remove-invalidation-watch this key))

(deftype ReactiveAtom [state meta validator watches]
  Object
  (equiv [this other]
    (-equiv this other))

  cljs.core/IAtom

  IReactive

  cljs.core/IEquiv
  (-equiv [o other] (identical? o other))

  cljs.core/IDeref
  (-deref [this]
    (when-let [invalidate *invalidate-rx*]
      (-add-watch this invalidate invalidate))
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveAtom: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog/getUid this))

  IReset
  (-reset! [a new-value]
    (let [old-value (.-state a)]
        (when (not= old-value new-value)
          (let [validate (.-validator a)]
            (when-not (nil? validate)
              (assert (validate new-value) "Validator rejected reference state")))
          (set! (.-state a) new-value)
          (when-not (empty? (.-watches a))
            (-notify-watches a old-value new-value)))
        new-value))

  ISwap
  (-swap! [a f]
    (-reset! a (f (.-state a))))
  (-swap! [a f x]
    (-reset! a (f (.-state a) x)))
  (-swap! [a f x y]
    (-reset! a (f (.-state a) x y)))
  (-swap! [a f x y more]
    (-reset! a (apply f (.-state a) x y more))))

(defn atom
  "Creates and returns a ReactiveAtom with an initial value of x and zero or
  more options (in any order):
  :meta metadata-map
  :validator validate-fn
  If metadata-map is supplied, it will be come the metadata on the
  atom. validate-fn must be nil or a side-effect-free fn of one
  argument, which will be passed the intended new state on any state
  change. If the new state is unacceptable, the validate-fn should
  return false or throw an Error. If either of these error conditions
  occur, then the value of the atom will not change."
  ([x] (ReactiveAtom. x nil nil nil))
  ([x & {:keys [meta validator]}] (ReactiveAtom. x meta validator nil)))

(defprotocol IReactiveExpression
  (-invalidate [this])
  (-compute [this]))

(defn- make-sully-fn [reactive]
  (fn sully
    ([]
     (when-not (.-dirty reactive)
       (set! (.-dirty reactive) true)
       (if-not (empty? (.-watches reactive))
         ;; updates state and notifies watches
         (when (-compute reactive)
           (-notify-invalidation-watches reactive))
         ;; updates only invalidation watches
         (-notify-invalidation-watches reactive))))
    ([key ref]
     (-remove-invalidation-watch ref key)
     (sully))
    ([key ref _ _]
     (-remove-watch ref key)
     (sully))))

(defn get-add-watch* [ref]
  (cond
    (satisfies? IInvalidates ref)
    add-invalidation-watch
    (satisfies? IWatchable ref)
    add-watch))

(defn get-remove-watch* [ref]
  (cond
    (satisfies? IInvalidates ref)
    remove-invalidation-watch
    (satisfies? IWatchable ref)
    remove-watch))

(defn get-add-remove-watch* [ref]
  (cond
    (satisfies? IInvalidates ref)
    [add-invalidation-watch remove-invalidation-watch]
    (satisfies? IWatchable ref)
    [add-watch remove-watch]))

(defn- lazy? [default-laziness]
  (if-not (nil? *lazy*) *lazy* default-laziness))

(defn- register-rx-dep [rx default-laziness]
  (when-let [invalidate *invalidate-rx*]
    (if (lazy? default-laziness)
      (-add-invalidation-watch rx invalidate invalidate)
      (-add-watch rx invalidate invalidate))))

(deftype ReactiveExpression [^:mutable state ^:mutable dirty f ^:mutable deps meta
                              ^:mutable watches ^:mutable invalidation-watches sully lazy]
  Object
  (equiv [this other]
    (-equiv this other))

  IReactive

  IReactiveExpression
  (-invalidate [_] (sully))
  (-compute [this]
    (set! dirty false)
    (let [old-val state
          new-val (binding [*invalidate-rx* sully] (f))]
      (when (not= old-val new-val)
        (set! state new-val)
        (-notify-watches this old-val new-val)
        new-val)))

  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this]
    (register-rx-dep this lazy)
    (when dirty (-compute this))
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveComputation: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IInvalidates
  (-notify-invalidation-watches [this]
    (doseq [[key f] invalidation-watches]
      (f key this)))
  (-add-invalidation-watch [this key f]
    (set! (.-invalidation-watches this) (assoc invalidation-watches key f))
    this)
  (-remove-invalidation-watch [this key]
    (set! (.-invalidation-watches this) (dissoc invalidation-watches key)))

  IHash
  (-hash [this] (goog/getUid this)))

(defn rx*
  ([f] (rx* f true))
  ([f lazy]
   (let [reactive (ReactiveExpression. nil true f nil nil nil nil nil lazy)]
     (set! (.-sully reactive) (make-sully-fn reactive))
     reactive)))

;(declare update-lens-state)

;(defn- add-lens-watch [lens ref]
;  ((get-add-watch* ref)
;   ref lens
;   (fn sully-lens
;     ([]
;      (set! (.-dirty lens) true)
;      (if-not (empty? (.-watches lens))
;        (binding [*invalidate* nil]
;          @lens
;          (-notify-invalidation-watches lens))))
;     ([_ _]
;      (remove-invalidation-watch ref lens)
;      (sully-lens))
;     ([_ _ old-value new-value]
;      (remove-watch ref lens)
;      (sully-lens)))))

;(defn- update-lens-state [lens ref]
;  )

(defn- lens-swap! [ref getter setter f]
  (swap! ref
         (fn [cur]
           (setter cur (f (getter cur))))))

(deftype ReactiveLens [ref getter setter dirty state meta watches invalidation-watches lazy sully add-watch-fn]
  Object
  (equiv [this other]
    (-equiv this other))

  cljs.core/IAtom

  IReactive

  IReactiveExpression
  (-invalidate [_] (sully))
  (-compute [lens]
    (set! (.-dirty lens) false)
    ((.-add-watch-fn lens))
    (let [new-value ((.-getter lens) @ref)
          old-value (.-state lens)]
      (when (not= old-value new-value)
        (set! (.-state lens) new-value)
        (when-not (empty? (.-watches lens))
          (-notify-watches lens old-value new-value))
        (when-not (empty? (.-invalidation-watches lens))
          (-notify-invalidation-watches lens))
        new-value)))

  cljs.core/IEquiv
  (-equiv [o other] (identical? o other))

  cljs.core/IDeref
  (-deref [this]
    (register-rx-dep this lazy)
    (when dirty (-compute this))
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveLens: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IInvalidates
  (-notify-invalidation-watches [this]
    (doseq [[key f] invalidation-watches]
      (f key this)))
  (-add-invalidation-watch [this key f]
    (set! (.-invalidation-watches this) (assoc invalidation-watches key f))
    this)
  (-remove-invalidation-watch [this key]
    (set! (.-invalidation-watches this) (dissoc invalidation-watches key)))

  IHash
  (-hash [this] (goog/getUid this))

  IReset
  (-reset! [_ new-value]
    (swap! ref (fn [cur] (setter cur new-value))))

  ISwap
  (-swap! [_ f] (lens-swap! ref getter setter f))
  (-swap! [_ f x] (lens-swap! ref getter setter #(f % x)))
  (-swap! [_ f x y] (lens-swap! ref getter setter #(f % x y)))
  (-swap! [_ f x y more] (lens-swap! ref getter setter #(apply f % x y more))))

(defn- lens* [ref getter setter lazy]
  (let [setter (or setter (fn [_ _] (assert false "Lens does not support updates")))
        lens (ReactiveLens. ref getter setter true nil nil nil nil lazy nil nil)
        sully  (make-sully-fn lens)
        add-watch-fn (if-let [add-watch* (get-add-watch* ref)]
                        (fn [] (add-watch* ref lens sully))
                        (fn []))]
     (set! (.-sully lens) sully)
     (set! (.-add-watch-fn lens) add-watch-fn)
     (add-watch-fn)
     lens))

(defn lens
  ([ref getter] (lens* ref getter nil false))
  ([ref getter setter] (lens* ref getter setter false)))

(defn lazy-lens
  ([ref getter] (lens* ref getter nil true))
  ([ref getter setter] (lens* ref getter setter true)))

(defn cursor [ref korks]
  (let [path (if (keyword? korks) [korks] korks)]
    (lens ref
          (fn [cur] (get-in cur path))
          (fn [cur new-sub] (assoc-in cur path new-sub)))))
