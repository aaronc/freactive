(ns freactive.experimental.dom2)

;; ## Core Defintions

(def ^:private element-spec-lookup #js {})

(defprotocol IElementSpec
  (-get-virtual-dom [x]))

(defrecord ElementSpec [spec]
  IElementSpec
  (-get-virtual-dom [x] spec))

(defn- dom-node? [x]
  (> (.-nodeType x) 0))

(defn- get-virtual-dom [x]
  (cond
    (dom-node? x)
    (get-virtual-dom (aget element-spec-lookup x))
    (string? x) x
    (vector? x) x
    :default (-get-virtual-dom x)))

(defn- set-element-spec! [dom-node spec]
  (aset element-spec-lookup dom-node spec))

(defn- get-element-spec [x]
  (if (dom-node? x)
    (aget element-spec-lookup x)
    x))

(defn- get-transition [x transition-name]
  (let [spec (get-element-spec x)]
    (when-not (string? spec)
      (get (meta spec) transition-name))))

(defprotocol IHasDOMNode
  (-get-dom-node [x]))

(defn get-dom-node [x]
  (if (dom-node? x)
    x
    (-get-dom-node x)))

(defprotocol IRemove
  (-remove! [x]))

(defn- remove-dom-node [x])

(defn remove! [x]
  (if (dom-node? x)
    (remove-dom-node x)
    (-remove! x)))

;; ## Polyfills

(defn request-animation-frame [f]
  (.requestAnimationFrame js/window f))

;; ## Attributes, Styles & Events

(defn- set-style-prop! [elem prop-name prop-value]
  (let [prop-name (name prop-name)]
    (aset (.-style elem) prop-name (str prop-value))))

(defn- set-attr! [elem attr-name attr-value]
  (let [attr-name (name attr-name)]
    (.setAttribute elem attr-name attr-value)))

(defn- on-value-ref-invalidated* [set-fn element attr-name ref]
  (when-let [[add-watch* remove-watch*] (r/get-add-remove-watch* ref)]
    (let [f (fn on-value-ref-invalidated
              ([key ref _ _]
               (on-value-ref-invalidated key ref))
              ([key ref]
               ;(set-fn element attr-name @ref)
               (remove-watch* ref key)
               (request-animation-frame
                 (fn [_]
                   (when (.-parentNode element)
                     (add-watch* ref key on-value-ref-invalidated)
                     (set-fn element attr-name @ref))
                   )
                 )
               ;(when (.-parentNode element)
               ;  (add-watch* ref key on-value-ref-invalidated)
               ;  (set-fn element attr-name @ref))
               ))]
      (add-watch* ref [element attr-name] f)))
  (set-fn element attr-name @ref))

(defn bind-style-prop! [element attr-name attr-value]
  (if (satisfies? cljs.core/IDeref attr-value)
    (on-value-ref-invalidated* set-style-prop! element attr-name attr-value)
    (set-style-prop! element attr-name attr-value)))

(defn listen! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn bind-attr! [element attr-name attr-value]
  (let [attr-name (name attr-name)]
    (cond
      (= "style" attr-name)
      (do
        (assert (map? attr-value))
        (doseq [[p v] attr-value]
          (bind-style-prop! element p v)))

      (= [\o \n \-] (take 3 attr-name))
      (listen! element (.substring attr-name 3) attr-value)

      :default
      (if (satisfies? cljs.core/IDeref attr-value)
        (on-value-ref-invalidated* set-attr! element attr-name attr-value)
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
        (set-element-spec! cur-dom-node new-elem-spec)
        cur-elem)
      (let [new-elem (build-element new-elem-spec)]
        (.replaceChild
          (get-dom-node parent)
          (get-dom-node new-elem)
          cur-dom-node)
        new-elem))))

(defn- append-child [parent new-elem]
  ;;(println "appending" new-elem "to" parent)
  (let [new-elem (build-element new-elem)]
    (.appendChild
      (get-dom-node parent)
      (get-dom-node new-elem))
    new-elem))

(defn- clear-children! [parent]
  (let [dom-node (get-dom-node parent)]
    (loop []
      (let [last-child (.-lastChild dom-node)]
        (when last-child
          (.removeChild dom-node last-child)
          (recur))))))

(defn- replace-or-append-child [parent new-elem cur-elem]
  (if cur-elem
    (replace-child parent new-elem cur-elem)
    (append-child parent new-elem)))

(defn- do-show-element [parent new-elem cur-elem]
  (let [show (get-transition new-elem :show)
        new-elem (replace-or-append-child parent new-elem cur-elem)]
    (when show
      (show new-elem nil))
    new-elem))

(defn- transition-element
  ([parent new-elem cur-elem]
   (if cur-elem
     (if-let [hide (get-transition cur-elem :hide)]
       (hide cur-elem
         (do-show-element parent new-elem cur-elem))
       (do-show-element parent new-elem cur-elem))
     (do-show-element parent new-elem cur-elem))))

;(defn remove-child! [parent child]
;  (if (instance? DerefElement child)
;    (cancel-and-remove-deref-element parent child)
;    (let [parent (as-dom-node parent)
;          child (as-dom-node child)]
;      (.removeChild parent child))))
;
(defn- append-deref-child [parent child-ref]
  (if-let [[add-watch* remove-watch*] (r/get-add-remove-watch* child-ref)]
    (let [cur-elem (atom nil)
          cancellation-token (atom false)
          f
          (fn on-child-ref-invalidated
            ([key child-ref _ _]
             (on-child-ref-invalidated key child-ref))
            ([cur-elem child-ref]
             (remove-watch* child-ref cur-elem)
             (request-animation-frame
               (fn [x]
                 (when (and                                 ;;(.-parentNode parent)
                         (not @cancellation-token)
                         )
                   (add-watch* child-ref cur-elem on-child-ref-invalidated)
                   (let [new-elem (as-element-spec @child-ref)
                         cur @cur-elem]
                     (when (or (not cur)
                             (not= (get-virtual-dom cur) (get-virtual-dom new-elem)))
                       (reset! cur-elem
                         (transition-element parent
                           ;new-elem
                           (append-transition new-elem :show
                             (fn [elem _]
                               (when @cancellation-token
                                 (-remove elem))))
                           cur)))))))))]
      (reset! cur-elem (transition-element parent [:span] nil))
      (f cur-elem child-ref)
      (ReactiveElement. child-ref cur-elem cancellation-token))
    (transition-element parent @child-ref nil)))

(deftype ReactiveElement [spec-ref cur-elem cancellation-token]
  IRemove
  (-remove [_]
    (reset! cancellation-token true)
    (-remove @cur-elem))

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<ReactiveElement: ")
    (pr-writer cur-elem writer opts)
    (-write writer " ")
    (pr-writer spec-ref writer opts)
    (-write writer " ")
    (pr-writer cancellation-token writer opts)
    (-write writer ">")))

(defn- append-child! [parent child]
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
          (.createTextNode js/document virtual-dom)
          (let [node (create-dom-node (first virtual-dom))
                attrs? (second virtual-dom)
                attrs (when (map? attrs?) attrs?)
                children (if attrs (nnext virtual-dom) (next virtual-dom))]
            (doseq [[k v] attrs]
              (bind-attr! node k v))
            (when children
              (append-children! node children))
            node))]
    (set-element-spec! node elem-spec)
    node))
