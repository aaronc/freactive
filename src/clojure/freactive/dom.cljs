(ns freactive.dom
  (:require [freactive.core :as r]
            [goog.object])
  (:require-macros [freactive.macros :refer [rx non-reactively]]))

;; ## Core Defintions

(defonce ^:private auto-node-id 0)

(defonce ^:private element-state-lookup #js {})

(defprotocol IElementSpec
  (-get-virtual-dom [x]))

;(defrecord ElementSpec [spec]
;  IElementSpec
;  (-get-virtual-dom [x] spec))

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

(defn- get-element-spec [x]
  (if (dom-node? x)
    (when-let [state (get-element-state x)]
      (.-element-spec state))
    x))

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

(deftype ElementState [id disposed element-spec child-states])

(declare set-attr!)

(declare get-transition)

(defn- init-element-state! [dom-node element-spec]
  (let [node-id (str auto-node-id)
        state (ElementState. node-id false element-spec nil)]
    (set! auto-node-id (inc auto-node-id))
    (set-attr! dom-node "data-freactive-id" node-id)
    (when-let [m (meta element-spec)]
      (when-let [on-disposed (get m :node-disposed)]
        (set! (.-disposed-callback state) on-disposed)))
    (aset element-state-lookup node-id state)
    ;;(set! element-state-lookup (assoc element-state-lookup dom-node state))
    state))

(defn- register-with-parent-state [parent-state child-key state]
  (let [child-states (or (.-child-states parent-state)
                        (set! (.-child-states parent-state) #js {}))]
    (aset child-states child-key state)))

(defn- unregister-from-parent-state [parent-state child-key]
  (when-let [child-states (.-child-states parent-state)]
    (js-delete child-states child-key)))

(defn- reset-element-spec! [dom-node spec]
  (set! (.-element-spec (get-element-state dom-node)) spec))

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
     (when-not (identical? (aget child-key 0) "-")
       (js-delete element-state-lookup child-key)
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
    (if-let [node-detaching (get-transition x :node-detaching)]
      (node-detaching x (fn [] (remove-dom-node x)))
      (remove-dom-node x))
    (-remove! x)))

;; ## Defining Transitions

;(defn- wrap-element-spec [elem-spec]
;  (if (string? elem-spec)
;    (ElementSpec. elem-spec)
;    elem-spec))

(defn with-transitions [elem-spec transitions]
  (if (satisfies? IDeref elem-spec)
    (alter-meta! elem-spec merge transitions)
    (vary-meta elem-spec merge transitions)))

(defn- exec-transition [node transition-name callback]
  (if-let [transition (get-transition node transition-name)]
    (transition node callback)
    (when callback (callback))))
;
;(defn- chain-transition [elem-spec transition-name transition-fn chain-fn]
;  (if (satisfies? IDeref elem-spec)
;    (rx (chain-transition @elem-spec transition-name transition-fn chain-fn))
;    (let [cur-transition-fn (get-transition elem-spec transition-name)
;          transition-fn (if cur-transition-fn
;                          (chain-fn cur-transition-fn transition-fn)
;                          transition-fn)]
;      (with-transitions elem-spec {transition-name transition-fn}))))
;
;(defn prepend-transition [elem-spec transition-name transition-fn]
;  (chain-transition elem-spec transition-name transition-fn
;                    (fn [cur-tx new-tx]
;                      (fn [elem on-complete]
;                        (new-tx elem (fn [elem _] (cur-tx elem on-complete)))))) )
;
;(defn append-transition [elem-spec transition-name transition-fn]
;  (chain-transition elem-spec transition-name transition-fn
;                    (fn [cur-tx new-tx]
;                      (fn [elem on-complete]
;                        (cur-tx elem (fn [elem _] (new-tx elem on-complete)))))) )

;; ## Polyfills

(def request-animation-frame
  (or
   (.-requestAnimationFrame js/window)
   (.-webkitRequestAnimationFrame js/window)
   (.-mozRequestAnimationFrame js/window)
   (.-msRequestAnimationFrame js/window)
   (.-oRequestAnimationFrame js/window)
   (let [t0 (.getTime (js/Date.))]
     (fn [f]
       (js/setTimeout
        #(f (- (.getTime (js/Date.)) t0))
        16.66666)))))

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

(defn- set-attr! [elem attr-name attr-value]
  (.setAttribute elem attr-name attr-value))

(defn- remove-attr! [elem attr-name]
  (.removeAttribute elem attr-name))

(defn- set-style-prop! [elem prop-name prop-value]
  (aset (.-style elem)
        prop-name
        (if (.-substring prop-value)
          prop-value
          (.toString prop-value))))

(defn- remove-style-prop! [elem prop-name]
  (js-delete (.-style elem) prop-name))

(defn- bind-attr* [set-fn element state-prefix attr-name ref node-state]
  (when-let [[add-watch* remove-watch*] (r/get-add-remove-watch* ref)]
    (let [attr-state #js {:disposed false}
          key [element attr-name]
          f (fn on-value-ref-invalidated
              ([]
               (on-value-ref-invalidated key ref))
              ([key ref _ _]
               (on-value-ref-invalidated key ref))
              ([key ref]
               (remove-watch* ref key)
               (queue-animation
                 (fn [_]
                   (when-not (.-disposed attr-state)
                     (add-watch* ref key on-value-ref-invalidated)
                     (set-fn (non-reactively @ref)))))))]
      (register-with-parent-state node-state
                                  (str "-" state-prefix "." attr-name) attr-state)
      (add-watch* ref key f)))
  (set-fn @ref))

(defn- bind-style-prop! [element attr-name attr-value node-state]
  (let [setter (fn [v]
                 ;(println "setting style" element attr-name v)
                 (set-style-prop! element attr-name v))]
    (if (satisfies? cljs.core/IDeref attr-value)
      (bind-attr* setter element "style" attr-name attr-value node-state)
      (setter attr-value))))

(defn listen! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn remove-event-listener! [element evt-name handler]
  (.removeEventListener element evt-name handler))

(defn- do-set-data-state! [element state]
  (set-attr! element "data-state" state))

(defn get-data-state [element]
  (.getAttribute element "data-state"))

(defn- enter-data-state! [element state old-state]
  (when-let [enter-transition (get-transition element (keyword (str "on-" state)))]
    (enter-transition element old-state)))

(defn set-data-state!
  ([element state]
    (let [cur-state (get-data-state element)
          state (when state (name state))]
      (when-not (identical? cur-state state)
        (do-set-data-state! element state)
        (let [leave-transition (get-transition element (keyword (str "after-" cur-state)))]
          (if leave-transition
            (leave-transition element (fn [] (enter-data-state! element state cur-state)) state)
            (enter-data-state! element state cur-state)))))))

(defn- bind-prop-attr! [set-fn element attr-name attr-value node-state]
  (if (satisfies? cljs.core/IDeref attr-value)
        (bind-attr* set-fn element "attr" attr-name
                                   attr-value node-state)
        (set-fn attr-value)))

(defn- bind-event-listener! [element event-name handler node-state]
  (let [attr-state #js {:disposed false :handler handler
                        :disposed-callback (fn [] (remove-event-listener!
                                                    element event-name
                                                    handler))}]
      (register-with-parent-state node-state (str "-" "event" "." event-name) attr-state)
      (listen! element event-name handler)))

(defn- bind-style! [element styles node-state]
  (doseq [[p v] styles]
    (bind-style-prop! element (name p) v node-state)))

(defn- get-attr-setter [element attr-name]
  (cond
    (identical? "data-state" attr-name)
    (fn [state] (set-data-state! element state))

    (and (identical? (. element -type) "checkbox") (identical? attr-name "checked"))
    (fn [attr-value]
      (set! (. element -checked) (true? attr-value)))

    (identical? "id" attr-name)
    (fn [id] (set! (.-id element) id))

    (identical? "class" attr-name)
    (fn [cls] (set! (.-className element) cls))

    :default
    (fn [attr-value]
      (.setAttribute
        element attr-name
        (if attr-value
          (if (.-substring attr-value)
            attr-value
            (.toString attr-value))
          "")))))

(defn- bind-attr! [element attr-name attr-value node-state]
  (let [attr-name (name attr-name)]
    (cond
      (identical? "style" attr-name)
      (bind-style! element attr-value node-state)

      (identical? 0 (.indexOf attr-name "on-"))
      (bind-event-listener! element (.substring attr-name 3) attr-value node-state)

      :default
      (bind-prop-attr! (get-attr-setter element attr-name)
                       element attr-name attr-value node-state))))

(defn- dispose-child-state [node-state child-key]
  (when-let [child-states (.-child-states node-state)]
      (when-let [state (aget child-states child-key)]
        (set! (.-disposed state) true)
        (when-let [disposed-callback (.-disposed-callback state)]
          (disposed-callback))
        (js-delete child-states child-key))))

(defn- unbind-attr!* [node-state prefix attr-name]
  (let [attr-key (str "-" prefix "." attr-name)]
    (dispose-child-state node-state attr-key)))

(defn- rebind-style-prop! [element style-name style-value node-state]
  (unbind-attr!* node-state "style" style-name)
  (if style-value
    (bind-style-prop! element style-name style-value node-state)
    (remove-style-prop! element style-name)))

(defn- rebind-style! [element styles node-state]
  (doseq [[p v] styles]
    (rebind-style-prop! element (name p) v node-state)))

(defn- rebind-event! [element event-name handler node-state]
  (unbind-attr!* node-state "event" event-name)
  (when handler
    (listen! element event-name handler)))

(defn- rebind-prop-attr! [element attr-name attr-value node-state]
  (unbind-attr!* node-state "attr" attr-name)
  (if attr-value
    (bind-attr! element attr-name attr-value node-state)
    (remove-attr! element attr-name)))

(defn- rebind-attr! [element attr-name attr-value node-state]
  (cond
      (identical? "style" attr-name)
      (rebind-style! element attr-value node-state)

      (identical? 0 (.indexOf attr-name "on-"))
      (rebind-event! element (.substring attr-name 3) attr-value node-state)

      :default
      (rebind-prop-attr! element attr-name attr-value node-state)))

(defn set-attrs! [node attrs]
  (let [node-state (get-element-state node)]
    (doseq [[k v] attrs]
      (let [k (name k)]
        (rebind-attr! node k v node-state)))))

;(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder]
;  (let [hit #js {}]
;    (doseq [[k new-val] new-attrs]
;      (let [attr-name (name k)]
;        (if-let [existing (get old-attrs k)]
;          (do
;            (when-not (identical? existing new-val)
;              (rebinder node attr-name new-val node-state))
;            (aset hit attr-name true))
;          (rebinder node attr-name new-val node-state))))
;    (doseq [[k _] old-attrs]
;      (let [attr-name (name k)]
;        (when-not (aget hit attr-name)
;          (rebinder node attr-name nil node-state))))))

(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder]
  (loop [[[k new-val] & new-attrs] (seq new-attrs)
         old-attrs old-attrs]
    (if k
      (let [attr-name (name k)]
        (if-let [existing (get old-attrs k)]
          (do
            (when-not (identical? existing new-val)
              (rebinder node attr-name new-val node-state))
            (recur new-attrs (dissoc old-attrs k)))
          (do
            (rebinder node attr-name new-val node-state)
            (recur new-attrs old-attrs))))
      (loop [[[k v] & old-attrs] (seq old-attrs)]
        (when k
          (rebinder node (name k) nil node-state)
          (recur old-attrs))))))

(defn- replace-attrs! [node old-attrs new-attrs]
  (let [node-state (get-element-state node)
        old-style (:style old-attrs)
        new-style (:style new-attrs)]
    (replace-attrs!* node node-state
                     (dissoc old-attrs :style)
                     (dissoc new-attrs :style)
                     rebind-attr!)
    (replace-attrs!* node node-state
                     old-style
                     new-style
                     rebind-style-prop!)))

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

(defn- create-dom-node-simple [tag]
  (let [tag-ns (namespace tag)
        node (if tag-ns
               (let [resolved-ns
                     (if (identical? tag-ns "svg")
                       "http://www.w3.org/2000/svg"
                       (get-xml-namespace tag-ns))]
                 (.createElementNS js/document resolved-ns tag))
               (.createElement js/document tag))]
    node))

;; ## Core DOM Manipulation Methods

(declare build-element)

(defn- text-node? [dom-node]
  (identical? (.-nodeType dom-node) 3))

(def enable-diffing false)

(defn- can-diff-element [parent new-elem-spec cur-elem])

(defn- normalize-virtual-element [dom-vec]
  (let [tag (first dom-vec)
        tag-ns (namespace tag)
        [_ tag id class] (re-matches re-tag (name tag))
        class (when class (.replace class "." " "))
        attrs? (second dom-vec)
        attrs (when (map? attrs?) attrs?)
        children (if attrs (nnext dom-vec) (next dom-vec))]
    (if (or id class)
      (into [(keyword tag-ns tag) (merge attrs {:id id :class class})]
            children)
      dom-vec)))

(defn- register-element-with-parent [parent new-elem]
  (when-not (text-node? new-elem)
    (let [parent-state (get-element-state parent)
          parent-state (or parent-state
                           (init-element-state! parent nil))]
      (let [state (get-element-state new-elem)]
        (set! (.-parent-state state) parent-state)
        (register-with-parent-state parent-state (get-node-id new-elem) state)))))

(defn- replace-node-completly [parent new-elem-spec cur-dom-node]
  (let [new-elem (build-element new-elem-spec)]
    (register-element-with-parent parent new-elem)
    (.replaceChild parent new-elem cur-dom-node)
    (dispose-node cur-dom-node)
    new-elem))

(declare replace-child)

(declare append-children!)

(defn- try-diff-subseq [parent cur-child new-children]
  (loop [cur-child cur-child
         new-child (first new-children)
         more (rest new-children)]
    (if new-child
      (if cur-child
        (if (and (sequential? new-child) (not (keyword? (first new-child))))
          (let [cur-child (try-diff-subseq parent cur-child new-child)]
            (recur cur-child (first more) (rest more)))
          (do
            (replace-child parent new-child cur-child false)
            (recur (.-nextSibling cur-child) (first more) (rest more))))
        (do
          (append-children! parent new-children)
          nil))
      cur-child)))

(defn- try-diff [parent vdom cur-dom-node top-level]
  (let [cur-vdom (get-virtual-dom cur-dom-node)
        ;;vdom (normalize-virtual-element vdom)
        ]
    (if (keyword-identical? (first vdom) (first cur-vdom))
      (let [old-attrs? (second cur-vdom)
            new-attrs? (second vdom)
            new-attrs (when (map? new-attrs?) new-attrs?)]
        (replace-attrs! cur-dom-node
                        (when (map? old-attrs?) old-attrs?)
                        new-attrs)
        (when-not top-level
          (dispose-child-state (get-element-state cur-dom-node) "-reactive"))
        (reset-element-spec! cur-dom-node vdom)
        (let [new-children (if new-attrs (nnext vdom) (next vdom))
              dangling-child (try-diff-subseq cur-dom-node (.-firstChild cur-dom-node) new-children)]
          (loop [cur-child dangling-child]
            (when cur-child
              (let [next-sib (.-nextSibling cur-child)]
                (.removeChild cur-dom-node cur-child)
                (recur next-sib)))))
        cur-dom-node)
      (replace-node-completly parent vdom cur-dom-node))))

(defn- replace-child [parent new-elem-spec cur-dom-node top-level]
  (let [new-virtual-dom (get-virtual-dom new-elem-spec)]
    (if
      (and (string? new-virtual-dom)
           (text-node? cur-dom-node))
      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        cur-dom-node)

      (if enable-diffing
        (if top-level
          (do
            (println "starting diff replace")
            (time
              (try-diff parent new-virtual-dom cur-dom-node top-level)))
          (try-diff parent new-virtual-dom cur-dom-node top-level))

        (if top-level
          (do
            (println "starting full replace")
            (time
              (replace-node-completly parent new-elem-spec cur-dom-node))))
        (replace-node-completly parent new-elem-spec cur-dom-node)))))

(defn- insert-child [parent vdom before]
  (let [new-elem (build-element vdom)]
    (register-element-with-parent parent new-elem)
    (.insertBefore parent new-elem before)
    new-elem))

(defn- append-child [parent new-elem]
  (let [new-elem (build-element new-elem)]
    (register-element-with-parent parent new-elem)
    (.appendChild parent new-elem)
    new-elem))

(defn- append-or-insert-child [parent new-elem before]
  (if before
    (insert-child parent new-elem before)
    (append-child parent new-elem)))

;(defn- do-show-element [parent new-elem nil]
;  (when new-elem
;    (let [show (get-transition new-elem :node-attached)
;          new-elem (replace-or-append-child parent new-elem cur-elem true)]
;      (when show
;        (show new-elem)
;        new-elem)
;      new-elem)))

(defn- mount-element
  ([parent new-elem before]
   (let [show (get-transition new-elem :node-mounted)
         new-elem (append-or-insert-child parent new-elem before)]
     (when show
       (show new-elem)
       new-elem)
     new-elem)))

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

(defn- bind-child* [parent child-ref before insert-child* replace-child* remove*]
  (if-let [[add-watch* remove-watch*] (r/get-add-remove-watch* child-ref)]
    (let [id (new-reactive-id)
          state (ReactiveElement. id parent nil false false false nil  nil)

          get-new-elem (fn []
                         (set! (.-dirty state) false)
                         (add-watch* child-ref state (.-invalidate state))
                         (or (non-reactively @child-ref) ""))

          show-new-elem (fn [new-elem cur]
                          (let [new-node
                                (if cur
                                  (replace-child* parent new-elem cur true)
                                  (insert-child* parent new-elem before))]
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
                                      (remove* cur)
                                      (set! (.-updating cur) false))
                                    (let [new-elem (if (.-dirty state)
                                                     (get-new-elem)
                                                     new-elem)]
                                      (show-new-elem new-elem cur))))))
                        (show-new-elem new-elem cur))))))))

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
      (when-let [binding-disposed (get (meta child-ref) :binding-disposed)]
        (set! (.-disposed-callback state) binding-disposed))
      (when-let [parent-state (get-element-state parent)]
        (register-with-parent-state parent-state (str "-reactive" id) state))
      (when-let [binding-initialized (get (meta child-ref)
                                          :binding-initialized)]
        (binding-initialized))
      (set! (.-updating state) false)
      (show-new-elem (get-new-elem) nil)
      state)
    (mount-element parent @child-ref before)))

(defn bind-child [parent child before]
  (bind-child* parent child before append-or-insert-child replace-child remove-dom-node))

;; Building Elements

(defn insert-child! [parent child before]
  (cond
    (satisfies? IDeref child)
    (bind-child parent child before)

    :default
    (mount-element parent child before)))

(defn append-child! [parent child]
  (insert-child! parent child nil))

(defn- append-children! [elem children]
  (doseq [ch children]
    (if (sequential? ch)
      (if (keyword? (first ch))
        (append-child! elem ch)
        (append-children! elem ch))
      (append-child! elem ch))))

(defn build-element [elem-spec]
  (let [virtual-dom (get-virtual-dom elem-spec)]
    ;(println virtual-dom)
    (cond
      (string? virtual-dom)
      (.createTextNode js/document virtual-dom)

      (dom-node? virtual-dom)
      virtual-dom

      :default
      (let [  ;;virtual-dom (normalize-virtual-element virtual-dom)
            node (create-dom-node (first virtual-dom))
            state (init-element-state! node elem-spec)
            attrs? (second virtual-dom)
            attrs (when (map? attrs?) attrs?)
            children (if attrs (nnext virtual-dom) (next virtual-dom))]
        (doseq [[k v] attrs]
          (bind-attr! node k v state))
        (when children
          (append-children! node children))
        (when-let [m (meta virtual-dom)]
          (when-let [node-created (get m :node-created)]
            (node-created node)))
        node))))

(defn mount! [element child]
  (when-let [last-child (.-lastChild element
                        ;; (get-dom-node element)
                          )]
    (remove! last-child))
  (append-child! element child))
