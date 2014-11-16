(ns freactive.dom
  (:require [freactive.core :as r]
            [goog.object])
  (:require-macros [freactive.macros :refer [rx non-reactively]]))

;; ## Core Defintions

(defonce ^:private element-state-lookup {})

(defprotocol IElementSpec
  (-get-virtual-dom [x]))

(defrecord ElementSpec [spec]
  IElementSpec
  (-get-virtual-dom [x] spec))

(defn- dom-node? [x]
  (> (.-nodeType x) 0))

(defn- get-element-state [x]
  (get element-state-lookup x))

(defn- get-virtual-dom [x]
  (when x
    (cond
      (dom-node? x)
      (when-let [state (get-element-state x)]
        (get-virtual-dom (.-element-spec state)))

      (string? x) x

      (vector? x) x

      :default (-get-virtual-dom x))))

(defn- reset-element-spec! [dom-node spec]
  (set! (.-element-spec (get-element-state dom-node)) spec))

(deftype ElementState [disposed element-spec childstates])

(defn- init-element-state! [dom-node element-spec]
  (let [state (ElementState. false element-spec {})]
    ;;(println "init state" (.-element-spec state))
    (set! element-state-lookup (assoc element-state-lookup dom-node state))
    state))

(defn- register-with-parent-state [parent-state child state]
  (set! (.-childstates parent-state) (assoc (.-childstates parent-state) child state)))

(defn- unregister-from-parent-state [parent-state child]
  (set! (.-childstates parent-state) (dissoc (.-childstates parent-state) child)))

(defn- get-element-spec [x]
  (if (dom-node? x)
    (when-let [state (get-element-state x)]
      (.-element-spec state))
    x))

(defprotocol IHasDOMNode
  (-get-dom-node [x]))

(defn get-dom-node [x]
  (if (dom-node? x)
    x
    (-get-dom-node x)))

(defprotocol IRemove
  (-remove! [x]))

(defn- dispose-node
  ([dom-node]
   (dispose-node dom-node (get-element-state dom-node)))
  ([dom-node state]
   ;(println "diposing" dom-node state)
   (when state
     (set! (.-disposed state) true)
     (js-delete element-state-lookup dom-node)
     (doseq [[child state] (.-childstates state)]
       (dispose-node child state)))))

(defn- remove-dom-node [dom-node]
  (let [state (aget element-state-lookup dom-node)]
    (dispose-node dom-node state)
    (when-let [parent (.-parentNode dom-node)]
      (.removeChild parent dom-node)
      (when state
        (js-delete (.-parent-state state) state)))))

(defn remove! [x]
  (if (dom-node? x)
    (remove-dom-node x)
    (-remove! x)))

;; ## Defining Transitions

(defn- wrap-element-spec [elem-spec]
  (if (string? elem-spec)
    (ElementSpec. elem-spec)
    elem-spec))

(defn with-transitions [elem-spec transitions]
  (if (satisfies? IDeref elem-spec)
    (rx (with-transitions @elem-spec transitions))
    (vary-meta (wrap-element-spec elem-spec) merge transitions)))

(defn- get-transition [x transition-name]
  (let [spec (get-element-spec x)]
    (when-not (string? spec)
      (get (meta spec) transition-name))))

(defn- chain-transition [elem-spec transition-name transition-fn chain-fn]
  (if (satisfies? IDeref elem-spec)
    (rx (chain-transition @elem-spec transition-name transition-fn chain-fn))
    (let [cur-transition-fn (get-transition elem-spec transition-name)
          transition-fn (if cur-transition-fn
                          (chain-fn cur-transition-fn transition-fn)
                          transition-fn)]
      (with-transitions elem-spec {transition-name transition-fn}))))

(defn prepend-transition [elem-spec transition-name transition-fn]
  (chain-transition elem-spec transition-name transition-fn
                    (fn [cur-tx new-tx]
                      (fn [elem on-complete]
                        (new-tx elem (fn [elem _] (cur-tx elem on-complete)))))) )

(defn append-transition [elem-spec transition-name transition-fn]
  (chain-transition elem-spec transition-name transition-fn
                    (fn [cur-tx new-tx]
                      (fn [elem on-complete]
                        (cur-tx elem (fn [elem _] (new-tx elem on-complete)))))) )

;; ## Polyfills

(defn request-animation-frame [f]
  (.requestAnimationFrame js/window f))

;; Render Loop

(defonce ^:private render-queue #js [])

(def ^:private enable-fps-instrumentation false)

(defn- enable-fps-instrumentation!
  ([] (enable-fps-instrumentation! true))
  ([enable] (set! enable-fps-instrumentation enable)))

(def ^:private instrumentation-i -1)

(def ^:private last-instrumentation-time)

(def fps (r/atom nil))

(def frame-time (r/atom nil))

(defonce
  render-loop
  (request-animation-frame
    (fn render[frame-ms]
      (reset! frame-time frame-ms)
      (when enable-fps-instrumentation
        (if (= instrumentation-i 4)
          (do
            (reset! fps (* 1000 (/ 5 (- frame-ms last-instrumentation-time))))
            (set! instrumentation-i 0))
          (set! instrumentation-i (inc instrumentation-i)))
        (when (= 0 instrumentation-i)
          (set! last-instrumentation-time frame-ms)) )
      (let [queue render-queue
            n (alength queue)]
        (when (> n 0)
          (set! render-queue #js [])
          (loop [i 0]
            (when (< i n)
              ((aget queue i))
              (recur (inc i))))))
      (request-animation-frame render)) ))

(defn queue-animation [f]
  (.push render-queue f))

;; ## Attributes, Styles & Events

(defn- set-style-prop! [elem prop-name prop-value]
  (let [prop-name (name prop-name)]
    (aset (.-style elem) prop-name (str prop-value))))

(defn- set-attr! [elem attr-name attr-value]
  (let [attr-name (name attr-name)]
    (.setAttribute elem attr-name attr-value)))

(defn- on-value-ref-invalidated* [set-fn element attr-name ref node-state]
  (when-let [[add-watch* remove-watch*] (r/get-add-remove-watch* ref)]
    (let [f (fn on-value-ref-invalidated
              ([key ref _ _]
               (on-value-ref-invalidated key ref))
              ([key ref]
               ;(set-fn element attr-name @ref)
               (remove-watch* ref key)
               (queue-animation
                 (fn [_]
                   (when-not (.-disposed node-state)
                     (add-watch* ref key on-value-ref-invalidated)
                     (set-fn element attr-name (non-reactively @ref)))
                   )
                 )
               ;(when (.-parentNode element)
               ;  (add-watch* ref key on-value-ref-invalidated)
               ;  (set-fn element attr-name @ref))
               ))]
      (add-watch* ref [element attr-name] f)))
  (set-fn element attr-name @ref))

(defn bind-style-prop! [element attr-name attr-value node-state]
  (if (satisfies? cljs.core/IDeref attr-value)
    (on-value-ref-invalidated* set-style-prop! element attr-name attr-value node-state)
    (set-style-prop! element attr-name attr-value)))

(defn listen! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn bind-attr! [element attr-name attr-value node-state]
  (let [attr-name (name attr-name)]
    (cond
      (= "style" attr-name)
      (do
        (assert (map? attr-value))
        (doseq [[p v] attr-value]
          (bind-style-prop! element p v node-state)))

      (= [\o \n \-] (take 3 attr-name))
      (listen! element (.substring attr-name 3) attr-value)

      :default
      (if (satisfies? cljs.core/IDeref attr-value)
        (on-value-ref-invalidated* set-attr! element attr-name attr-value node-state)
        (set-attr! element attr-name attr-value)))))

;; From hiccup.compiler:
(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
     re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn- create-dom-node [kw]
  (let [tag-ns (namespace kw)
        [_ tag id class] (re-matches re-tag (name kw))
        node (case tag-ns
               "svg" (.createElementNS js/document "http://www.w3.org/2000/svg" tag)
               nil (.createElement js/document tag)
               (assert false (str "Don't know how to handle tag ns " tag-ns)))]
    (when id (set! (.-id node) id))
    (when class (set! (.-className node) class))
    node))

;; ## Core DOM Manipulation Methods

(declare build-element)

(defn- replace-child [parent new-elem-spec cur-elem]
  (let [cur-dom-node (get-dom-node cur-elem)
        new-virtual-dom (get-virtual-dom new-elem-spec)]
    (if (and
          (string? new-virtual-dom)
          (= (.-nodeType cur-dom-node) 3))

      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        (reset-element-spec! cur-dom-node new-elem-spec)
        cur-elem)
      (let [new-elem (build-element new-elem-spec)]
        (.replaceChild
          (get-dom-node parent)
          (get-dom-node new-elem)
          cur-dom-node)
        (dispose-node cur-dom-node)
        new-elem))))

(defn- append-child [parent new-elem]
  (let [new-elem (build-element new-elem)]
    (.appendChild
      (get-dom-node parent)
      new-elem)
    new-elem))

(defn- replace-or-append-child [parent new-elem cur-elem]
  ;(println "replacing" cur-elem new-elem)
  (let [new-elem
        (if cur-elem
          (replace-child parent new-elem cur-elem)
          (append-child parent new-elem))]
    (when-let [parent-state (get-element-state parent)]
      ;(println "parent-state" parent parent-state)
      (let [state (get-element-state new-elem)]
        (set! (.-parent-state state) parent-state)
        (register-with-parent-state parent-state new-elem state)))
    new-elem))

(defn- do-show-element [parent new-elem cur-elem]
  (when new-elem
    (let [show (get-transition new-elem :on-show)
          new-elem (replace-or-append-child parent new-elem cur-elem)]
      (when show
        (show new-elem nil)
        new-elem)
      new-elem)))

(defn- transition-element
  ([parent new-elem cur-elem]
   ;(println "transitioning" parent new-elem cur-elem)
   (if cur-elem
     (if-let [hide (get-transition cur-elem :on-hide)]
       (hide cur-elem
         (do-show-element parent new-elem cur-elem))
       (do-show-element parent new-elem cur-elem))
     (do-show-element parent new-elem cur-elem))))

(defn- clear-children! [parent]
  (let [dom-node (get-dom-node parent)]
    (loop []
      (let [last-child (.-lastChild dom-node)]
        (when last-child
          (.removeChild dom-node last-child)
          (recur))))))


(defn- exec-transition [node transition-name callback]
  (if-let [transition (get-transition node transition-name)]
    (transition node callback)
    (when callback (callback))))

(defn- hide-node [node callback]
  (exec-transition node :on-hide callback))

(defn- show-node [node callback]
  (exec-transition node :on-show callback))

;; Reactive Element Handling

(deftype ReactiveElement [parent cur-element dirty updating disposed animate invalidate]
  IRemove
  (-remove! [this]
    (set! (.-disposed this) true)
    (when-not updating
      (remove! @cur-element))
    (when-let [parent-state (get-element-state parent)]
      (unregister-from-parent-state parent-state this))))

(defn- append-deref-child [parent child-ref]
  (if-let [[add-watch* remove-watch*] (r/get-add-remove-watch* child-ref)]
    (let [state (ReactiveElement. parent nil false false false nil nil)

          get-new-elem (fn []
                         (set! (.-dirty state) false)
                         (add-watch* child-ref state (.-invalidate state))
                         (or (non-reactively @child-ref) [:span]))

          show-new-elem (fn [new-elem cur]
                          (let [new-node (replace-or-append-child parent new-elem cur)]
                            (set! (.-cur-element state) new-node)
                            (set! (.-updating state) false)
                            (when (.-dirty state)
                              (queue-animation (.-animate state)))
                            (show-node new-node nil)))

          animate
          (fn animate [x]
            ;(println "animating")
            (if (.-disposed state)
              (remove! (.-cur-element state))
              (do
                (let [new-elem (get-new-elem)
                      cur (.-cur-element state)]
                  (when (not= (get-virtual-dom cur) (get-virtual-dom new-elem))
                    (let [hide (get-transition cur :on-hide)]
                      (if hide
                        (hide cur
                              (fn []
                                 (if (.-disposed state)
                                   (do
                                     (remove-dom-node cur)
                                     (set! (.-updating cur) false))
                                   (let [new-elem (if (.-dirty state)
                                                    (get-new-elem)
                                                    new-elem)]
                                     (show-new-elem new-elem cur)))))
                        (show-new-elem new-elem cur)))

                    ;(set! (.-cur-element state)
                    ;      (transition-element
                    ;        parent
                    ;        (append-transition new-elem :on-show
                    ;                           (fn [elem _]
                    ;                             (set! (.-updating state) false)
                    ;                             (if (.-disposed state)
                    ;                               (remove! elem)
                    ;                               (when
                    ;                                 (.-dirty state)
                    ;                                 (queue-animation animate)))))
                    ;        cur))
                    )))))

          invalidate
          (fn on-child-ref-invalidated
            ([key child-ref _ _]
             (on-child-ref-invalidated key child-ref))
            ([cur-elem child-ref]
             (remove-watch* child-ref cur-elem)
             (when-not (.-disposed state)
               ;(println "invalidating")
               (set! (.-dirty state) true)
               (when-not (.-updating state)
                 ;(println "updating")
                 (set! (.-updating state) true)
                 (queue-animation animate)))))]

      (set! (.-animate state) animate)
      (set! (.-invalidate state) invalidate)
      (show-new-elem (get-new-elem) nil)
      ;(set! (.-cur-element state)
      ;      (transition-element parent (or (non-reactively @child-ref) [:span]) nil))
      (when-let [parent-state (get-element-state parent)]
        (register-with-parent-state parent-state state state))
      state)
    (transition-element parent @child-ref nil)))

;; Building Elements

(defn append-child! [parent child]
  (cond
    (satisfies? IDeref child)
    (append-deref-child parent child)

    :default
    (transition-element parent child nil)))

(defn- append-children! [elem children]
  (doseq [ch children]
    (if (sequential? ch)
      (if (keyword? (first ch))
        (append-child! elem ch)
        (append-children! elem ch))
      (append-child! elem ch))))

(defn build-element [elem-spec]
  (let [virtual-dom (get-virtual-dom elem-spec)
        node
        (if (string? virtual-dom)
          (let [node (.createTextNode js/document virtual-dom)]
            (init-element-state! node elem-spec)
            node)
          (let [node (create-dom-node (first virtual-dom))
                state (init-element-state! node elem-spec)
                attrs? (second virtual-dom)
                attrs (when (map? attrs?) attrs?)
                children (if attrs (nnext virtual-dom) (next virtual-dom))]
            (doseq [[k v] attrs]
              (bind-attr! node k v state))
            (when children
              (append-children! node children))
            node))]
    node))

(defn mount! [element child]
  ;(println "mount!" element child)
  (when-let [last-child (.-lastChild (get-dom-node element))]
    (remove! last-child))
  (append-child! element child))
