(ns freactive.core
  (:refer-clojure :exclude [atom])
  (:require
   [goog.object]
   [clojure.set :as set]
   [clojure.data.avl :as avl]))

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
  (-parent-cursor [this])
  (-cursor-keyset [this]))

(defprotocol IChangeNotifications
  (-add-change-watch [this key f])
  (-remove-change-watch [this key]))

(defn cursor-keyset [cursor]
  (-cursor-keyset cursor))

(defn add-change-watch [cur key f]
  (-add-change-watch cur key f))

(defn remove-change-watch [cur key]
  (-remove-change-watch cur key))

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
    (when (and (identical? 0 watchers) (identical? 0 iwatchers))
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
  (dispose [this] (.clean this))
  
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

(defn- rapply* [f atom-like args lazy]
  (rx* (fn [] (apply f @atom-like args))))

(defn rapply [f atom-like & args]
  (rapply* f atom-like args true))

(defn eager-rapply [f atom-like & args]
  (rapply* f atom-like args false))

(defn coll-keyset [coll]
  (cond (map? coll)
        (keys coll)

        (counted? coll)
        (range (count coll))

        :default
        nil))

(defn kv-seq [coll]
  (cond (map? coll)
        (seq coll)

        (counted? coll)
        (zipmap (range (count coll)) (seq coll))

        :default
        nil))

(defn- diff-set [a b]
  [(set/difference a b)
   (set/difference b a)
   (set/intersection a b)])

;; WIP on new cursor implementation

(deftype Cursor [id parent tkey ^:mutable child-cursors get-fn swap-fn ^:mutable state meta ^:mutable watches ^:mutable fwatches ^:mutable watchers ^:mutable change-watches]
    Object
    (equiv [this other]
      (-equiv this other))
    (registerOne [this]
      (set! watchers (inc watchers))
      (.activate this))
    (unregisterOne [this]
      (set! watchers (dec watchers))
      (.clean this))
    (activate [this]
      (when (.-dirty this)
        (when-let [activate-fn (.-activate-fn this)]
          (activate-fn)
          (set! state (get-fn))
          (set! (.-dirty this) false))))
    (clean [this]
      (when (identical? 0 watches)
        (when-let [clean-fn (.-clean-fn this)]
          (set! (.-dirty this) true)
          (clean-fn))))
    (updateChild [this key f args]
      (set! (.-change-ks this) [key])
      (apply swap-fn update key f args)
      this)
    (assocChild [this key val]
      (set! (.-change-ks this) [key])
      (swap-fn assoc key val)
      this)
    (resetChild [this child-key new-val]
      (doseq [child (get child-cursors child-key)]
        (.updateCursor child new-val)))
    (notifyChangeWatches [this changes]
      (doseq [[key f] change-watches]
        (f key this changes)))
    (updateCursor [this new-state]
      (when-not (identical? state new-state)
        (let [old-state state
              has-change-watches (not (empty? change-watches))]
          (set! state new-state)
          (.notifyFWatches this old-state state)
          (if-let [change-ks (.-change-ks this)]
            (let [change-ks (if (keyword? change-ks)
                              [(case change-ks
                                 :conj (dec (count state))
                                 :pop (count state))]
                              change-ks)
                  [change-key & descendant-ks] change-ks
                  cursors (get child-cursors change-key)]
              (when (or cursors has-change-watches)
                (let [cur (first cursors)
                      old-val (if cur (.-state cur) (get old-state change-key))
                      new-val (get state change-key)]
                  (when-not (identical? old-val new-val)
                    (doseq [cur cursors]
                      (when descendant-ks
                        (set! (.-change-ks cur) descendant-ks))
                      (.updateCursor cur new-val))
                    (when has-change-watches
                      (if (nil? new-val)
                        (.notifyChangeWatches this [[change-key]])
                        (.notifyChangeWatches this [[change-key new-val]]))))))
              (set! (.-change-ks this) nil))
            (cond
              has-change-watches
              (let [old-keys (coll-keyset old-state)
                    new-keys (coll-keyset state)
                    changes
                    (loop [[key & more] new-keys
                           old-keys old-keys
                           changes []]
                      (if key
                        (let [new-val (get new-state key)]
                          (if (contains? old-keys key)
                            (let [old-val (get old-state key)
                                  old-keys (disj old-keys key)]
                              (if (identical? old-val new-val)
                                (recur more old-keys changes)
                                (do
                                  (.resetChild this key new-val)
                                  (recur more old-keys (conj changes [key new-val])))))
                            (do
                              (.resetChild this key new-val)
                              (recur more old-keys (conj changes ^:added [key new-val])))))
                        (concat changes
                                (doall
                                 (for [key old-keys]
                                   (do
                                     (.resetChild this key nil)
                                     [key]))))))]
                (.notifyChangeWatches this changes))

              child-cursors
              (doseq [[ckey cursors] child-cursors]
                (let [old-val (get old-state ckey)
                      new-val (get state ckey)]
                  (when-not (identical? old-val new-val)
                    (doseq [cur cursors]
                      (.updateCursor cur new-val))))))))))
    (rawDeref [this]
      (when (.-dirty this)
        (set! state (get-fn)))
      state)
    (reactiveDeref [this]
      (register-dep this id fwatch-binding-info)
      (.rawDeref this))
    (addFWatch [this key f]
      (when-not (aget (.-fwatches this) key)
        (aset (.-fwatches this) key f)
        (.registerOne this)))
    (removeFWatch [this key]
      (when (aget (.-fwatches this) key)
        
        (js-delete (.-fwatches this) key)
        (.unregisterOne this)))
    (notifyFWatches [this oldVal newVal]
      (goog.object/forEach
       (.-fwatches this)
       (fn [f key _]
         (f key this oldVal newVal)))
      (doseq [[key f] (.-watches this)]
        (f key this oldVal newVal))) 

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
        (set! (.-watches this) (assoc watches key f))
        (.registerOne this))
      this)
    (-remove-watch [this key]
      (when (contains? watches key)
        (set! (.-watches this) (dissoc watches key))
        (.unregisterOne this))
      this)

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
      (or (first (get child-cursors ckey))
          (let [id (new-reactive-id)
                cur (Cursor. id this ckey nil
                             (fn [] (get (.rawDeref this) ckey))
                             (fn [f & args] (.updateChild this ckey f args))
                             (get state ckey)
                             nil nil #js {} 0 nil)
                activate-fn
                (fn []
                  (set! child-cursors (update child-cursors ckey conj cur)))]
            ;; (activate-fn)
            (set! (.-dirty cur) true)
            (set! (.-activate-fn cur) activate-fn)
            (set! (.-clean-fn cur)
                  (fn []
                    (set! child-cursors
                          (update child-cursors ckey
                                  (fn [cursors]
                                    (let [cursors (remove #(= % cur) cursors)]
                                      (when-not (empty? cursors)
                                        cursors)))))))
            cur)))
    (-parent-cursor [this]
      (when tkey
        parent))
    (-cursor-keyset [this] (coll-keyset state))

    IChangeNotifications
    (-add-change-watch [this key f]
      (when-not (contains? change-watches key)
        (set! (.-change-watches this) (assoc change-watches key f))
        (.registerOne this)))
    (-remove-change-watch [this key]
      (when (contains? change-watches key)
        (set! (.-change-watches this) (dissoc change-watches key))
        (.unregisterOne this)))


    ITransientCollection
    (-conj! [this val]
      (set! (.-change-ks this) :conj)
      (swap-fn conj val))
    (-persistent! [this] state)

    ITransientAssociative
    (-assoc! [this key val] (.assocChild this key val))

    ITransientMap
    (-dissoc! [this key] 
      (set! (.-change-ks this) [key])
      (swap-fn dissoc key))

    ITransientVector
    (-assoc-n! [this n val] (.assocChild this n val))
    (-pop! [this]
      (set! (.-change-ks this) :pop)
      (swap-fn pop))

    ILookup
    (-lookup [this key]
      (get (.rawDeref this) key))
    (-lookup [this key not-found]
      (or (get (.rawDeref this) key) not-found))

    IAssociativeCursor
    (-update! [this key f args] (.updateChild this key f args))
    (-update-in! [this ks f args]
      (set! (.-change-ks this) ks)
      (apply swap-fn update-in ks f args)
      this)
    (-assoc-in! [this ks v]
      (set! (.-change-ks this) ks)
      (swap-fn assoc-in ks v)))

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
  (let [cur (Cursor. (new-reactive-id) nil nil nil nil nil init
                     meta nil #js {} 0 nil)]
    (set! (.-get-fn cur) (fn [] (.-state cur)))
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
        binding-info (get-binding-fns parent)
        cur (Cursor.
             id parent nil nil
             (fn [] (getter ((.-raw-deref binding-info) parent)))
             (fn [f & args]
               (swap! parent
                      (fn [x] (setter x (apply f (getter x) args)))))
             (getter @parent) nil nil #js {} 0 nil)
        activate-fn
        (fn []
          ((.-add-watch binding-info) parent id
           (fn [k r o n] (.updateCursor cur (getter n)))))]
    ;; (activate-fn)
    (set! (.-dirty cur) true)
    (set! (.-activate-fn cur) activate-fn)
    (set! (.-clean-fn cur)
          (fn [] ((.-remove-watch binding-info) parent id)))
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

;; Reactive Attributes

(defn dispose [this]
  (when (.-dispose this)
    (try
      (.dispose this)
      (catch :default e
        (.warn js/console "Error while disposing state" e this)))))

(declare bind-attr*)

(deftype ReactiveAttribute [id the-ref binding-info set-fn enqueue-fn ^:mutable disposed]
  IFn
  (-invoke [this new-val]
    (.dispose this)
    (bind-attr* new-val set-fn enqueue-fn))
  Object
  (set [this]
    (when-not disposed 
      ((.-add-watch binding-info) the-ref id #(.invalidate this))
      (set-fn ((.-raw-deref binding-info) the-ref))))
  (dispose [this]
    (set! disposed true)
    ((.-remove-watch binding-info) the-ref id)
    (when-let [clean (.-clean binding-info)] (clean the-ref))
    (when-let [binding-disposed (get (meta the-ref) :binding-disposed)]
      (binding-disposed)))
  (invalidate [this]
    ((.-remove-watch binding-info) the-ref id)
    (enqueue-fn #(.set this))))

(defn bind-attr* [the-ref set-fn enqueue-fn]
  (if (satisfies? IDeref the-ref)
    (let [binding (ReactiveAttribute. (new-reactive-id) the-ref (get-binding-fns the-ref) set-fn enqueue-fn false)]
      (.set binding)
      binding)
    (do
      (set-fn the-ref)
      set-fn)))

(defn attr-binder** [enqueue-fn]
  (fn attr-binder* [set-fn]
    (fn attr-binder [value]
      (bind-attr* value set-fn enqueue-fn))))

;; Reactive Sequence Projection Protocols

(defprotocol IReactiveProjectionTarget
  (-proj-insert-elem [this projected-elem before-idx])
  (-proj-get-elem [this elem-idx])
  (-proj-move-elem [this elem-idx before-idx])
  (-proj-remove-elem [this elem-idx])
  (-proj-clear [this]))

(defprotocol IReactiveProjection
  (-project-elements [this target enqueue-fn]))

(defn project-elements [projection target enqueue-fn]
  (-project-elements projection target enqueue-fn))

;; Reactive Sequence Projection Implementations

(deftype KeysetCursorProjection [cur proj-fn opts
                                 ^:mutable avl-set ^:mutable target
                                 ^:mutable enqueue-fn
                                 ^:mutable filter-fn
                                 ^:mutable offset ^:mutable limit
                                 ^:mutable sort-by
                                 ^:mutable placeholder
                                 ^:mutable placeholder-idx]
  Object
  (dispose [this]
    (remove-change-watch cur this))
  (project [this]
    (-proj-clear target)
    (.onUpdates this (for [k (cursor-keyset cur)] [k (get cur k)])))
  (updateSortBy [this new-sort-by]
    (when (or (not (identical? new-sort-by sort-by)) (nil? avl-set))
      (set! sort-by new-sort-by)
      (set! avl-set
            (if sort-by
              (avl/sorted-set-by sort-by)
              (avl/sorted-set)))))
  (updateFilter [this new-filter])
  (updateOffset [this new-offset])
  (updateLimit [this new-limit])
  (rankOf [this key]
    (let [idx (- (avl/rank-of avl-set key) offset)]
      (when (>= idx 0)
        (let [idx
              (if limit
                (when (<= idx limit)
                  idx)
                idx)]
          (if (and placeholder-idx (>= idx placeholder-idx))
            (inc idx)
            idx)))))
  (onUpdates [this updates]
    (doseq [[k v :as update] updates]
      (if-let [cur-idx (.rankOf this k)]
        (if (or (= (count update) 1) (not (filter update)))
          (do
            (set! avl-set (disj avl-set k))
            (-proj-remove-elem target cur-idx))
          (do
            (set! avl-set (conj avl-set k))
            (let [new-idx (.rankOf this k)]
              (when-not (identical? cur-idx new-idx)
                (-proj-move-elem target cur-idx new-idx)))))
        (when (filter update)
          (set! avl-set (conj avl-set k))
          (-proj-insert-elem target (rx* (fn [] (proj-fn (cursor cur k)))) (.rankOf this k))))))

  IReactiveProjection
  (-project-elements [this proj-target enqueue]
    (set! target proj-target)
    (set! enqueue-fn enqueue)
    (let [{:keys [filter sort-by offset limit placeholder-idx placeholder]} opts]
      (when filter (bind-attr* filter #(.updateFilter this %) enqueue))
      (bind-attr* sort-by #(.updateSortBy this %) enqueue)
      (when offset (bind-attr* offset #(.updateOffset this %) enqueue))
      (when limit (bind-attr* limit #(.updateLimit this %) enqueue))
      ;; (bind-attr* placeholder-idx #(.updatePlaceholderIdx this) enqueue)
      ;; (bind-attr* placeholder #(.updatePlaceholder this) enqueue)
      )
    (add-change-watch cur this
                      (fn [k r updates] (.onUpdates this updates)))
    (.project this)))

(defn cmap*
  [f keyset-cursor opts]
  (KeysetCursorProjection. keyset-cursor f opts nil nil nil identity 0 nil nil nil nil))

(defn cmap
  [f keyset-cursor & {:as opts}]
  (cmap* f keyset-cursor opts))
