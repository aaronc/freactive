(ns freactive.dom
  (:require [freactive.core :as r]
            [goog.object])
  (:require-macros [freactive.macros :refer [rx non-reactively]]))

;; ## Core Defintions

(defonce ^:private auto-node-id 0)

;(defonce ^:private element-state-lookup {})
(defonce ^:private element-state-lookup #js {})

(defprotocol IElementSpec
  (-get-virtual-dom [x]))

(defrecord ElementSpec [spec]
  IElementSpec
  (-get-virtual-dom [x] spec))

(defn- dom-node? [x]
  (> (.-nodeType x) 0))

(defn- get-attr [dom-node attr-name]
  (when (.-getAttribute dom-node)
    (.getAttribute dom-node attr-name)))

(defn- get-node-id [x]
  (get-attr x "data-freactive-id"))

(defn- get-element-state [x]
  ;;(get element-state-lookup x)
  (when-let [node-id (get-node-id x)]
    (aget element-state-lookup node-id)))

(extend-protocol IElementSpec
  boolean
  (-get-virtual-dom [x] (str x)))

(defn- get-virtual-dom [x]
  (if x
    (cond
      (dom-node? x)
      (when-let [state (get-element-state x)]
        (get-virtual-dom (.-element-spec state)))

      (string? x) x

      (vector? x) x

      (number? x) (str x)

      :default (-get-virtual-dom x))

    ;; nil values treated as empty "placeholder" text nodes
    ""))

(defn- reset-element-spec! [dom-node spec]
  (set! (.-element-spec (get-element-state dom-node)) spec))

(deftype ElementState [id disposed element-spec child-states])

(declare set-attr!)

(defn- init-element-state! [dom-node element-spec]
  (let [node-id (str auto-node-id)
        state (ElementState. node-id false element-spec nil)]
    (set! auto-node-id (inc auto-node-id))
    (set-attr! dom-node "data-freactive-id" node-id)
    (aset element-state-lookup node-id state)
    ;;(set! element-state-lookup (assoc element-state-lookup dom-node state))
    state))

(defn- register-with-parent-state [parent-state child-key state]
  ;;(set! (.-child-states parent-state) (assoc (.-child-states parent-state) child state))
  (let [child-states (or (.-child-states parent-state)
                        (set! (.-child-states parent-state) #js {}))]
    (aset child-states child-key state)))

(defn- unregister-from-parent-state [parent-state child-key]
  ;;(set! (.-child-states parent-state) (dissoc (.-child-states parent-state) child))
  (when-let [child-states (.-child-states parent-state)]
    (js-delete child-states child-key))
  )

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

(defn- get-transition [x transition-name]
  (let [spec (get-element-spec x)]
    (when-not (string? spec)
      (get (meta spec) transition-name))))

(defn- dispose-node
  ([dom-node]
   ;(println "disposing" dom-node)
   (let [node-id (get-node-id dom-node)
         state (aget element-state-lookup node-id)]
     (dispose-node node-id state)))
  ([child-key state]
   (when state
     (set! (.-disposed state) true)
     ;(println "disposing")
     (when-let [disposed-callback (.-disposed-callback state)]
       (disposed-callback))
     ;(when-let [spec (.-element-spec state)]
     ;  (when-let [disposed (get-transition spec :node-disposed)]
     ;    (disposed)))
     (when-not (identical? (aget child-key 0) "-")
       (js-delete element-state-lookup child-key)
       ;(doseq [[child state] (.-child-states state)]
       ;  (dispose-node child state))
       (goog.object/forEach (.-child-states state)
                            (fn [state child-key _]
                              (dispose-node child-key state)))))))

(defn- remove-dom-node [dom-node]
  (time
    (let [state (aget element-state-lookup dom-node)]
      (dispose-node dom-node state)
      (when-let [parent (.-parentNode dom-node)]
        (.removeChild parent dom-node)
        (when state
          (js-delete (.-parent-state state) state))))))

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

(defn- exec-transition [node transition-name callback]
  (if-let [transition (get-transition node transition-name)]
    (transition node callback)
    (when callback (callback))))

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
        (if (identical? instrumentation-i 4)
          (do
            (reset! fps (* 1000 (/ 5 (- frame-ms last-instrumentation-time))))
            (set! instrumentation-i 0))
          (set! instrumentation-i (inc instrumentation-i)))
        (when (identical? 0 instrumentation-i)
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

(defn- on-value-ref-invalidated* [set-fn element state-prefix attr-name ref node-state]
  (when-let [[add-watch* remove-watch*] (r/get-add-remove-watch* ref)]
    (let [attr-state #js {:disposed false}
          key [element attr-name]
          f (fn on-value-ref-invalidated
              ([]
               (on-value-ref-invalidated key ref))
              ([key ref _ _]
               (on-value-ref-invalidated key ref))
              ([key ref]
               ;(set-fn element attr-name @ref)
               (remove-watch* ref key)
               (queue-animation
                 (fn [_]
                   (when-not (.-disposed attr-state)
                     (add-watch* ref key on-value-ref-invalidated)
                     (set-fn element attr-name (non-reactively @ref)))
                   ))
               ;(when (.-parentNode element)
               ;  (add-watch* ref key on-value-ref-invalidated)
               ;  (set-fn element attr-name @ref))
               ))]
      ;;(set! (.-invalidate attr-state) f)
      (register-with-parent-state node-state (str "-" state-prefix "."
                                                  attr-name) attr-state)
      ;(set! (.-child-states node-state)
      ;      (assoc (.-child-states node-state)
      ;                                        attr-state))
      (add-watch* ref key f)
      ))
  (set-fn element attr-name @ref))

(defn bind-style-prop! [element attr-name attr-value node-state]
  (if (satisfies? cljs.core/IDeref attr-value)
    (on-value-ref-invalidated* set-style-prop! element "style" attr-name attr-value node-state)
    (set-style-prop! element attr-name attr-value)))

(defn listen! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn- do-set-data-state! [element state]
  (set-attr! element "data-state" state))

(defn get-data-state [element]
  (.getAttribute element "data-state"))

(defn- enter-data-state! [element state old-state]
  (when-let [enter-transition (get-transition element (keyword (str "on-" state)))]
    (enter-transition element old-state)))

(defn set-data-state!
  ([element _ state] (set-data-state! element state))
  ([element state]
    (let [cur-state (get-data-state element)
          state (name state)]
      (when-not (identical? cur-state state)
        (do-set-data-state! element state)
        (let [leave-transition (get-transition element (keyword (str "after-" cur-state)))]
          (if leave-transition
            (leave-transition element (fn [] (enter-data-state! element state cur-state)) state)
            (enter-data-state! element state cur-state)))))))

(defn- bind-prop-attr! [set-fn element attr-name attr-value node-state]
  (if (satisfies? cljs.core/IDeref attr-value)
        (on-value-ref-invalidated* set-fn element "attr" attr-name
                                   attr-value node-state)
        (set-fn element attr-name attr-value)))

(defn- bind-attr! [element attr-name attr-value node-state]
  (let [attr-name (name attr-name)]
    (cond
      (identical? "style" attr-name)
      (do
        (assert (map? attr-value))
        (doseq [[p v] attr-value]
          (bind-style-prop! element p v node-state)))

      (identical? "data-state" attr-name)
      (bind-prop-attr! set-data-state! element attr-name attr-value node-state)

      (identical? 0 (.indexOf attr-name "on-"))
      (listen! element (.substring attr-name 3) attr-value)

      :default
      (bind-prop-attr! set-attr! element attr-name attr-value node-state))))

(defn- unbind-attr!* [node-state prefix attr-name]
  (let [attr-key (str "-" prefix "." attr-name)]
    (when-let [child-states (.-child-states node-state)]
      (when-let [state (aget child-states attr-key)]
        (set! (.-disposed state) true)
        (js-delete child-states attr-key)))))

(defn- rebind-style! [element attr-name styles node-state]
  (doseq [[p v] styles]
    (unbind-attr!* node-state "style" attr-name)
    (bind-style-prop! element p v node-state)))

(defn- rebind-attr! [element attr-name attr-value node-state]
  )

(defn set-attrs! [node attrs]
  (let [node-state (get-element-state node)]
    (doseq [[k v] attrs]
      (let [k (name k)]
        (if (identical? k "style")
          (doseq [[p v] v]
            (do
              (when node-state
                (unbind-attr!* node-state "style" p))
              (bind-style-prop! node p v node-state)))
          (do
            (when node-state
              (unbind-attr!* node-state "attr" k))
            (bind-attr! node k v node-state)))))))

;(defn- replace-attr!* [node node-state attr-name old-val new-val prefix binder]
;  (if (not (identical? old-val new-val))
;    (unbind-attr!* node-state prefix attr-name)
;    (binder node attr-name new-val node-state)))
;
;(defn- replace-attr! [node node-state attr-name old-val new-val]
;  (replace-attr!* node node-state attr-name old-val new-val "attr"))

(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder binder
                        remover]
  (loop [[[k new-val] & new-attrs] (seq new-attrs)
         old-attrs old-attrs]
    (if k
      (let [attr-name (name k)]
        (if-let [existing (get old-attrs k)]
          (do
            (rebinder node node-state attr-name existing new-val)
            (recur new-attrs (dissoc old-attrs k)))
          (do
            (binder node node-state attr-name new-val)
            (recur new-attrs old-attrs))))
      (loop [[[k v] & old-attrs] old-attrs]
        (when k
          (remover node node-state (name k))
          (recur old-attrs))))))

(defn- replace-attrs! [node old-attrs new-attrs]
  (let [node-state (get-element-state node)]
    ;;(replace-attrs!* node node-state old-attrs new-attrs nil nil )
    ))

;; From hiccup.compiler:
(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
     re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(def ^:dynamic *xml-namespaces* nil)

(defn- get-xml-namespace [kw-ns]
  (let [xmlns (get *xml-namespaces* kw-ns)]
    (assert xmlns (str "Don't know how to handle namespace " kw-ns))))

(defn- create-dom-node [kw]
  (let [tag-ns (namespace kw)
        [_ tag id class] (re-matches re-tag (name kw))
        node (if tag-ns
               (let [resolved-ns
                     (if (identical? tag-ns "svg")
                       "http://www.w3.org/2000/svg"
                       (get-xml-namespace tag-ns))]
                 (.createElementNS js/document resolved-ns tag))
               (.createElement js/document tag))]
    (when id (set! (.-id node) id))
    (when class (set! (.-className node) (.replace class "." " ")))
    node))

;; ## Core DOM Manipulation Methods

(declare build-element)

(defn- text-node? [dom-node]
  (identical? (.-nodeType dom-node) 3))

(defn- replace-child [parent new-elem-spec cur-elem]
  (let [cur-dom-node cur-elem                                       ;;
  ;; (get-dom-node cur-elem)
        new-virtual-dom (get-virtual-dom new-elem-spec)]
    (if (and
          (string? new-virtual-dom)
          (text-node? cur-dom-node))
      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        ;(reset-element-spec! cur-dom-node new-elem-spec)
        cur-elem)
      (let [new-elem (build-element new-elem-spec)]
        (.replaceChild
          ;(get-dom-node parent)
          ;(get-dom-node new-elem)
          parent
          new-elem
          cur-dom-node)
        (dispose-node cur-dom-node)
        new-elem))))

(defn- append-child [parent new-elem]
  (let [new-elem (build-element new-elem)]
    (.appendChild
      ;(get-dom-node parent)
      parent
      new-elem)
    new-elem))

(defn- replace-or-append-child [parent new-elem cur-elem]
  (let [new-elem
        (if cur-elem
          (replace-child parent new-elem cur-elem)
          (append-child parent new-elem))]
    (when-not (text-node? new-elem)
      (when-let [parent-state (get-element-state parent)]
        (let [state (get-element-state new-elem)]
          (set! (.-parent-state state) parent-state)
          (register-with-parent-state parent-state (get-node-id new-elem) state))))
    new-elem))

(defn- do-show-element [parent new-elem cur-elem]
  (when new-elem
    (let [show (get-transition new-elem :node-attached)
          new-elem (replace-or-append-child parent new-elem cur-elem)]
      (when show
        (show new-elem)
        new-elem)
      new-elem)))

(defn- transition-element
  ([parent new-elem cur-elem]
   (if cur-elem
     (if-let [hide (get-transition cur-elem :node-detaching)]
       (hide cur-elem
         (do-show-element parent new-elem cur-elem))
       (do-show-element parent new-elem cur-elem))
     (do-show-element parent new-elem cur-elem))))

(defn- clear-children! [parent]
  (let [dom-node parent
  ;(get-dom-node parent)
        ]
    (loop []
      (let [last-child (.-lastChild dom-node)]
        (when last-child
          (.removeChild dom-node last-child)
          (recur))))))

(defn- hide-node [node callback]
  (exec-transition node :node-detaching callback))

(defn- show-node [new-elem]
  (let [show (get-transition new-elem :node-attached) ]
      (when show
        (show new-elem)
        new-elem)
      new-elem))

;; Reactive Element Handling

(def ^:private auto-reactive-id 0)

(defn- new-reactive-id []
  (let [id auto-reactive-id]
    (set! auto-reactive-id (inc auto-reactive-id))
    (str "-r." id)))

(deftype ReactiveElement [id parent cur-element dirty updating disposed animate invalidate]
  IRemove
  (-remove! [this]
    (set! (.-disposed this) true)
    (when-not updating
      (remove! @cur-element))
    (when-let [parent-state (get-element-state parent)]
      (unregister-from-parent-state parent-state id))))

(defn- append-deref-child [parent child-ref]
  (if-let [[add-watch* remove-watch*] (r/get-add-remove-watch* child-ref)]
    (let [reactive-id (new-reactive-id)
          state (ReactiveElement. reactive-id parent nil false false false nil  nil)

          get-new-elem (fn []
                         (set! (.-dirty state) false)
                         (add-watch* child-ref state (.-invalidate state))
                         (or (non-reactively @child-ref) ""))

          show-new-elem (fn [new-elem cur]
                          (let [new-node (replace-or-append-child parent new-elem cur)]
                            (set! (.-cur-element state) new-node)
                            (set! (.-updating state) false)
                            (when (.-dirty state)
                              (queue-animation (.-animate state)))
                            (show-node new-node)))

          animate
          (fn animate [x]
            (if (.-disposed state)
              (remove! (.-cur-element state))
              (do
                (let [new-elem (get-new-elem)
                      cur (.-cur-element state)]
                  (when (not= (get-virtual-dom cur) (get-virtual-dom new-elem))
                    (let [hide (get-transition cur :node-detaching)]
                      (if hide
                        (do
                          (hide cur
                                (fn []
                                  (if (.-disposed state)
                                    (do
                                      (remove-dom-node cur)
                                      (set! (.-updating cur) false))
                                    (let [new-elem (if (.-dirty state)
                                                     (get-new-elem)
                                                     new-elem)]
                                      (show-new-elem new-elem cur))))))
                        (show-new-elem new-elem cur)))

                    )))))

          invalidate
          (fn on-child-ref-invalidated
            ([key child-ref _ _]
             (on-child-ref-invalidated key child-ref))
            ([cur-elem child-ref]
             (remove-watch* child-ref cur-elem)
             (when-not (.-disposed state)
               (set! (.-dirty state) true)
               (when-not (.-updating state)
                 (set! (.-updating state) true)
                 (queue-animation animate)))))]

      (set! (.-animate state) animate)
      (set! (.-invalidate state) invalidate)
      (show-new-elem (get-new-elem) nil)
      ;(set! (.-cur-element state)
      ;      (transition-element parent (or (non-reactively @child-ref) [:span]) nil))
      (when-let [parent-state (get-element-state parent)]
        (register-with-parent-state parent-state reactive-id state))
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
            ;(init-element-state! node elem-spec)
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
  (when-let [last-child (.-lastChild element
                        ;; (get-dom-node element)
                          )]
    (remove! last-child))
  (append-child! element child))
