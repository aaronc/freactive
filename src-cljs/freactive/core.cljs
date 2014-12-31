(ns freactive.core
  (:refer-clojure :exclude [atom])
  (:require [goog.object]))

;; Core API

(deftype BindingInfo [raw-deref add-watch remove-watch clean])

(defprotocol IReactive
  (-get-binding-fns [this]))

(def ^:dynamic *register-dep* nil)

(defn register-dep [dep id binding-info]
  (when-let [rdep *register-dep*]
    (rdep dep id binding-info)))

;; END Core API

(def ^:dynamic *lazy* nil)

(def ^:dynamic *do-trace-captures* nil)

(def ^:dynamic *trace-capture* nil)

(def ^:private auto-reactive-id 0)

(defn new-reactive-id []
  (let [id auto-reactive-id]
    (set! auto-reactive-id (inc auto-reactive-id))
    (str "-r." id)))

(def ^:private iwatchable-binding-fns
  (BindingInfo. cljs.core/-deref cljs.core/-add-watch
          cljs.core/-remove-watch nil))

(def ^:private deref-only-binding-fns
  (BindingInfo. cljs.core/-deref nil nil nil))

(defn get-binding-fns [iref]
  (cond
   (satisfies? IReactive iref) (-get-binding-fns iref)
   (satisfies? IWatchable iref) iwatchable-binding-fns
   :default deref-only-binding-fns))

(defn apply-js-mixin [the-type mixin]
  (let [ptype (.-prototype the-type)]
    (goog.object/forEach
     mixin
     (fn [val key obj]
       (aset ptype key val)))))

(defn- -addFWatch [key f]
  (this-as this
           (when-not (aget (.-fwatches this) key)
             (set! (.-watchers this) (inc (.-watchers this)))
             (aset (.-fwatches this) key f))))

(defn- -removeFWatch [key]
  (this-as this
           (when (aget (.-fwatches this) key)
             (set! (.-watchers this) (dec (.-watchers this)))
             (js-delete (.-fwatches this) key))))

(defn- -notifyFWatches [oldVal newVal]
  (this-as this
           (goog.object/forEach
            (.-fwatches this)
            (fn [f key _]
              (f key this oldVal newVal)))
           (doseq [[key f] (.-watches this)]
             (f key this oldVal newVal))))

(def fwatch-mixin
  #js {:addFWatch -addFWatch
       :removeFWatch -removeFWatch
       :notifyFWatches -notifyFWatches})

(let [core-deref cljs.core/deref]
  (set! cljs.core/deref (fn [x]
                          (if (.-fastDeref x)
                            (.fastDeref x)
                            (core-deref x)))))

(def fwatch-binding-info
  (BindingInfo.
   #(.rawDeref %) #(.addFWatch % %2 %3) #(.removeFWatch % %2) #(.clean %)))

(deftype ReactiveAtom [id state meta validator watches fwatches watchers]
  Object
  (equiv [this other]
    (-equiv this other))
  (rawDeref [_] state)
  (fastDeref [this]
    (register-dep this id fwatch-binding-info) 
    state)
  (clean [this])
  cljs.core/IAtom

  IReactive
  (-get-binding-fns [this] fwatch-binding-info)

  cljs.core/IEquiv
  (-equiv [o other] (identical? o other))

  cljs.core/IDeref
  (-deref [this] (.fastDeref this))

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveAtom: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (.notifyFWatches this oldval newval))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key))
    this)

  IHash
  (-hash [this] (goog/getUid this))

  IReset
  (-reset! [a new-value]
    (let [old-value (.-state a)]
        (when-not (identical? old-value new-value)
          (let [validate (.-validator a)]
            (when-not (nil? validate)
              (assert (validate new-value) "Validator rejected reference state")))
          (set! (.-state a) new-value)
          (.notifyFWatches a old-value new-value))
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

(apply-js-mixin ReactiveAtom fwatch-mixin)

;; (extend ReactiveAtom
;;   IWatchable
;;   IWatchable-extension)

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
  ([x] (ReactiveAtom. (new-reactive-id )x nil nil nil #js {} 0))
  ([x & {:keys [meta validator]}] (ReactiveAtom. (new-reactive-id) x meta validator nil #js {} 0)))

;; (defn- make-invalidate-fn [reactive id]
;;   (let [invalidate-fn
;;         (fn invalidate []
;;           (when-not (.-dirty reactive)
;;             (set! (.-dirty reactive) true)
;;             (if (> (.-watchers reactive) 0)
;;               ;; updates state and notifies watches
;;               (when (.compute reactive)
;;                 (.notifyInvalidationWatches reactive))
;;               ;; updates only invalidation watches
;;               (.notifyInvalidationWatches reactive))))]
;;     (set! (.-id invalidate-fn) id)
;;     (set! (.-deps invalidate-fn) #js {})
;;     invalidate-fn))

(defn- make-register-dep [rx]
  (fn do-register-dep [dep id binding-info]
    (when *trace-capture* (*trace-capture* dep))
    (aset (.-deps rx) id #js [dep binding-info])
    ;; (println "cur deps:" (.-deps rx))
    ((.-add-watch binding-info)
     dep (.-id rx)
     (fn []
       ((.-remove-watch binding-info) dep (.-id rx))
       (.invalidate rx)))))

(defn- lazy? [default-laziness]
  (if-not (nil? *lazy*) *lazy* default-laziness))

;; (defn- register-eager-rx-dep
;;   [id rx]
;;   (when-let [invalidate *invalidate-rx*]
;;     (when *trace-capture* (*trace-capture* rx))
;;     (aset (.-deps invalidate) id rx)
;;     (.addFWatch
;;      rx (.-id invalidate)
;;      (fn [_ _ _ _]
;;        (.removeFWatch rx id)
;;        (invalidate)))))

;; (defn- register-lazy-rx-dep
;;   [id rx]
;;   (when-let [invalidate *invalidate-rx*]
;;     (when *trace-capture* (*trace-capture* rx))
;;     (aset (.-deps invalidate) id rx)
;;     (.addInvalidationWatch
;;      rx (.-id invalidate)
;;      (fn [_ _]
;;        (.removeInvalidationWatch rx id)
;;        (invalidate)))))

(defn- -notifyInvalidationWatches []
  (this-as this
           (goog.object/forEach
            (.-invalidation-watches this)
            (fn [f key _]
              (f key this)))))

(defn- -addInvalidationWatch [key f]
  (this-as this
           (when-not (aget (.-invalidation-watches this) key)
             (set! (.-iwatchers this) (inc (.-iwatchers this)))
             (aset (.-invalidation-watches this) key f))
           this))

(defn- -removeInvalidationWatch [key]
  (this-as this
           (when (aget (.-invalidation-watches this) key)
             (set! (.-iwatchers this) (dec (.-iwatchers this)))
             (js-delete (.-invalidation-watches this) key))
           this))

(def invalidates-mixin
  #js {:notifyInvalidationWatches -notifyInvalidationWatches
       :addInvalidationWatch -addInvalidationWatch
       :removeInvalidationWatch -removeInvalidationWatch
       :invalidate
       (fn invalidate []
         (this-as this
                  (when-not (.-dirty this)
                    (set! (.-dirty this) true)
                    (if (> (.-watchers this) 0)
                      ;; updates state and notifies watches
                      (when (.compute this)
                        (.notifyInvalidationWatches this))
                      ;; updates only invalidation watches
                      (.notifyInvalidationWatches this))
                    (.clean this)
                    )))})

(def invalidates-binding-info
  (BindingInfo.
   #(.rawDeref %)
   #(.addInvalidationWatch % %2 %3)
   #(.removeInvalidationWatch % %2)
   #(.clean %)))

(def rx-mixin
  #js
  {:fastDeref (fn fastDeref []
                (this-as this
                         (if (lazy? (.-lazy this))
                           (register-dep this (.-id this) invalidates-binding-info)
                           (register-dep this (.-id this) fwatch-binding-info))
                         (when (.-dirty this) (.compute this))
                         (.-state this)))
   :rawDeref (fn rawDeref []
               (this-as this
                        (when (.-dirty this)
                          (binding [*register-dep* nil]
                            (.compute this)))
                        (.-state this)))})

(deftype ReactiveExpression [id ^:mutable state ^:mutable dirty f deps meta watches fwatches watchers
                             invalidation-watches iwatchers
                             register-dep-fn lazy trace-captures]
  Object
  (equiv [this other]
    (-equiv this other))
  (compute [this]
    (set! dirty false)
    (let [old-val state
          new-val (binding [*register-dep* register-dep-fn
                            *trace-capture* (when trace-captures
                                              (trace-captures)
                                              trace-captures)] (f))]
      (when-not (identical? old-val new-val)
        (set! state new-val)
        (.notifyFWatches this old-val new-val)
        new-val)))
  (clean [this]
    ;; (println "trying to clean" watchers iwatchers invalidation-watches)
    (when ;;true
        (and (identical? 0 watchers) (identical? 0 iwatchers))
      ;; (println "cleaning" id)
      (goog.object/forEach deps
                           (fn [val key obj]
                             ;; (println "cleaning:" key val)
                             (let [dep (aget val 0)
                                   binding-info (aget val 1)]
                               (let [remove-watch* (.-remove-watch binding-info)]
                                 (remove-watch* dep id))
                               (when-let [clean* (.-clean binding-info)]
                                 (clean* dep)))
                             (js-delete obj key)))
      ;; (.invalidate this)
      ;; (when-not (.-dirty this)
      ;;   (.invalidate this))
      (set! (.-dirty this) true)
    ))
  
  IReactive
  (-get-binding-fns [this]
    (if lazy invalidates-binding-info fwatch-binding-info))

  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this] (.fastDeref this))

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveComputation: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (.notifyFWatches this oldval newval))
  (-add-watch [this key f]
    (when-not (contains? watches key)
      (set! (.-watchers this) (inc watchers))
      (set! (.-watches this) (assoc watches key f)))
    this)
  (-remove-watch [this key]
    (when (contains? watchers key)
      (set! (.-watchers this) (dec watchers))
      (set! (.-watches this) (dissoc watches key)))
    this)

  IHash
  (-hash [this] (goog/getUid this)))

(apply-js-mixin ReactiveExpression fwatch-mixin)
(apply-js-mixin ReactiveExpression invalidates-mixin)
(apply-js-mixin ReactiveExpression rx-mixin)

(defn rx*
  ([f] (rx* f true))
  ([f lazy]
   (let [id (new-reactive-id)
         reactive (ReactiveExpression. id nil true f #js {} nil nil #js {} 0 #js {} 0 nil lazy
                                       *do-trace-captures*)]
     (set! (.-register-dep-fn reactive) (make-register-dep reactive))
     reactive)))

(defn- cursor-swap! [cursor ref getter setter f]
  (swap! ref (fn [cur] (setter cur (f (getter cur)))))
  (.rawDeref cursor))

(deftype ReactiveCursor [id ref getter setter dirty state meta watches fwatches watchers invalidation-watches iwatchers lazy invalidate add-watch-fn remove-watch-fn]
  Object
  (equiv [this other]
    (-equiv this other))
  (compute [cursor]
    (set! (.-dirty cursor) false)
    (add-watch-fn this)
    (let [new-value ((.-getter cursor) @ref)
          old-value (.-state cursor)]
      (when-not (identical? old-value new-value)
        (set! (.-state cursor) new-value)
        (when (> watchers 0)
          (.notifyFWatches cursor old-value new-value))
        (when (> iwatchers 0)
          (.notifyInvalidationWatches cursor))
        new-value)))
  (clean [this]
    (when (identical? 0 (.-watchers this)) (identical? 0 (.-iwatchers this))
          (remove-watch-fn ref id)
          (set! (.-dirty this) true)))

  cljs.core/IAtom

  IReactive
  (-get-binding-fns [this]
    (if lazy invalidates-binding-info fwatch-binding-info))

  cljs.core/IEquiv
  (-equiv [o other] (identical? o other))

  cljs.core/IDeref
  (-deref [this] (.fastDeref this))

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveCursor: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (.notifyFWatches this oldval newval))

  (-add-watch [this key f]
    (when-not (contains? watches key)
      (set! (.-watchers this) (inc watchers))
      (set! (.-watches this) (assoc watches key f)))
    this)
  (-remove-watch [this key]
    (when (contains? watches key)
      (set! (.-watchers this) (dec watchers))
      (set! (.-watches this) (dissoc watches key)))
    this)

  IHash
  (-hash [this] (goog/getUid this))

  IReset
  (-reset! [this new-value]
    (swap! ref (fn [cur] (setter cur new-value)))
    (.rawDeref this))

  ISwap
  (-swap! [this f] (cursor-swap! this ref getter setter f))
  (-swap! [this f x] (cursor-swap! this ref getter setter #(f % x)))
  (-swap! [this f x y] (cursor-swap! this ref getter setter #(f % x y)))
  (-swap! [this f x y more] (cursor-swap! this ref getter setter #(apply f %  x y  more))))

(apply-js-mixin ReactiveCursor fwatch-mixin)
(apply-js-mixin ReactiveCursor invalidates-mixin)
(apply-js-mixin ReactiveExpression rx-mixin)

(defn cursor* [ref korks-or-getter setter lazy]
  (let [id (new-reactive-id)
        ks (cond
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
        cursor (ReactiveCursor. id ref getter setter true nil nil nil #js {} 0 #js {} 0 lazy nil nil nil)
        ;; invalidate  (make-invalidate-fn cursor id)
        binding-fns (get-binding-fns ref)
        add-watch-fn
        (if-let [add-watch* (.-add-watch binding-fns)]
          (fn [cursor] (add-watch* ref id (fn [] (.invalidate cursor))))
          (fn []))
        remove-watch-fn
        (if-let [remove-watch* (.-remove-watch binding-fns)]
          (fn [] (remove-watch* ref id))
          (fn []))]
     ;; (set! (.-invalidate cursor) invalidate)
     (set! (.-add-watch-fn cursor) add-watch-fn)
     (set! (.-remove-watch-fn cursor) add-watch-fn)
     (add-watch-fn cursor)
     cursor))

(defn cursor
  ([ref korks-or-getter] (cursor* ref korks-or-getter nil false))
  ([ref getter setter] (cursor* ref getter setter false)))

(defn lazy-cursor
  ([ref korks-or-getter] (cursor* ref korks-or-getter nil true))
  ([ref getter setter] (cursor* ref getter setter true)))
