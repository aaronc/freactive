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

;(declare update-cursor-state)

;(defn- add-cursor-watch [cursor ref]
;  ((get-add-watch* ref)
;   ref cursor
;   (fn sully-cursor
;     ([]
;      (set! (.-dirty cursor) true)
;      (if-not (empty? (.-watches cursor))
;        (binding [*invalidate* nil]
;          @cursor
;          (-notify-invalidation-watches cursor))))
;     ([_ _]
;      (remove-invalidation-watch ref cursor)
;      (sully-cursor))
;     ([_ _ old-value new-value]
;      (remove-watch ref cursor)
;      (sully-cursor)))))

;(defn- update-cursor-state [cursor ref]
;  )

(defn- cursor-swap! [ref getter setter f]
  (swap! ref (fn [cur] (setter cur (f (getter cur))))))

(deftype ReactiveCursor [ref getter setter dirty state meta watches invalidation-watches lazy sully add-watch-fn]
  Object
  (equiv [this other]
    (-equiv this other))

  cljs.core/IAtom

  IReactive

  IReactiveExpression
  (-invalidate [_] (sully))
  (-compute [cursor]
    (set! (.-dirty cursor) false)
    (add-watch-fn)
    (let [new-value ((.-getter cursor) @ref)
          old-value (.-state cursor)]
      (when (not= old-value new-value)
        (set! (.-state cursor) new-value)
        (when-not (empty? (.-watches cursor))
          (-notify-watches cursor old-value new-value))
        (when-not (empty? (.-invalidation-watches cursor))
          (-notify-invalidation-watches cursor))
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
    (-write writer "#<ReactiveCursor: ")
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
  (-swap! [_ f] (cursor-swap! ref getter setter f))
  (-swap! [_ f x] (cursor-swap! ref getter setter #(f % x)))
  (-swap! [_ f x y] (cursor-swap! ref getter setter #(f % x y)))
  (-swap! [_ f x y more] (cursor-swap! ref getter setter #(apply f % x y more))))

(defn cursor* [ref korks-or-getter setter lazy]
  (let [ks (cond
            (keyword? korks-or-getter)
            [korks-or-getter]

            (sequential? korks-or-getter)
            korks-or-getter)
        getter (if ks (fn [cur] (get-in cur ks)) korks-or-getter)
        setter (or
                setter
                (when ks
                  (fn [cur new-sub] (assoc-in cur ks new-sub)))
                (fn [_ _] (assert false "Cursor does not support updates")))
        cursor (ReactiveCursor. ref getter setter true nil nil nil nil lazy nil nil)
        sully  (make-sully-fn cursor)
        add-watch-fn
        (if-let [add-watch* (get-add-watch* ref)]
          (fn [] (add-watch* ref cursor sully))
          (fn []))]
     (set! (.-sully cursor) sully)
     (set! (.-add-watch-fn cursor) add-watch-fn)
     (add-watch-fn)
     cursor))

(defn cursor
  ([ref korks-or-getter] (cursor* ref korks-or-getter nil false))
  ([ref getter setter] (cursor* ref getter setter false)))

(defn lazy-cursor
  ([ref korks-or-getter] (cursor* ref korks-or-getter nil true ))
  ([ref getter setter] (cursor* ref getter setter true)))
