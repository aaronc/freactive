(ns freactive.dom2
  (:require [freactive.core :as r]
            [goog.object])
  (:require-macros [freactive.macros :refer [rx non-reactively]]))

;; ## Core Defintions

(defonce ^:private auto-node-id 0)

(defn- dom-node? [x]
  (and x (> (.-nodeType x) 0)))

(defn- text-node? [dom-node]
  (identical? (.-nodeType dom-node) 3))

(defn- get-dom-image [x]
  (if x
    (cond
      (dom-node? x) x

      (string? x) x

      (vector? x) x

      (satisfies? IDeref x) x

      :default (-get-dom-image x))

    ;; nil values treated as empty "placeholder" text nodes
    ""))

(defn- get-element-state [x]
  (.-freactive-state x))

(defn- reset-element-state! [state]
  (when-let [on-disposed (.-disposed-callback state)]
    (on-disposed)
    (set! (.-disposed-callback state) nil)))

(defn- init-element-state! [dom-node tag]
  (let [node-id (str auto-node-id)
        state ;;(ElementState. node-id false element-spec nil)
        #js {:id node-id :disposed false :tag tag}]
    (set! auto-node-id (inc auto-node-id))
    (set! (.-freactive-state dom-node) state)
    state))

(defn- register-with-parent-state [parent-state child-key state]
  (let [child-states (or (.-child-states parent-state)
                        (set! (.-child-states parent-state) #js {}))]
    (aset child-states child-key state)))

(defn- unregister-from-parent-state [parent-state child-key]
  (when-let [child-states (.-child-states parent-state)]
    (js-delete child-states child-key)))

(defn- dispose-state [state]
  (set! (.-disposed state) true)
     (when-let [disposed-callback (.-disposed-callback state)]
       (disposed-callback)))

(defn- dispose-node
  ([dom-node]
   ;; (println "disposing" dom-node)
   (when-let [state                                       ;;(aget element-state-lookup node-id)
              (get-element-state dom-node)]
     (let [node-id (.-id state)]
       (dispose-node node-id state)
       (when-let [parent-state (.-parent-state state)]
         (when-let [child-states (.-child-states parent-state)]
           (js-delete child-states node-id))))))
  ([child-key state]
   ;; (println "disposing" child-key)
   (when state
     (dispose-state state)
     (when-not (identical? (aget child-key 0) "-")
       ;; (js-delete element-state-lookup child-key)
       (goog.object/forEach (.-child-states state)
                            (fn [state child-key _]
                              (dispose-node child-key state)))))))

(defn- remove-dom-node [dom-node]
  ;(println "removing dom node")
  (dispose-node dom-node)
  (when-let [parent (.-parentNode dom-node)]
    (.removeChild parent dom-node)))

(defn remove! [x]
  (assert (dom-node? x) "remove! only implemented for DOM nodes currently")
  (remove-dom-node x))

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

(defn enable-fps-instrumentation!
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

(defprotocol IDOMAttrValue
  (-get-attr-value [value]))

(defn normalize-attr-value [value]
  (cond
    (.-substring value) value
    (keyword? value) (name value)
    (identical? value true) ""
    (identical? value false) nil
    (satisfies? IDOMAttrValue value) (-get-attr-value value)
    :default (.toString value)))

(defn- set-attr! [element attr-name attr-value]
  (if attr-value
    (.setAttribute element attr-name (normalize-attr-value attr-value))
    (.removeAttribute element attr-name)))

(defn- set-style-prop! [elem prop-name prop-value]
  ;(println "set-style-prop!" elem prop-name prop-value)
  (if prop-value
    (aset (.-style elem) prop-name (normalize-attr-value prop-value))
    (js-delete (.-style elem) prop-name))
  prop-value)

(deftype ReactiveAttribute [id the-ref binding-info set-fn ^:mutable disposed]
  Object
  (dispose [this]
    ((.-remove-watch binding-info) ref id)
    (when-let [clean (.-clean binding-info)] (clean the-ref))
    (when-let [binding-disposed (get (meta the-ref) :binding-disposed)]
      (binding-disposed)))
  (invalidate [this]
    ((.-remove-watch binding-info) ref id)
    (queue-animation
     (fn [_]
       (when-not disposed 
         ((.-add-watch binding-info) ref id #(.invalidate this))
         (set-fn ((.-raw-deref binding-info) ref)))))))

(defn- bind-attr* [set-fn element state-key ref node-state]
  (let [binding-fns (r/get-binding-fns ref)
        add-watch* (.-add-watch binding-fns)
        remove-watch* (.-remove-watch binding-fns)
        clean* (.-clean binding-fns)
        raw-deref* (.-raw-deref binding-fns)
        ref-meta (meta ref)]
    (when (and add-watch* remove-watch*)
      (let [key (r/new-reactive-id)
            attr-state #js {:disposed false
                            :disposed_callback
                            (fn []
                              (remove-watch* ref key)
                              (when clean* (clean* ref))
                              (when-let [binding-disposed (get ref-meta :binding-disposed)]
                                (binding-disposed)))}
            invalidate
            (fn on-value-ref-invalidated []
               (remove-watch* ref key)
               (queue-animation
                (fn [_]
                  (when-not (.-disposed attr-state)
                    (add-watch* ref key on-value-ref-invalidated)
                    (set-fn (raw-deref* ref))))))]
        (register-with-parent-state node-state state-key attr-state)
        (add-watch* ref key invalidate)))
    (set-fn (raw-deref* ref))))

(defn- bind-style-prop-key [attr-key] (str "-style:" attr-key))

(defn- bind-style-prop! [element attr-key attr-value node-state]
  (let [attr-name (name attr-key)
        setter (fn [v]
                 (set-style-prop! element attr-name v))]
    (if (satisfies? cljs.core/IDeref attr-value)
      (bind-attr* setter element (bind-style-prop-key attr-key)
                  attr-value node-state)
      (setter attr-value))))

(defn ^:dynamic ^:pluggable listen!
  "Adds an event handler. Can be replaced by a plugin such as goog.events."
  [element evt-name handler]
  (.addEventListener element evt-name handler false))

(defn ^:dynamic ^:pluggable unlisten!
  "Removes an event handler. Can be replaced by a plugin such as goog.events."
  [element evt-name handler]
  (.removeEventListener  element evt-name handler))

(defn- do-set-data-state! [element state]
  (set-attr! element "data-state" state))

(defn get-data-state [element]
  (.getAttribute element "data-state"))

(defn- get-state-attr [state attr-str]
  (when-let [attrs (when state (.-attrs state))]
    (aget attrs attr-str)))

(defn set-data-state!
  ([element state]
    (let [cur-state (get-data-state element)
          node-state (get-element-state element)
          state (when state (name state))]
      (when-not (identical? cur-state state)
        (do-set-data-state! element state)
        (when-let [enter-transition (get-state-attr node-state (str ":state/on-" state))]
          (enter-transition element cur-state state))))))

(defn- bind-attr-key [attr-key] (str "-attr:" attr-key))

(defn- bind-prop-attr! [set-fn element attr-key attr-value node-state]
  (if (satisfies? cljs.core/IDeref attr-value)
    (bind-attr* set-fn element (bind-attr-key attr-key) attr-value node-state)
    (set-fn attr-value)))

(defn- bind-event-listener! [element event-name handler node-state]
  (let [attr-state #js {:disposed false :handler handler
                        :disposed_callback
                        (let [unlisten!* unlisten!]
                          (fn []
                            (unlisten!* element event-name handler)))}]
    (register-with-parent-state node-state (bind-attr-key (str ":on-" event-name))
                                attr-state)
    (listen! element event-name handler))
  handler)

(def ^:private attr-setters
  #js
  {:data-state (fn [element state]
                 (set-data-state! element state)
                 state)
   :class (fn [element cls]
            (set! (.-className element) cls)
            cls)
   ;; :value (fn [element v]
   ;;          (set! (.-value element) v)
   ;;          v)
   ;; :id (fn [element id] (set! (.-id element) id))
   })

;; attributes to set directly
(doseq [a #js ["id" "value"]]
  (aset attr-setters a (fn [e v] (aset e a v))))

(defn- get-attr-setter [element attr-name]
  (if-let [setter (aget attr-setters attr-name)]
    (fn [attr-value] (setter element attr-value))
    (fn [attr-value]
      (set-attr! element attr-name attr-value))))

(defn- bind-lifecycle-callback! [node node-state cb-name cb-value]
  (when (identical? cb-name "on-disposed")
    (set! (.-disposed-callback node-state) cb-value)
    ;; other callbacks automatically included in attr map
    )
  cb-value)

(defn- ns-attr-setter [element attr-ns attr-name]
  (fn [attr-value]
      ;(println "setting attr" element attr-name attr-value)
      (if attr-value
        (.setAttributeNS element attr-ns attr-name
          (normalize-attr-value attr-value))
        (.removeAttributeNS element attr-ns attr-name))
      attr-value))

(defn- ->str [kw-or-str]
  (if (string? kw-or-str)
    kw-or-str
    (if-let [attr-ns (namespace kw-or-str)]
      (str attr-ns "/" (name kw-or-str))
      (name kw-or-str))))

(defn- bind-event-listeners! [element listener-map node-state]
  (doseq [[k v] listener-map]
    (bind-event-listener!
     element
     (->str k)
     v node-state)))

(defn- bind-attr! [element attr-key attr-value node-state]
  (let [attr-ns (namespace attr-key)
        attr-name (name attr-key)]
    (if attr-ns
      (if-let [attr-handler (aget attr-ns-lookup attr-ns)]
        (cond
          (string? attr-handler)
          (bind-prop-attr! (ns-attr-setter element attr-ns attr-name) element
                           (bind-attr-key attr-key) attr-value node-state)

          (fn? attr-handler)
          (attr-handler element node-state attr-name attr-value)

          :default
          (.warn js/console "Invalid ns attr handler" attr-handler))
        (.warn js/console "Undefined ns attr prefix" attr-ns))
      (cond
        (identical? 0 (.indexOf attr-name "on-"))
        (bind-event-listener! element (.substring attr-name 3) attr-value node-state)

        (identical? attr-name "events")
        (bind-event-listeners! element attr-value node-state)

        :default
        (bind-prop-attr! (get-attr-setter element attr-name) element
                         (bind-attr-key attr-key) attr-value node-state)))))

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

(defn- dispose-child-state [child-states child-key]
  (when child-states
    (when-let [state (aget child-states child-key)]
      (dispose-state state)
      (js-delete child-states child-key))))

(defn- set-attrs!* [node attrs node-state binder js-attrs binder-state-key-fn]
  (let [child-states (.-child-states node-state)]
    (doseq [[k v] attrs]
      (dispose-child-state child-states (binder-state-key-fn k))
      (binder node k v node-state)
      (aset js-attrs (str k) v))))

(defn set-attrs! [node attrs]
  (let [node-state (get-element-state node)
        style (:style attrs)
        js-attrs (.-attrs node-state)
        js-style (.-style node-state)]
    (set-attrs!* node (dissoc attrs :style) node-state bind-attr! js-attrs bind-attr-key)
    (set-attrs!* node style node-state bind-style-prop! js-style bind-style-prop-key)))

(defn- replace-attrs!* [node node-state old-attrs new-attrs rebinder]
  (let [new-attrs-js #js {}]
    (doseq [[k new-val] new-attrs]
      (js-delete old-attrs (str k))
      (rebinder node k new-val node-state)
      (aset new-attrs-js (str k) new-val))
    (goog.object/forEach old-attrs
      (fn [_ attr-str _]
        (rebinder node (keyword (.substring attr-str 1)) nil node-state)))
    new-attrs-js))

(defn- dispose-attrs [state]
  (let [child-states (.-child-states state)]
    (goog.object/forEach
     child-states
     (fn [child-state child-key _]
       (when (identical? (aget child-key 0) "-")
         (dispose-state child-state)
         (js-delete child-states child-key))))))

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

(declare build)

(def enable-diffing false)

(defn- register-element-with-parent [parent new-elem]
  (when-not (text-node? new-elem)
    (let [parent-state (get-element-state parent)
          parent-state (or parent-state
                           (init-element-state! parent nil))]
      (let [state (get-element-state new-elem)]
        (set! (.-parent-state state) parent-state)
        (register-with-parent-state parent-state (.-id state) state)
        state))))

(defn- on-attached [state node]
  (when-let [node-attached (get-state-attr state ":node/on-attached")]
    (node-attached node)))

(defn- on-moving [state node cb]
  (if-let [node-moving (get-state-attr state ":node/on-moving")]
    (node-moving node cb)
    (cb)))

(defn- on-moved [state node]
  (when-let [node-moved (get-state-attr state ":node/on-moved")]
    (node-moved node)))

(defn- insert-node* [parent new-elem insert-fn]
  (let [state (register-element-with-parent parent new-elem)]
    (insert-fn)
    (on-attached state new-elem)))

(defn- move-node* [node move-fn]
  (on-moving (get-element-state node) node move-fn))

(defn- do-replace-node [parent new-elem cur-dom-node]
  (insert-node* parent new-elem 
                  (fn [] (.replaceChild parent new-elem cur-dom-node))))

(defn- replace-node-completely [parent new-elem-spec cur-dom-node top-level]
  (let [new-elem
        (if top-level
          (do
            ;(println "build")
            (build new-elem-spec))
          (build new-elem-spec))]
    (dispose-node cur-dom-node)
    (do-replace-node parent new-elem cur-dom-node)
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

;; From hiccup.compiler:
(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
     re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

;; (defn- build* [virtual-dom build-dom-element*]
;;   (let [tag (first virtual-dom)
;;         tag-ns (namespace tag)
;;         tag-name (name tag)
;;         tail (rest virtual-dom)]
;;     (if tag-ns
;;       (if-let [tag-handler (aget node-ns-lookup tag-ns)]
;;         (cond
;;           (string? tag-handler)
;;           (build-dom-element tag elem-spec tag-handler tag-name tail)

;;           (fn? tag-handler)
;;           (tag-handler tag-name tail)

;;           :default
;;           (.warn js/console "Invalid ns node handler" tag-handler))
;;         (.warn js/console "Undefined ns node prefix" tag-ns))
;;       (build-dom-element tag elem-spec nil tag-name tail))))

(defn- try-diff [parent spec vdom cur-dom-node top-level]
  (let [cur-state (get-element-state cur-dom-node)
        cur-tag (.-tag cur-state)
        ;; [_ tag-name id class] (re-matches re-tag (first vdom))
        new-tag (first vdom)
        ]
    (if (keyword-identical? new-tag cur-tag)
      (do
        ;; (println "diff hit" (first vdom) (.-id cur-state))
        (let [                                            ;;old-attrs (.-attrs cur-state)
              new-attrs? (second vdom)
              new-attrs (when (map? new-attrs?) new-attrs?)]
          (reset-element-state! cur-state)
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
        (replace-node-completely parent vdom cur-dom-node top-level)))))

(declare bind-child)

(defn- replace-child [parent new-elem-spec cur-dom-node top-level]
  (let [new-virtual-dom (get-dom-image new-elem-spec)]
    (cond
      (and (string? new-virtual-dom)
           (text-node? cur-dom-node))
      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        cur-dom-node)

      (satisfies? IDeref new-virtual-dom)
      (do
        (bind-child parent new-virtual-dom nil cur-dom-node))

      (dom-node? new-virtual-dom)
      (do-replace-node parent new-virtual-dom cur-dom-node)

      :default
      (if (and enable-diffing (not (text-node? cur-dom-node)))
        (if top-level
          (do
            ;; (println "starting diff replace")
            (try-diff parent new-elem-spec new-virtual-dom cur-dom-node top-level))
          (try-diff parent new-elem-spec new-virtual-dom cur-dom-node top-level))

        (replace-node-completely
          parent new-elem-spec cur-dom-node top-level)))))

(defn- do-append-or-insert-child [parent node before]
  (if before
    (.insertBefore parent node before)
    (.appendChild parent node)))

(defn- append-or-insert-child [parent vdom before]
  (cond
    (and  (dom-node? vdom) (.-parentNode vdom))
    (move-node* vdom
       (fn [] (do-append-or-insert-child parent vdom before)))

    (satisfies? IDeref vdom)
    (bind-child parent vdom before nil)

    :default
    (let [new-elem (build vdom)]
      (insert-node*
       parent new-elem
       (fn [] (do-append-or-insert-child parent new-elem before))) 
      new-elem)))

;; Reactive Element Handling

(deftype ReactiveElement [id parent ref cur-element dirty updating disposed
                          animate invalidate]
  IDOMImage
  (-get-dom-image [_] (get-dom-image cur-element)))

(defn- bind-child* [parent child-ref before cur insert-child* replace-child* remove*]
  (let [binding-fns (r/get-binding-fns child-ref)
        add-watch* (.-add-watch binding-fns)
        remove-watch* (.-remove-watch binding-fns)
        raw-deref* (.-raw-deref binding-fns)
        clean* (.-clean binding-fns)]
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
                                    (queue-animation (.-animate state))))
                                (do
                                  (set! (.-disposed state) true)))))

            animate
            (fn animate [x]
              (when-not (.-disposed state)
                (let [new-elem (get-new-elem)
                      cur (.-cur-element state)
                      node-state (get-element-state cur)]
                  (when-not (= (get-dom-image cur) (get-dom-image new-elem))
                    (if-let [hide (get-state-attr node-state ":node/on-detaching")]
                      (hide cur
                            (fn []
                              (if (.-disposed state)
                                (do
                                  ;;(remove* cur)
                                  (set! (.-updating cur) false))
                                (let [new-elem (if (.-dirty state)
                                                 (get-new-elem)
                                                 new-elem)]
                                  (show-new-elem new-elem cur)))))
                      (show-new-elem new-elem cur))))))

            invalidate
            (fn on-child-ref-invalidated []
              (remove-watch* child-ref id)
              ;; (when clean* (clean* child-ref))
              (when-not (.-disposed state)
                (set! (.-dirty state) true)
                (when-not (.-updating state)
                  (set! (.-updating state) true)
                  (queue-animation animate))))

            binding-invalidated (:binding-invalidated ref-meta)

            invalidate (if binding-invalidated
                         (fn []
                           (when-not (keyword-identical? :cancel (binding-invalidated (.-cur-element state) child-ref))
                             (invalidate)))
                         invalidate)]
        (set! (.-animate state) animate)
        (set! (.-invalidate state) invalidate)
        (set! (.-disposed-callback state)
              (fn []
                ;; (println "cleaning node binding")
                (remove-watch* child-ref id)
                (when clean* (clean* child-ref))
                (when-let [binding-disposed (get ref-meta :binding-disposed)]
                  (binding-disposed))))
        (when-let [parent-state (get-element-state parent)]
          (register-with-parent-state parent-state id state))
        (when-let [binding-initialized (get ref-meta :binding-initialized)]
          (binding-initialized))
        (set! (.-updating state) false)
        (show-new-elem (get-new-elem) cur)
        (.-cur-element state))
      (do
        (insert-child* (raw-deref* child-ref) before)))))

(defn- bind-child [parent child before cur]
  (bind-child* parent child before cur append-or-insert-child replace-child remove-dom-node))

;; Building Elements

(defn insert-before! [parent child before]
  (append-or-insert-child parent child before))

(defn append-child! [parent child]
  (append-or-insert-child parent child nil))

(defn- append-children! [elem children]
  (doseq [ch children]
    (if (sequential? ch)
      (if (keyword? (first ch))
        (append-child! elem ch)
        (append-children! elem ch))
      (append-child! elem ch))))

(defn update-attrs
  "Convenience function to update the attrs in a virtual dom vector.
Works like Clojure's update function but f (and its args) only modify the attrs
map in vdom."
  ([vdom f & args]
   (let [tag (first vdom)
         attrs? (second vdom)
         attrs (when (map? attrs?) attrs?)]
     (concat [tag (apply f attrs args)] (if attrs (nnext vdom) (next vdom))))))

;; (defn- create-dom-node [xmlns tag-name]
;;   (let [
;;         node ]
;;     (when id (set! (.-id node) id))
;;     (when class (set! (.-className node) (.replace class re-dot " ")))
;;     node))

;; (def ^:dynamic *xml-namespaces* nil)

;; (defn- get-xml-namespace [kw-ns]
;;   (let [xmlns (get *xml-namespaces* kw-ns)]
;;     (assert xmlns (str "Don't know how to handle namespace " kw-ns))))

(def ^:private re-dot (js/RegExp. "\\." "g"))

(defn- build-dom-element [tag elem-spec xmlns tag-name tail]
  (let [[_ tag-name id class] (re-matches re-tag tag-name)
        node (if xmlns
               (.createElementNS js/document xmlns tag-name)
               (.createElement js/document tag-name))
        attrs? (first tail)
        have-attrs (map? attrs?)
        attrs (if have-attrs attrs? {})
        attrs (cond-> attrs

                (and id (not (:id attrs)))
                (assoc :id id)
                
                class
                (update :class
                        (fn [cls]
                          (let [class (.replace class re-dot " ")]
                            (if cls (str class " " cls) class)))))

        state (init-element-state! node tag-name)
        children (if have-attrs (rest tail) tail)]
    (bind-attrs! node attrs state)
    (when children
      (append-children! node children))
    node))

(defn build [elem-spec]
  (let [virtual-dom (get-dom-image elem-spec)]
    (cond
      (string? virtual-dom)
      (.createTextNode js/document virtual-dom)

      (dom-node? virtual-dom)
      virtual-dom

      :default
      (let [tag (first virtual-dom)
            tag-ns (namespace tag)
            tag-name (name tag)
            tail (rest virtual-dom)]
        (if tag-ns
          (if-let [tag-handler (aget node-ns-lookup tag-ns)]
            (cond
             (string? tag-handler)
             (build-dom-element tag elem-spec tag-handler tag-name tail)

             (fn? tag-handler)
             (tag-handler tag-name tail)

             :default
             (.warn js/console "Invalid ns node handler" tag-handler))
            (.warn js/console "Undefined ns node prefix" tag-ns))
          (build-dom-element tag elem-spec nil tag-name tail))))))

(defn mount! [element child]
  (when-let [last-child (.-lastChild element)]
    (remove! last-child))
  (append-child! element child))

;;; collection binding

;; (deftype ReactiveElementCollection [keyset-cursor element-fn parent keys new-keys]
;;   Object
;;   (invalidate [this new-keyset]
;;     (r/remove-keyset-watch keyset-cursor parent)
;;     (when-not (.-disposed this)
;;       (set! (.-new-keyset this) new-keyset)
;;       (when-not (.-updating this)
;;         (set! (.-updating this) true)
;;         (queue-animation (fn [] (.animate this))))))
;;   (animate [this]
;;     (let [new-keyset (set new-keyset)]
;;       (loop [old-key (first keys)
;;              old-ks (rest keys)
;;              new-key (first new-keys)
;;              new-ks (rest new-keys)
;;              cur-elem head
;;              elements-to-move {}]
;;         (let [next-sib (.nextSibling cur-elem)]
;;           (cond (= old-key new-key)
;;                 (recur (first old-ks) (rest old-ks) (first new-ks) (rest new-ks)
;;                        next-sib elements-to-move)

;;                 (contains? new-keyset old-key)
;;                 (recur (first old-ks) (rest old-ks) new-key new-ks
;;                        next-sib
;;                        (assoc elements-to-move old-key (.removeChild parent cur-elem)))

;;                 :default
;;                 (do
;;                   (remove! cur-elem)
;;                   (if )
                  
;;                   )
;;                 ))

;;         ))

;;     )
;;   (init [this]
;;     (let [keyset (r/-keyset)
;;           elements
;;           (for [k keyset]
;;             (append-child! parent (element-fn k)))
;;           head (first elements)
;;           tail (last elements)
;;           on-animate*
;;           (fn [new-keyset]
;;             (fn []
;;               ))
;;           on-update
;;           (fn [k r new-keyset]
;;             )]
;;       (r/add-keyset-watch
;;        keyset-cursor
;;        parent
;;        ))))

;; (defn bind-keys [keyset-cursor element-fn]
;;   )


;; Plugin Support

(def ^:private node-ns-lookup
  #js
  {:svg "http://www.w3.org/2000/svg"})

(defn register-node-prefix! [prefix xml-ns-or-handler]
  (aset node-ns-lookup prefix xml-ns-or-handler))

(def ^:private attr-ns-lookup
  #js
  {:node bind-lifecycle-callback!
   :state (fn [_ _ _ v] v) ;; automatically handled in attr map
   })

(defn register-attr-prefix! [prefix xml-ns-or-handler]
  (aset attr-ns-lookup prefix xml-ns-or-handler))

;; Core VDOM and DOM stuff

(defprotocol IVirtualDOM
  (-vdom-insert [this dom-parent dom-before])
  (-vdom-remove [this])
  (-vdom-head [this])
  (-vdom-tail [this])
  (-vdom-replace [this new-vdom])
  (-vdom-node [this])
  (-vdom-simple-element [this]))

(defn vdom-node [this]
  (if (dom-node? this)
    this
    (-vdom-node this)))

(defn vdom-simple-element [this]
  (if (dom-node? this)
    this
    (-vdom-simple-element this)))

(defn dom-insert [dom-node dom-parent dom-before]
  (if dom-before
    (.insertBefore dom-parent dom-node dom-before)
    (.appendChild dom-parent dom-node)))

(defn dom-remove [dom-node]
  (when-let [parent (.-parentNode dom-node)]
    (.removeChild parent dom-node)))

(defn vdom-head [this]
  (if (dom-node? this)
    this
    (-vdom-head this)))

(defn vdom-tail [this]
  (if (dom-node? this)
    this
    (-vdom-tail this)))

(defn vdom-remove [this]
  (if (dom-node? this)
    (dom-remove this)
    (-vdom-remove this)))

(defn vdom-insert [this dom-parent dom-before]
  (if (dom-node? this)
    (dom-insert this dom-parent dom-before)
    (-vdom-insert this dom-parent dom-before)))

(defn dom-replace [dom-node new-vdom]
  (when-let [parent (.-parentNode dom-node)]
    (if-let [node (vdom-node new-vdom)]
      (do
        (.replaceChild parent node dom-node)
        new-vdom)
      (let [next-sib (.-nextSibling dom-node)]
        (.removeChild parent dom-node)
        (vdom-insert new-vdom parent next-sib)))))

(defn vdom-replace [this new-vdom]
  (if (dom-node? this)
    (dom-replace this new-vdom)
    (-vdom-replace this new-vdom)))

;; replace scenarios
;; DOMElement DOMElement -> diff or replace
;; DOMTextNode DOMTextNode -> simple update
;; DOMElement DOMTextNode -> replace
;; DOMElement ReactiveElement -> defer to ReactiveElement
;; DOMElement ReactiveElementCollection -> remove, insert
;; ReactiveElement ReactiveElement -> defer to replacing elem
;; ReactiveElement DOMTextNode -> defer to replacing elem
;; ReactiveElement ReactiveElementCollection
;; ReactiveElementCollection DOMTextNode
;; ReactiveElementCollection ReactiveElementCollection

(defn- vdom-full-replace [this node new-vdom]
  (let [next-sib (.-nextSibling node)
        parent (.-parentNode node)]
    (vdom-remove this)
    (-vdom-insert new-vdom parent next-sub)))

(defn dom-simple-replace [dom-node new-elem]
  (when-let [parent (.-parentNode dom-node)]
    (.replaceChild parent node (vdom-node new-elem))))

(defn dom-remove-replace [dom-node new-vdom]
  (when-let [parent (.-parentNode dom-node)]
    (let [next-sib (.-nextSibling dom-node)]
      (.removeChild parent dom-node)
      (vdom-insert new-vdom parent next-sib))))

;; Managed DOMElement stuff

(defn- bind-attr! [element attr-key attr-value node-state]
  (let [attr-ns (namespace attr-key)
        attr-name (name attr-key)]
    (if attr-ns
      (if-let [attr-handler (aget attr-ns-lookup attr-ns)]
        (cond
          (string? attr-handler)
          (bind-prop-attr! (ns-attr-setter element attr-ns attr-name) element
                           (bind-attr-key attr-key) attr-value node-state)

          (fn? attr-handler)

          (attr-handler element node-state attr-name attr-value)

          :default
          (.warn js/console "Invalid ns attr handler" attr-handler))
        (.warn js/console "Undefined ns attr prefix" attr-ns))
      (cond
        (identical? 0 (.indexOf attr-name "on-"))
        (bind-event-listener! element (.substring attr-name 3) attr-value node-state)

        (identical? attr-name "events")
        (bind-event-listeners! element attr-value node-state)

        :default
        (bind-prop-attr! (get-attr-setter element attr-name) element
                         (bind-attr-key attr-key) attr-value node-state)))))

(defn- bind-attrs!* [node attrs node-state binder]
  (let [js-attrs #js {}]
    (doseq [[k v] attrs]
      (binder node k v node-state)
      (aset js-attrs (str k) v))
    js-attrs))

(deftype DOMElement [ns-uri tag attrs children ^:mutable node]
  Object
  (ensureNode [this]
    (when-not node
      (set! node
            (if xmlns
              (.createElementNS js/document ns-uri tag)
              (.createElement js/document tag)))
      (set! (.-freactive-state node) this)
      ;; TODO bind attrs
      (doseq [child children]
        (vdom-insert child node nil)))
    )

  IVirtualDOM
  (-vdom-head [this] node)
  (-vdom-tail [this] node)
  (-vdom-node [this]
    (.ensureNode this)
    node)
  (-vdom-simple-element [this] this)
  (-vdom-insert [this dom-parent dom-before]
    (.ensureNode this)
    (dom-insert dom-parent node dom-before))
  (vdom-remove [this]
    (dom-remove node))
  (-vdom-replace [this new-vdom]
    (if-let [new-elem (vdom-simple-element new-vdom)]
      (if (and (instance? DOMElement new-elem)
               (identical? (.-ns-uri new-elem) ns-uri)
               (identical? (.-tag new-elem) tag)
               false ;; disabled
               )
        (do
          ;; TODO do diff replace
          this)
        (do
          (dom-simple-replace node new-elem)
          new-vdom))
      (dom-remove-replace node new-vdom))))

(deftype DOMTextNode [^:mutable text ^:mutable node]
  Object
  (ensureNode [this]
    (when-not node
      (set! node (.createTextNode js/document text))))
  IVirtualDOM
  (-vdom-head [this] node)
  (-vdom-tail [this] node)
  (-vdom-node [this]
    (.ensureNode this)
    node)
  (-vdom-simple-element [this] this)
  (-vdom-insert [this dom-parent dom-before]
    (.ensureNode this)
    (dom-insert dom-parent node dom-before))
  (-vdom-remove [this]
    (dom-remove node))
  (-vdom-replace [this new-vdom]
    (if-let [new-elem (vdom-simple-element new-vdom)]
      (if (instance? DOMTextNode new-vdom)
        (do
          (.ensureNode this)
          (set! text (.-text new-vdom))
          (set! (.-textContent node) text)
          this)
        (do
          (dom-simple-replace node new-elem)
          new-vdom))
      (dom-remove-replace node new-vdom))))

(deftype ReactiveElement [id the-ref binding-info
                          ^:mutable parent
                          ^:mutable cur-vdom ^:mutable dirty
                          ^:mutable updating ^:mutable disposed]
  Object
  (dispose [this]
    #_(remove-watch* the-ref id)
    #_(when clean* (clean* child-ref))
    #_(when-let [binding-disposed (get ref-meta :binding-disposed)]
      (binding-disposed)))
  (get-new-elem [this]
    (set! dirty false)
    ((.-add-watch binding-info) the-ref id #(.invalidate this))
    (or ((.-raw-deref binding-info) the-ref) ""))

  (show-new-elem [this new-vdom dom-before]
    (if cur-elem
      (set! cur-vdom (-vdom-replace cur-vdom new-vdom))
      (-vdom-insert new-elem parent before))
    (set! updating false)
    (when dirty 
      (queue-animation #(.animate this))))

  (animate [this]
    (when-not disposed
      (let [new-vdom (get-new-elem)]
        (when-not (= new-vdom cur-vdom)
          (-vdom-replace cur-vdom
           (fn []
             (if disposed
               (set! updating false)
               (.show-new-elem this (if dirty
                                      (get-new-elem)
                                      new-vdom) nil))))))))
  (invalidate [this]
    ((.-remove-watch binding-info) the-ref id)
    (when-not disposed
      (set! dirty true)
      (when-not updating
        (set! updating true)
        (queue-animation #(.animate this)))))

  IEquiv
  (-equiv [this other]
    (and
     (instance? ReactiveElement other)
     (= the-ref (.-the-ref other))))
  
  IVirtualDOM
  (-vdom-head [this] (vdom-head cur-elem))
  (-vdom-tail [this] (vdom-tail cur-elem))
  (-vdom-node [this] (vdom-node cur-elem))
  (-vdom-simple-element [this] (vdom-simple-element cur-elem))
  (-vdom-insert [this dom-parent dom-before]
    (set! (.-parent this) dom-parent)
    (.show-new-elem this (.get-new-elem this) dom-before)
    this)
  (-vdom-remove [this]
    (set! (.-disposed this) true)
    (vdom-remove cur-elem))
  (-vdom-replace [this new-vdom]
    (if (= this new-vdom)
      this
      (do
        (.dispose this)
        (vdom-replace cur-elem new-vdom)))))

(deftype ReactiveElementCollection [dom-parent elements]
  Object
  (move [this idx before-idx]
    (.insert this (aget (.splice elements idx 1) 0) before-idx))
  (remove [this idx]
    (vdom-remove (aget (.splice elements idx 1) 0)))
  (insert [this elem before-idx]
    (let [before-elem (when before-idx (aget elements before-idx))]
      (.splice elements (or before-idx (alength elements)) 0 to-move)
      ;; TODO handle append case
      (-vdom-insert to-move dom-parent (vdom-head before-elem))))

  IVirtualDOM
  (-vdom-node [this])
  (-vdom-simple-element [this])
  (-vdom-head [this]
    (when (> (.-length elements) 0)
      (vdom-head (aget elements 0))))
  (-vdom-tail [this]
    (when (> (.-length elements) 0)
      (vdom-tail (aget elements (dec (.-length elements))))))
  (-vdom-insert [this dom-parent dom-before]
    (loop [dom-before dom-before
           [elem & more] elements]
      (when elem
        (recur (dom-insert dom-parent elem dom-before) more))))
  (-vdom-remove [this]
    (set! (.-disposed this) true)
    (doseq [elem elements]
      (vdom-remove elem))))
;; Conversion of Clojure DOM images to virtual DOM

(defprotocol IDOMImage
  "A protocol for things that can be represented as virtual DOM or contain DOM nodes.

Can be used to define custom conversions to DOM nodes or text for things such as numbers
or dates; or can be used to define containers for DOM elements themselves."
  (-get-dom-image [x]
    "Should return either virtual DOM (a vector or string) or an actual DOM node."))


;; (extend-protocol IDOMImage
;;   boolean
;;   (-get-dom-image [x] (str x))

;;   number
;;   (-get-dom-image [x] (str x)))


(defn- dom-element [ns-uri tag tail]
  (let [[_ tag-name id class] (re-matches re-tag tag-name)
        attrs? (first tail)
        have-attrs (map? attrs?)
        attrs (if have-attrs attrs? {})
        attrs (cond-> attrs

                (and id (not (:id attrs)))
                (assoc :id id)
                
                class
                (update :class
                        (fn [cls]
                          (let [class (.replace class re-dot " ")]
                            (if cls (str class " " cls) class)))))

        children (if have-attrs (rest tail) tail)]
    (DOMElement. ns-uri tag attrs children nil)))

(defn- as-vdom [elem-spec]
  (cond
    (string? elem-spec)
    (DOMTextNode. elem-spec nil)

    (dom-node? elem-spec)
    elem-spec

    (vector? elem-spec)
    (let [tag (first elem-spec)]
      (cond
        (keyword? tag)
        (let [tag-ns (namespace tag)
              tag-name (name tag)
              tail (rest elem-spec)]
          (if tag-ns
            (if-let [tag-handler (aget node-ns-lookup tag-ns)]
              (cond
                (string? tag-handler)
                (dom-element tag-handler tag tail)

                (fn? tag-handler)
                (as-vdom (tag-handler tag-name tail))

                :default
                (.warn js/console "Invalid ns node handler" tag-handler))
              (.warn js/console "Undefined ns node prefix" tag-ns))
            (dom-element nil tag tail)))

        :default
        (assert false "Only know how to handle keyword tags")))

    (satisfies? IDeref elem-spec)
    (ReactiveElement2. (r/new-reactive-id)
                      elem-spec
                      (r/get-binding-fns elem-spec)
                      nil nil false false false)

    (satisfies? IVirtualDOM elem-spec)
    elem-spec

    (boolean? elem-spec) (as-vdom (str elem-spec))

    (number? elem-spec) (as-vdom (str elem-spec))

    :default (as-vdom (-get-dom-image elem-spec))))

;; Helper functions for injecting managed DOM elements into unmanaged DOM and
;; doing DOM manipulation of top-level managed nodes

(defn- get-vdom-state [elem]
  (or (.-freactive-state elem) elem))

(defn- ensure-unmanaged [elem]
  (when (not (get-element-state elem))
    (throw
     (ex-info
      "Can't safely do manual DOM manipulation within the managed element tree. Please do manual DOM manipulation only on top-level managed elements."
      {:managed-element elem}))))

(defn replace! [dom-element vdom]
  (ensure-unmanaged (.-parentNode dom-element))
  (vdom-replace (get-vdom-state dom-element) (as-vdom new-element)))

(defn- append-or-insert! [dom-element vdom before]
  (ensure-unmanaged dom-element)
  (vdom-insert (as-vdom new-element) dom-element before))

(defn append! [dom-element vdom]
  (append-or-insert! dom-element vdom nil))

(defn insert! [dom-element vdom before]
  (append-or-insert! dom-element vdom before))

(defn mount! [dom-element child]
  (if-let [last-child (.-lastChild dom-element)]
    (replace! last-child child)
    (append! dom-element child)))

(defn remove! [dom-element]
  (ensure-unmanaged (.-parentNode dom-element))
  (vdom-remove (get-vdom-state dom-element)))
