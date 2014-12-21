(ns freactive.core
  (:refer-clojure :exclude [atom])
  (:require [goog.object]))

;;(def ^:dynamic *register-dep* nil)

(def ^:dynamic *invalidate-rx* nil)

(def ^:dynamic *lazy* nil)

(def ^:dynamic *do-trace-captures* nil)

(def ^:dynamic *trace-capture* nil)

(def ^:private auto-reactive-id 0)

(defn new-reactive-id []
  (let [id auto-reactive-id]
    (set! auto-reactive-id (inc auto-reactive-id))
    (str "-r." id)))

;(defn register-dep [ref]
;  (when *register-dep* (*register-dep* ref)))

(defprotocol IReactive
  (-get-binding-fns [this]))

;; (defprotocol IInvalidates
;;   (-notify-invalidation-watches [this])
;;   (-add-invalidation-watch [this key f])
;;   (-remove-invalidation-watch [this key]))

(defn apply-js-mixin [the-type mixin]
  (let [ptype (.-prototype the-type)]
    (goog.object/forEach
     mixin
     (fn [val key obj]
       (aset ptype key val)))))

(defn- -addFWatch [key f]
  (this-as this
           (set! (.-watchers this) (inc (.-watchers this)))
           (aset (.-fwatches this) key f)))

(defn- -removeFWatch [ key]
  (this-as this
           (set! (.-watchers this) (dec (.-watchers this)))
           (js-delete (.-fwatches this) key)))

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

;; (def IWatchable-extension
;;   {:-notify-watches
;;    (fn -notify-watches
;;      [oldval newval]
;;      (this-as this
;;               (.notifyFWatches this oldval newval)))
;;    :-add-watch
;;    (fn -add-watch
;;      [key f]
;;      (this-as this
;;               (set! (.-watches this) (assoc (.-watches this) key f))))
;;    :-remove-watch
;;    (fn -remove-watch
;;      [key]
;;      (this-as this
;;               (set! (.-watches this) (dissoc (.-watches this) key))))})


(deftype ReactiveAtom [state meta validator watches fwatches watchers]
  Object
  (equiv [this other]
    (-equiv this other))
  (rawDeref [_] state)
  (fastDeref [this]
    (when-let [invalidate *invalidate-rx*]
      (.addFWatch this (.-id invalidate)
                  (fn [key ref _ _]
                    (.removeFWatch ref key)
                    (invalidate)))
      (when *trace-capture* (*trace-capture* this)))
    state)

  cljs.core/IAtom

  IReactive
  (-get-binding-fns [this]
    #js
    {:deref #(.fastDeref %)
     :add_watch #(.addFWatch % %2 %3)
     :remove_watch #(.removeFWatch % %2)})

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
  ([x] (ReactiveAtom. x nil nil nil #js {} 0))
  ([x & {:keys [meta validator]}] (ReactiveAtom. x meta validator nil #js {} 0)))

(defn- make-sully-fn [reactive id]
  (let [sully-fn
        (fn sully
          ([]
           (when-not (.-dirty reactive)
             (set! (.-dirty reactive) true)
             (if (> (.-watchers reactive))
               ;; updates state and notifies watches
               (when (.compute reactive)
                 (.notifyInvalidationWatches reactive))
               ;; updates only invalidation watches
               (.notifyInvalidationWatches reactive))))
          ([key ref]
           (.removeInvalidationWatch ref key)
           (sully))
          ([key ref _ _]
           (-remove-watch ref key)
           (sully)))]
    (set! (.-id sully-fn) id)
    sully-fn))

;; (defn get-add-watch* [ref]
;;   (cond
;;     (satisfies? IInvalidates ref)
;;     add-invalidation-watch
;;     (satisfies? IWatchable ref)
;;     add-watch))

;; (defn get-remove-watch* [ref]
;;   (cond
;;     (satisfies? IInvalidates ref)
;;     remove-invalidation-watch
;;     (satisfies? IWatchable ref)
;;     remove-watch))

;; (defn get-add-remove-watch* [ref]
;;   (cond
;;     (satisfies? IInvalidates ref)
;;     ;[add-invalidation-watch remove-invalidation-watch]
;;     [(fn [ref key f] (.addInvalidationWatch ref key f))
;;     (fn [ref key] (.removeInvalidationWatch ref key))]

;;     (and (.-addFWatch ref) (.-removeFWatch ref))
;;     [(fn [ref key f] (.addFWatch ref key f))
;;      (fn [ref key] (.removeFWatch ref key))]

;;     (satisfies? IWatchable ref)
;;     [add-watch remove-watch]))

(def ^:private iwatchable-binding-fns
  #js {:deref -deref
       :add_watch -add-watch
       :remove_watch -remove-watch})

(def ^:private deref-only-binding-fns
  #js {:deref -deref})

(defn get-binding-fns [iref]
  (cond
   (satisfies? IReactive iref) (-get-binding-fns iref)
   (satisfies? IWatchable iref) iwatchable-binding-fns
   :default deref-only-binding-fns))

(defn- lazy? [default-laziness]
  (if-not (nil? *lazy*) *lazy* default-laziness))

(defn- register-rx-dep [rx default-laziness]
  (when-let [invalidate *invalidate-rx*]
    (when *trace-capture* (*trace-capture* rx))
    (if (lazy? default-laziness)
      (.addInvalidationWatch rx (.-id invalidate) invalidate)
      (-add-watch rx (.-id invalidate) invalidate))))

(defn- -notifyInvalidationWatches []
  (this-as this
           (goog.object/forEach
            (.-invalidation-watches this)
            (fn [f key _]
              (f key this)))))
(defn- -addInvalidationWatch [key f]
  (this-as this
           (aset (.-invalidation-watches this) key f)
           this))

(defn- -removeInvalidationWatch [this key]
  (this-as this
           (js-delete (.-invalidation-watches this) key)
           this))

(def invalidates-mixin
  #js {:notifyInvalidationWatches -notifyInvalidationWatches
       :addInvalidationWatch -addInvalidationWatch
       :removeInvalidationWatch -removeInvalidationWatch})

(deftype ReactiveExpression [id ^:mutable state ^:mutable dirty f ^:mutable deps meta
                              ^:mutable watches fwatches watchers ^:mutable invalidation-watches sully lazy
                             trace-captures]
  Object
  (equiv [this other]
    (-equiv this other))
  (compute [this]
    (set! dirty false)
    (let [old-val state
          new-val (binding [*invalidate-rx* sully
                            *trace-capture* (when trace-captures
                                              (trace-captures)
                                              trace-captures)] (f))]
      (when-not (identical? old-val new-val)
        (set! state new-val)
        (.notifyFWatches this old-val new-val)
        new-val)))
  (rawDeref [this]
    (when dirty (.compute this))
    state)
  (fastDeref [this]
    (register-rx-dep this lazy)
    (when dirty (.compute this))
    state)

  IReactive
  (-get-binding-fns [this]
    #js
    {:deref #(.fastDeref %)
     :add_watch (if lazy #(.addInvalidationWatch % %2 %3) #(.addFWatch % %2 %3))
     :remove_watch (if lazy #(.removeInvalidationWatch % %2) #(.removeFWatch % %2))})

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
    (set! (.-watchers this) (inc watchers))
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watchers this) (dec watchers))
    (set! (.-watches this) (dissoc watches key))
    this)

  IHash
  (-hash [this] (goog/getUid this)))

(apply-js-mixin ReactiveExpression fwatch-mixin)
(apply-js-mixin ReactiveExpression invalidates-mixin)

(defn rx*
  ([f] (rx* f true))
  ([f lazy]
   (let [id (new-reactive-id)
         reactive (ReactiveExpression. id nil true f nil nil nil #js {} 0 #js {} nil lazy
                                       (or *do-trace-captures* (fn [_])))]
     (set! (.-sully reactive) (make-sully-fn reactive id))
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

(defn- cursor-swap! [cursor ref getter setter f]
  (swap! ref (fn [cur] (setter cur (f (getter cur)))))
  (.rawDeref cursor))

(deftype ReactiveCursor [id ref getter setter dirty state meta watches fwatches watchers invalidation-watches lazy sully add-watch-fn]
  Object
  (equiv [this other]
    (-equiv this other))
  (compute [cursor]
    (set! (.-dirty cursor) false)
    (add-watch-fn)
    (let [new-value ((.-getter cursor) @ref)
          old-value (.-state cursor)]
      (when-not (identical? old-value new-value)
        (set! (.-state cursor) new-value)
        (when-not (empty? (.-watches cursor))
          (.notifyFWatches cursor old-value new-value))
        (when-not (empty? (.-invalidation-watches cursor))
          (.notifyInvalidationWatches cursor))
        new-value)))
  (fastDeref [this]
    (register-rx-dep this lazy)
    (when dirty (.compute this))
    state)
  (rawDeref [this]
    (when dirty (.compute this))
    state)

  cljs.core/IAtom

  IReactive
  (-get-binding-fns [this]
    #js
    {:deref #(.fastDeref %)
     :add_watch (if lazy #(.addInvalidationWatch % %2 %3) #(.addFWatch % %2 %3))
     :remove_watch (if lazy #(.removeInvalidationWatch %2) #(.removeFWatch % %2))})

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
    (set! (.-watchers this) (inc watchers))
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watchers this) (dec watchers))
    (set! (.-watches this) (dissoc watches key))
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

;; (def ^:private IInvalidates-mixin
;;   {:-notify-invalidation-watches
;;    (fn --notify-invalidation-watches [this]
;;      (goog.object/forEach (.-invalidation-watches this)
;;        (fn [f key _] (f key this))))

;;    :-add-invalidation-watch
;;    (fn --add-invalidation-watch
;;      [this key f]
;;      (aset (.-invalidation-watches this) key f)
;;      this)

;;    :-remove-invalidation-watch
;;    (fn -remove-invalidation-watch
;;      [this key]
;;      (js-delete (.-invalidation-watches this) key)
;;      this)})

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
        cursor (ReactiveCursor. id ref getter setter true nil nil nil #js {} 0 #js {} lazy nil nil)
        sully  (make-sully-fn cursor id)
        add-watch-fn
        (if-let [add-watch* (.-add-watch (get-binding-fns ref))]
          (fn [] (add-watch* ref id sully))
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
