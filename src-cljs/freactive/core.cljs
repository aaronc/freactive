(ns freactive.core
  (:refer-clojure :exclude [atom])
  (:require
   [goog.object]
   [clojure.set :as set]))

;; Core API for reactive binding

(deftype BindingInfo [raw-deref add-watch remove-watch clean])

(defprotocol IReactive
  (-get-binding-fns [this]))

(def ^:private iwatchable-binding-fns
  (BindingInfo. cljs.core/-deref cljs.core/-add-watch cljs.core/-remove-watch nil))

(defn get-binding-fns [iref]
  (if (satisfies? IReactive iref)
    (-get-binding-fns iref)
   iwatchable-binding-fns))

(def ^:dynamic *register-dep* nil)

(defn register-dep
  ([dep]
    (when-let [rdep *register-dep*]
      (rdep (goog/getUid dep) (get-binding-fns dep))))
  ([dep id binding-info]
   (when-let [rdep *register-dep*]
     (rdep dep id binding-info))))

;; Core API for cursors

(defprotocol ICursor
  (-cursor-key [this])
  (-child-cursor [this key])
  (-parent-cursor [this]))

(defprotocol IKeysetCursor
  (-keyset [this])
  (-add-keyset-watch [this key f])
  (-remove-keyset-watch [this key]))

(defprotocol IAssociativeCursor
  (-update! [this key f args])
  (-update-in! [this ks f args])
  (-assoc-in! [this ks v]))

(defn update! [cursor key f & args]
  (-update! cursor key f args))

(defn update-in! [cursor ks f & args]
  (-update-in! cursor ks f args))

(defn assoc-in! [cursor ks v]
  (-assoc-in! cursor ks v))

(defn cursor-key [^clj cursor]
  (-cursor-key cursor))

(defn child-cursor [^clj cursor key]
  (-child-cursor cursor key))

(defn descendant-cursor [^clj cursor path]
  (loop [[key & more] path
         res cursor]
    (if key
      (recur more (child-cursor res key))
      res)))

(defn parent-cursor [^clj cursor]
  (-parent-cursor cursor))

(defn get-root-cursor [cursor]
  (loop [cursor cursor]
    (if-let [parent (parent-cursor cursor)]
      (recur parent)
      cursor)))

(defn cursor-accessor [cursor]
  (loop [cursor cursor
         path []]
    (let [parent (parent-cursor cursor)
          key (cursor-key cursor)]
      (if (and parent key)
        (recur parent (conj path key))
        {:root cursor :path path}))))

(defn cursor-path [cursor]
  (:path (cursor-accessor cursor)))

;; Cursor and Reactive Expression Implementations

(def ^:dynamic *do-trace-captures* nil)

(def ^:dynamic *trace-capture* nil)

(def ^:private auto-reactive-id 0)

(defn new-reactive-id []
  (let [id auto-reactive-id]
    (set! auto-reactive-id (inc auto-reactive-id))
    (str "--r." id)))

(defn apply-js-mixin [the-type mixin]
  (let [ptype (.-prototype the-type)]
    (goog.object/forEach
     mixin
     (fn [val key obj]
       (aset ptype key val)))))

(def fwatch-mixin
  #js {:addFWatch
       (fn addFWatch [key f]
         (this-as this
                  (when-not (aget (.-fwatches this) key)
                    (set! (.-watchers this) (inc (.-watchers this)))
                    (aset (.-fwatches this) key f))))
       :removeFWatch
       (fn removeFWatch [key]
         (this-as this
                  (when (aget (.-fwatches this) key)
                    (set! (.-watchers this) (dec (.-watchers this)))
                    (js-delete (.-fwatches this) key))))
       :notifyFWatches
       (fn notifyFWatches [oldVal newVal]
         (this-as this
                  (goog.object/forEach
                   (.-fwatches this)
                   (fn [f key _]
                     (f key this oldVal newVal)))
                  (doseq [[key f] (.-watches this)]
                    (f key this oldVal newVal))))})

(def fwatch-binding-info
  (BindingInfo.
   #(.rawDeref %) #(.addFWatch % %2 %3) #(.removeFWatch % %2) #(.clean %)))

(defn- make-register-dep [rx]
  (fn do-register-dep [dep id binding-info]
    (when *trace-capture* (*trace-capture* dep))
    (aset (.-deps rx) id #js [dep binding-info])
    ((.-add-watch binding-info)
     dep (.-id rx)
     (fn []
       ((.-remove-watch binding-info) dep (.-id rx))
       (js-delete (.-deps rx) id)
       (.invalidate rx)))))

(def invalidates-mixin
  #js {:notifyInvalidationWatches
       (fn notifyInvalidationWatches []
         (this-as this
                  (goog.object/forEach
                   (.-invalidation-watches this)
                   (fn [f key _]
                     (f key this)))))
       :addInvalidationWatch 
       (fn addInvalidationWatch [key f]
         (this-as this
                  (when-not (aget (.-invalidation-watches this) key)
                    (set! (.-iwatchers this) (inc (.-iwatchers this)))
                    (aset (.-invalidation-watches this) key f))
                  this))
       :removeInvalidationWatch
       (fn removeInvalidationWatch [key]
         (this-as this
                  (when (aget (.-invalidation-watches this) key)
                    (set! (.-iwatchers this) (dec (.-iwatchers this)))
                    (js-delete (.-invalidation-watches this) key))
                  this))
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
  {:reactiveDeref (fn reactiveDeref []
                (this-as this
                         (if (.-lazy this)
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
    (when  (and (identical? 0 watchers) (identical? 0 iwatchers))
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
      (set! (.-dirty this) true)))
  
  IReactive
  (-get-binding-fns [this]
    (if lazy invalidates-binding-info fwatch-binding-info))

  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this] (.reactiveDeref this))

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveComputation: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
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

(defn- keyset [coll]
  (cond (map? coll)
        (keys coll)

        (counted? coll)
        (range (count coll))

        :default
        nil))

(defn- diff-set [a b]
  [(set/difference a b)
   (set/difference b a)
   (set/intersection a b)])

;; WIP on new cursor implementation

(deftype Cursor [id parent tkey ^:mutable child-cursors swap-fn ^:mutable state meta watches fwatches watchers keyset-watches]
    Object
    (equiv [this other]
      (-equiv this other))
    (clean [this])
    (updateChild [this key f args]
      (set! (.-change-ks this) [key])
      (apply swap-fn update key f args)
      this)
    (assocChild [this key val]
      (set! (.-change-ks this) [key])
      (apply swap-fn assoc key val)
      this)
    (notifyChild [this child-key new-val]
      (doseq [child (get child-cursors child-key)]
        (.updateCursor child new-val)))
    (updateCursor [this new-state]
      (let [old-state state]
        (set! state new-state)
        (when-not (identical? old-state state)
          (if-let [[change-key & descendant-ks] (.-change-ks this)]
            (do
              (when-let [cursors (get child-cursors change-key)]
                (when-let [cur (first cursors)]
                  (let [old-val (.-state cur)
                        new-val (get state change-key)]
                    (when-not (identical? old-val new-val)
                      (doseq [cur cursors]
                        (when descendant-ks
                          (set! (.-change-ks cur) descendant-ks))
                        (.updateCursor cur new-val))
                      ;; check for key set change
                      ))))
              (set! (.-change-key this) nil))
            (cond keyset-watches
              (let [old-keys (keyset old-state)
                    new-keys (keyset state)
                    [removed added both] (diff-set (set old-keys) (set new-keys))]
                (when (or (not (empty? removed)) (not (empty? added)))
                  ;; notify key set change
                  )
                (doseq [rx removed]
                  (.notifyChild rx nil))
                (doseq [ra added]
                  (.notifyChild ra (get state ra)))
                (doseq [rc both]
                  (when-let [cursors (get child-cursors rc)]
                    (when-let [cur (first cursors)]
                      (let [old-val (.-state cur)
                            new-val (get state rc)]
                        (when-not (identical? old-val new-val)
                          (doseq [cur cursors]
                            (.updateCursor cur new-val))))))))
              child-cursors
              (doseq [[ckey cursors] child-cursors]
                (let [old-val (get old-state ckey)
                      new-val (get state ckey)]
                  (when-not (identical? old-val new-val)
                    (doseq [cur cursors]
                      (.updateCursor cur new-val)))))))
          (.notifyFWatches this old-state state))))
    (rawDeref [this] state)
    (reactiveDeref [this]
      (register-dep this id fwatch-binding-info)
      state)

    cljs.core/IAtom

    IReactive
    (-get-binding-fns [this] fwatch-binding-info)

    cljs.core/IEquiv
    (-equiv [o other] (identical? o other))

    cljs.core/IDeref
    (-deref [this] (.reactiveDeref this))

    IMeta
    (-meta [_] meta)

    IPrintWithWriter
    (-pr-writer [a writer opts]
      (-write writer "#<Cursor: ")
      (pr-writer state writer opts)
      (-write writer ">"))

    IWatchable
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

    IKeysetCursor
    (-keyset [this] (keyset state))
    (-add-keyset-watch [this key f])
    (-remove-keyset-watch [this key])

    IHash
    (-hash [this] (goog/getUid this))

    IReset
    (-reset! [this new-value] (swap-fn (constantly new-value)))

    ISwap
    (-swap! [this f] (swap-fn f))
    (-swap! [this f x] (swap-fn f x))
    (-swap! [this f x y] (swap-fn f x y))
    (-swap! [this f x y more] (apply swap-fn f x y more))

    ICursor
    (-cursor-key [this] tkey)
    (-child-cursor [this ckey]
      (if-let [child-cursor (first (get child-cursors ckey))]
        (first child-cursors)
        (let [id (new-reactive-id)
              child-cursor (Cursor.
                            id this ckey nil
                            (fn [f & args] (.updateChild this ckey f args))
                            (get state ckey)
                            nil
                            nil
                            #js {}
                            0
                            nil)]
          (set! child-cursors (update child-cursors ckey conj child-cursor))
          child-cursor)))
    (-parent-cursor [this]
      (when tkey
        parent))

    ITransientCollection
    (-conj! [this val])
    (-persistent! [this] state)

    ITransientAssociative
    (-assoc! [this key val] (.assocChild this key val))

    ITransientMap
    (-dissoc! [this key] 
      (set! (.-change-ks this) [key])
      (apply swap-fn dissoc key))

    ITransientVector
    (-assoc-n! [this n val] (.assocChild this n val))

    IAssociativeCursor
    (-update! [this key f args] (.updateChild this key f args))
    (-update-in! [this ks f args]
      (set! (.-change-ks this) ks)
      (apply swap-fn update-in ks f args)
      this)
    (-assoc-in! [this ks v]
      (set! (.-change-ks this) ks)
      (apply swap-fn assoc-in ks v)))

(apply-js-mixin Cursor fwatch-mixin)

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
  [init & {:keys [meta validator]}]
  (let [cur (Cursor. (new-reactive-id) nil nil nil nil init
                     meta nil #js {} 0 nil)]
    (set!
     (.-swap-fn cur)
     (fn [f & args]
       (let [new-value (apply f (.-state cur) args)]
         (when-let [validate (.-validator cur)]
           (assert (validate new-value) "Validator rejected reference state"))
         (.updateCursor cur new-value))))
    (when validator (set! (.-validator cur) validator))
    cur))

(defn lens-cursor [parent getter setter]
  (let [id (new-reactive-id)
        cur (Cursor.
             id parent nil nil
             (fn [f & args]
               (swap! parent
                      (fn [x] (setter x (apply f (getter x) args)))))
             (getter @parent) nil nil #js {} 0 nil)
        binding-info (get-binding-fns parent)]
    ((.-add-watch binding-info) parent id
     (fn [k r o n] (.updateCursor cur (getter n))))
    cur))

(defn root-cursor [atom-like]
  (lens-cursor atom-like identity (fn [old new] new)))
  
(defn cursor
  ([] (atom nil))
  ([parent] (root-cursor parent))
  ([parent korks]
   (if (sequential? korks)
     (descendant-cursor parent korks)
     (child-cursor parent korks)))
  ([parent getter setter]
   (lens-cursor parent getter setter)))
