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
  (and x (> (.-nodeType x) 0)))

(defn- get-attr [dom-node attr-name]
  (when (.-getAttribute dom-node)
    (.getAttribute dom-node attr-name)))

(defn- get-node-id [x]
  (get-attr x "data-freactive-id"))

(defn- get-element-state [x]
  ;;(get element-state-lookup x)
  (when-let [node-id (get-node-id x)]
    (aget element-state-lookup node-id))
  ;(.-freactive-state x)
  )

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

      (satisfies? IDeref x) x

      :default (-get-virtual-dom x))

    ;; nil values treated as empty "placeholder" text nodes
    ""))

(deftype ElementState [id disposed element-spec child-states])

(declare set-attr!)

(declare get-transition)

(defn- init-element-meta! [state element-spec tag ]
  (let [m (meta element-spec)]
    (set! (.-meta state) m)
    (when-let [on-disposed (get m :node-disposed)]
      (set! (.-disposed-callback state) on-disposed)))
  (set! (.-tag state) tag))

(defn- reset-element-spec! [state spec tag]
  (when-let [on-disposed (.-disposed-callback state)]
    (on-disposed)
    (set! (.-disposed-callback state) nil))
  (set! (.-element-spec state) spec))

(defn- init-element-state! [dom-node element-spec tag]
  (let [node-id (str auto-node-id)
        state (ElementState. node-id false element-spec nil)]
    (set! auto-node-id (inc auto-node-id))
    (set-attr! dom-node "data-freactive-id" node-id)
    (init-element-meta! state element-spec tag)
    (aset element-state-lookup node-id state)
    (set! (.-freactive-state dom-node) state)
    state))

(defn- register-with-parent-state [parent-state child-key state]
  (let [child-states (or (.-child-states parent-state)
                        (set! (.-child-states parent-state) #js {}))]
    (aset child-states child-key state)))

(defn- unregister-from-parent-state [parent-state child-key]
  (when-let [child-states (.-child-states parent-state)]
    (js-delete child-states child-key)))

(defprotocol IRemove
  (-remove! [x]))

(defn- get-transition [x transition-name]
  (let [spec (get-element-spec x)]
    (when-not (string? spec)
      (get (meta spec) transition-name))))

(defn- dispose-node
  ([dom-node]
   ;(println "disposing" dom-node)
   (when-let [node-id (get-node-id dom-node)]
     (when-let [state                                       ;;(aget element-state-lookup node-id)
                (.-freactive-state dom-node)
                ]
       (dispose-node node-id state)
       (when-let [parent-state (.-parent-state state)]
         (when-let [child-states (.-child-states parent-state)]
           (js-delete child-states node-id))))))
  ([child-key state]
   (when state
     (set! (.-disposed state) true)
     (when-let [disposed-callback (.-disposed-callback state)]
       (disposed-callback))
     (when-not (identical? (aget child-key 0) "-")
       (js-delete element-state-lookup child-key)
       (goog.object/forEach (.-child-states state)
                            (fn [state child-key _]
                              (dispose-node child-key state)))))))

(defn- remove-dom-node [dom-node]
  ;(println "removing dom node")
  (dispose-node dom-node)
  (when-let [parent (.-parentNode dom-node)]
    (.removeChild parent dom-node)))

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
  (vary-meta elem-spec merge transitions))

(defn- exec-transition [node transition-name callback]
  (if-let [transition (get-transition node transition-name)]
    (transition node callback)
    (when callback (callback))))

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

(defonce fps (r/atom nil))

(defonce frame-time (r/atom nil))

(defonce
  render-loop
  (request-animation-frame
    (fn render[frame-ms]
      (reset! frame-time frame-ms)
      (when enable-fps-instrumentation
        (if (identical? instrumentation-i 14)
          (do
            (reset! fps (* 1000 (/ 15 (- frame-ms last-instrumentation-time))))
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
  ;(println "set-style-prop!" elem prop-name prop-value)
  (if prop-value
    (aset (.-style elem)
          prop-name
          (if (.-substring prop-value)
            prop-value
            (.toString prop-value)))
    (js-delete (.-style elem) prop-name)))

(defn- remove-style-prop! [elem prop-name]
  (js-delete (.-style elem) prop-name))

(defn- bind-attr* [set-fn element state-prefix attr-name ref node-state]
  (let [binding-fns (r/get-binding-fns ref)
        add-watch* (.-add-watch binding-fns)
        remove-watch* (.-remove-watch binding-fns)
        clean (or (.-clean binding-fns) remove-watch*)
        raw-deref* (.-raw-deref binding-fns)
        ref-meta (meta ref)]
    (when (and add-watch* remove-watch*)
      (let [key (r/new-reactive-id)
            attr-state #js {:disposed false
                            :disposed_callback
                            (fn []
                              (clean ref key)
                              (when-let [binding-disposed (get ref-meta :binding-disposed)]
                                (binding-disposed)))}
            invalidate
            (fn on-value-ref-invalidated []
               (remove-watch* ref key)
               (queue-animation
                (fn [_]
                  (when-not (.-disposed attr-state)
                    (add-watch* ref key on-value-ref-invalidated)
                    ;; (set-fn (non-reactively (deref* ref)))
                    (set-fn (raw-deref* ref))))))]
        (register-with-parent-state node-state (str "-" state-prefix "." attr-name) attr-state)
        (add-watch* ref key invalidate)))
    (set-fn (raw-deref* ref))))

(defn- bind-style-prop! [element attr-name attr-value node-state]
  (let [attr-name (name attr-name)
        setter (fn [v]
                 (set-style-prop! element attr-name v))]
    (if (satisfies? cljs.core/IDeref attr-value)
      (bind-attr* setter element "style" attr-name attr-value node-state)
      (setter attr-value))))

(defn add-event-handler! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn remove-event-handler! [element evt-name handler]
  (.removeEventListener  element evt-name handler))

(def ^:dynamic listen! add-event-handler!)

(def ^:dynamic unlisten! remove-event-handler!)

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
                        :disposed_callback
                        (let [unlisten!* unlisten!]
                          (fn []
                            (unlisten!* element event-name handler)))}]
      (register-with-parent-state node-state (str "-" "event" "." event-name) attr-state)
      (listen! element event-name handler)))

(defn- bind-style! [element styles node-state]
  (doseq [[p v] styles]
    (bind-style-prop! element p v node-state)))

(def ^:private attr-setters
  #js
  {:data-state (fn [element state] (set-data-state! element state))
   :class (fn [element cls] (set! (.-className element) cls))
   ;; :id (fn [element id] (set! (.-id element) id))
   })

(defn- get-attr-setter [element attr-name]
  (if-let [setter (aget attr-setters attr-name)]
    (fn [attr-value] (setter element attr-value))
    (fn [attr-value]
      ;(println "setting attr" element attr-name attr-value)
      (if attr-value
        (.setAttribute element attr-name
          (if (.-substring attr-value)
            attr-value
            (.toString attr-value)))
        (.removeAttribute element attr-name)))))

(defn- bind-lifecycle-callback! [element cb-name cb-value node-state]
  (case cb-name
    "attached"
    (set! (.-node-attached node-state) cb-value)

    "disposed"
    (set! (.-disposed-callback node-state) cb-value)
    nil))

(defn- bind-attr! [element attr-name attr-value node-state]
  (let [attr-ns (namespace attr-name)
        attr-name (name attr-name)]
    (if attr-ns
      (case attr-ns
        "node"
        (bind-lifecycle-callback! element attr-name attr-value node-state)
        nil)
      (cond
        (identical? "style" attr-name)
        (bind-style! element attr-value node-state)

        (identical? 0 (.indexOf attr-name "on-"))
        (bind-event-listener! element (.substring attr-name 3) attr-value node-state)

        :default
        (bind-prop-attr! (get-attr-setter element attr-name)
                         element attr-name attr-value node-state)))))

(defn- bind-attrs!* [node attrs node-state binder]
  (let [js-attrs #js {}]
    (doseq [[k v] attrs]
      (binder node k v node-state)
      (aset js-attrs (str k) v))
    js-attrs))

(defn- bind-attrs! [node attrs node-state]
  (let [style (:style attrs)
        js-attrs (bind-attrs!* node (dissoc attrs :style) node-state bind-attr!)
        js-style (bind-attrs!* node style node-state bind-style-prop!)]
    (set! (.-attrs node-state) js-attrs)
    (set! (.-style node-state) js-style)))

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
    (rebind-style-prop! element p v node-state)))

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
;    (doseq [[attr-name new-val] new-attrs]
;      ;(println "rebinding" attr-name new-val)
;      (rebinder node attr-name new-val node-state)
;      (when (get old-attrs attr-name)
;          (aset hit (str attr-name) true)))
;    (doseq [[attr-name _] old-attrs]
;      (let [attr-str (str attr-name)]
;        (when-not (aget hit attr-str)
;          ;(println "unbinding" attr-name)
;          (rebinder node attr-name nil node-state))))))

(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder]
  (let [new-attrs-js #js {}]
    (doseq [[attr-name new-val] new-attrs]
      (let [attr-str (if-let [attr-ns (namespace attr-name)]
                       (str attr-ns "/" (name attr-name))
                       (name attr-name))]
        (rebinder node attr-name new-val node-state)
        (js-delete old-attrs attr-str)
        (aset new-attrs-js attr-str new-val)))
    (goog.object/forEach old-attrs
      (fn [_ attr-str _]
        (rebinder node (keyword attr-str) nil node-state)))
    new-attrs-js))

;(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder]
;  (loop [[[k new-val] & new-attrs] (seq new-attrs)
;         old-attrs old-attrs]
;    (if k
;      (let [attr-name (name k)]
;        (if-let [existing (get old-attrs k)]
;          (do
;            (when-not (identical? existing new-val)
;              (rebinder node attr-name new-val node-state))
;            (recur new-attrs (dissoc old-attrs k)))
;          (do
;            (rebinder node attr-name new-val node-state)
;            (recur new-attrs old-attrs))))
;      (loop [[[k v] & old-attrs] (seq old-attrs)]
;        (when k
;          (rebinder node (name k) nil node-state)
;          (recur old-attrs))))))

(defn- dispose-attrs [state]
  (let [child-states (.-child-states state)
        to-remove #js []]
    (goog.object/forEach
      child-states
      (fn [child-state child-key _]
        (when (identical? (aget child-key 0) "-")
          (.push to-remove child-key)
          (set! (.-disposed child-state) true)
          (when-let [cb (.-disposed-callback child-state)]
            (cb)))))
    (doseq [child-key to-remove]
      (js-delete child-states child-key))))

(defn- replace-attrs! [node node-state new-attrs]
  (let [old-attrs (.-attrs node-state)
        old-style (.-style node-state)
        new-style (:style new-attrs)]
    (dispose-attrs node-state)
    (set! (.-attrs node-state)
          (replace-attrs!* node node-state
                           old-attrs
                           (dissoc new-attrs :style)
                           bind-attr!))
    (set! (.-style node-state)
          (replace-attrs!* node node-state
                           old-style
                           new-style
                           bind-style-prop!))))

;; From hiccup.compiler:
(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
     re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(def ^:dynamic *xml-namespaces* nil)

(defn- get-xml-namespace [kw-ns]
  (let [xmlns (get *xml-namespaces* kw-ns)]
    (assert xmlns (str "Don't know how to handle namespace " kw-ns))))

(def ^:private re-dot (js/RegExp. "\\." "g"))

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
    (when class (set! (.-className node) (.replace class re-dot " ")))
    node))

;(defn- create-dom-node-simple [tag]
;  (let [tag-ns (namespace tag)
;        node (if tag-ns
;               (let [resolved-ns
;                     (if (identical? tag-ns "svg")
;                       "http://www.w3.org/2000/svg"
;                       (get-xml-namespace tag-ns))]
;                 (.createElementNS js/document resolved-ns tag))
;               (.createElement js/document tag))]
;    node))

;; ## Core DOM Manipulation Methods

(declare build-element)

(defn- text-node? [dom-node]
  (identical? (.-nodeType dom-node) 3))

(def enable-diffing true)

(defn- register-element-with-parent [parent new-elem]
  (when-not (text-node? new-elem)
    (let [parent-state (get-element-state parent)
          parent-state (or parent-state
                           (init-element-state! parent nil nil))]
      (let [state (get-element-state new-elem)]
        (set! (.-parent-state state) parent-state)
        (register-with-parent-state parent-state
                                    (get-node-id new-elem) state)
        state))))

(defn- on-attached [state node]
  (when state
    (when-let [node-attached (.-node-attached state)]
      (node-attached node))))

(defn- replace-node-completely [parent new-elem-spec cur-dom-node top-level]
  (let [new-elem
        (if top-level
          (do
            ;(println "build")
            (build-element new-elem-spec))
          (build-element new-elem-spec))]
    (dispose-node cur-dom-node)
    (let [state (register-element-with-parent parent new-elem)]
      (.replaceChild parent new-elem cur-dom-node)
      (on-attached state new-elem))
    new-elem))

(declare replace-child)
(declare append-child!)
(declare append-children!)

(defn- try-diff-subseq [parent cur-child new-children]
  (loop [cur-child cur-child
         [new-child & more :as new-children] new-children]
    (if new-child
      (if cur-child
        (if (and (sequential? new-child) (not (keyword? (first new-child))))
          (let [cur-child (try-diff-subseq parent cur-child new-child)]
            (recur cur-child more))
          (let [next-sib (.-nextSibling cur-child)]
            (replace-child parent new-child cur-child false)
            (recur next-sib more)))
        (do
          (append-children! parent new-children)
          nil))
      cur-child)))

(defn- try-diff [parent spec vdom cur-dom-node top-level]
  (let [cur-state (get-element-state cur-dom-node)
        cur-tag (.-tag cur-state)
        new-tag (first vdom)]
    (if (identical? spec (.-element-spec cur-state))
      cur-dom-node
      (if (keyword-identical? new-tag cur-tag)
        (do
          ;; (println "diff hit" (first vdom) (.-id cur-state))
          (let [                                            ;;old-attrs (.-attrs cur-state)
                new-attrs? (second vdom)
                new-attrs (when (map? new-attrs?) new-attrs?)]
            (reset-element-spec! cur-state vdom new-tag)
            (replace-attrs! cur-dom-node
                            cur-state
                            new-attrs)
            (let [new-children (if new-attrs (nnext vdom) (next vdom))
                  dangling-child (try-diff-subseq cur-dom-node (.-firstChild cur-dom-node) new-children)]
              (loop [cur-child dangling-child]
                (when cur-child
                  (let [next-sib (.-nextSibling cur-child)]
                    (remove-dom-node cur-child)
                    (recur next-sib)))))
            (on-attached cur-state cur-dom-node)
            cur-dom-node))
        (do
          ;; (println "build hit" (first vdom) (first cur-vdom))
          (replace-node-completely parent vdom cur-dom-node top-level))))))

(declare bind-child)

(defn- replace-child [parent new-elem-spec cur-dom-node top-level]
  (let [new-virtual-dom (get-virtual-dom new-elem-spec)]
    (cond
      (and (string? new-virtual-dom)
           (text-node? cur-dom-node))
      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        cur-dom-node)

      (satisfies? IDeref new-virtual-dom)
      (do
        (bind-child parent new-virtual-dom nil cur-dom-node))

      :default
      (if enable-diffing
        (if top-level
          (do
            ;; (println "starting diff replace")
            (try-diff parent new-elem-spec new-virtual-dom cur-dom-node top-level))
          (try-diff parent new-elem-spec new-virtual-dom cur-dom-node top-level))

        (replace-node-completely
          parent new-elem-spec cur-dom-node top-level)))))

(defn- append-or-insert-child [parent vdom before]
  (if (satisfies? IDeref vdom)
    (bind-child parent vdom before nil)
    (let [new-elem (build-element vdom)]
      (let [state (register-element-with-parent parent new-elem)]
        (if before
          (.insertBefore parent new-elem before)
          (.appendChild parent new-elem))
        (on-attached state new-elem))
      new-elem)))

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

;; (defn- clear-children! [parent]
;;   (let [dom-node parent
;;   ;(get-dom-node parent)
;;         ]
;;     (loop []
;;       (let [last-child (.-lastChild dom-node)]
;;         (when last-child
;;           (.removeChild dom-node last-child)
;;           (recur))))))

(defn- hide-node [node callback]
  (exec-transition node :node-detaching callback))

(defn- show-node [new-elem]
  (let [show (get-transition new-elem :node-attached) ]
      (when show
        (show new-elem)
        new-elem)
      new-elem))

;; Reactive Element Handling

(defprotocol INodeContainer
  (-replace [container new-elem-spec]))

(deftype ReactiveElement [id parent ref cur-element dirty updating disposed
                          animate invalidate]
  IElementSpec
  (-get-virtual-dom [_] ref)
  IRemove
  (-remove! [this]
    (set! (.-disposed this) true)
    (when-not updating
      (remove! cur-element))
    (when-let [parent-state (get-element-state parent)]
      (unregister-from-parent-state parent-state id))))

(defn- bind-child* [parent child-ref before cur insert-child* replace-child* remove*]
  (let [binding-fns (r/get-binding-fns child-ref)
        add-watch* (.-add-watch binding-fns)
        remove-watch* (.-remove-watch binding-fns)
        raw-deref* (.-raw-deref binding-fns)
        clean (or (.-clean binding-fns) remove-watch*)]
    (if (and add-watch* remove-watch*)
      (let [id (r/new-reactive-id)

            state (ReactiveElement. id parent child-ref nil false false false nil nil)

            ref-meta (meta child-ref)

            get-new-elem (fn get-new-elem-fn []
                           (set! (.-dirty state) false)
                           (add-watch* child-ref id (.-invalidate state))
                           (or (raw-deref* child-ref) ""))

            show-new-elem (fn show-new-elem-fn [new-elem cur]
                            (let [cur
                                  (loop [cur cur]
                                    (if (instance? ReactiveElement cur)
                                      (let [cur-elem (.-cur-element cur)]
                                        (set! (.-disposed cur) true)
                                        (set! (.-cur-element cur) nil)
                                        (recur cur-elem))
                                      cur))]
                              (if-let [parent (if cur (.-parentNode cur) parent)]
                                (let [new-node (if cur
                                                 (replace-child* parent new-elem cur true)
                                                 (insert-child* parent new-elem before))]
                                  (set! (.-cur-element state) new-node)
                                  (set! (.-updating state) false)
                                  (when (.-dirty state)
                                    (queue-animation (.-animate state)))
                                  (show-node new-node))
                                (do
                                  (set! (.-disposed state) true)))))

            animate
            (fn animate [x]
              (when-not (.-disposed state)
                (let [new-elem (get-new-elem)
                      cur (.-cur-element state)]
                  (when-not (identical? (get-virtual-dom cur) (get-virtual-dom new-elem))
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
                        (show-new-elem new-elem cur)))))))

            invalidate
            (fn on-child-ref-invalidated []
              (remove-watch* child-ref id)
              (when-not (.-disposed state)
                (set! (.-dirty state) true)
                (when-not (.-updating state)
                  (set! (.-updating state) true)
                  (queue-animation animate))))

            binding-invalidated (:binding-invalidated ref-meta)

            invalidate (if binding-invalidated
                         (fn binding-invalidated-wrapper
                           ([key child-ref _ _] (binding-invalidated-wrapper key child-ref))
                           ([key child-ref]
                            (when (binding-invalidated (.-cur-element state) child-ref)
                              (invalidate key child-ref))))
                         invalidate)]
        (set! (.-animate state) animate)
        (set! (.-invalidate state) invalidate)
        (set! (.-disposed-callback state)
              (fn []
                (clean child-ref id)
                (when-let [binding-disposed (get ref-meta :binding-disposed)]
                  (binding-disposed))))
        (when-let [parent-state (get-element-state parent)]
          (register-with-parent-state parent-state id state))
        (when-let [binding-initialized (get ref-meta :binding-initialized)]
          (binding-initialized))
        (set! (.-updating state) false)
        (show-new-elem (get-new-elem) cur)
        state)
      (do
        (mount-element parent (raw-deref* child-ref) before)))))

(defn bind-child [parent child before cur]
  (if-let [binder (:binder (meta child))]
    (binder parent child before cur append-or-insert-child replace-child remove-dom-node)
    (bind-child* parent child before cur append-or-insert-child replace-child remove-dom-node)))

;; Building Elements

(defn insert-child! [parent child before]
  (cond
    (satisfies? IDeref child)
    (bind-child parent child before nil)

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
      (let [tag (first virtual-dom)
            node (create-dom-node tag)
            attrs? (second virtual-dom)
            attrs (when (map? attrs?) attrs?)
            state (init-element-state! node elem-spec tag)
            children (if attrs (nnext virtual-dom) (next virtual-dom))]
        ;(doseq [[k v] attrs]
        ;  (bind-attr! node k v state))
        (bind-attrs! node attrs state)
        (when children
          (append-children! node children))
        ;(when-let [m (.-meta state)]
        ;  (when-let [node-created (get m :node-created)]
        ;    (node-created node)))
        node))))

(defn mount! [element child]
  (when-let [last-child (.-lastChild element
                        ;; (get-dom-node element)
                          )]
    (remove! last-child))
  (append-child! element child))
