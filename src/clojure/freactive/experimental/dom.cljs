(ns freactive.experimental.dom
  (:require [freactive.core :as r])
  (:require-macros [freactive.macros :refer [rx]]))

(defprotocol IElementSpec
  (-get-virtual-dom [this]))

(defprotocol IElement
  (-get-dom-node [this])
  (-get-element-spec [this]))

(defprotocol IHasElement
  (-get-element [this]))

(defprotocol IRemove
  (-remove [this]))

(deftype Element [spec node]
  IElement
  (-get-dom-node [_] node)
  (-get-element-spec [_] spec)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<Element: ")
    (pr-writer node writer opts)
    (-write writer " ")
    (pr-writer spec writer opts)
    (-write writer ">"))

  IRemove
  (-remove [_] (.removeChild (.-parentNode node) node)))

(defrecord ElementSpec [spec]
  IElementSpec
  (-get-virtual-dom [_] spec))

(defn get-element-spec [element-or-spec]
  (cond
    (satisfies? IElementSpec element-or-spec)
    element-or-spec

    (satisfies? IElement element-or-spec)
    (-get-element-spec element-or-spec)

    :default
    (ElementSpec. element-or-spec)))

(defn get-virtual-dom [element-or-spec]
  (-get-virtual-dom (get-element-spec element-or-spec)))

(defn as-element-spec [spec]
  (if (satisfies? IElementSpec spec)
    spec
    (ElementSpec. spec)))

(defn with-transitions [elem-spec transitions]
  (if (satisfies? IDeref elem-spec)
    (rx (with-transitions @elem-spec transitions))
    (vary-meta (as-element-spec elem-spec) update-in [::transitions] merge transitions)))

(defn get-transition [elem-spec transition-name]
  (get-in (meta (get-element-spec elem-spec)) [::transitions transition-name]))

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

(defn request-animation-frame [f]
  (.requestAnimationFrame js/window f))

;; ## Attributes, Styles & Events

(defn- set-style-prop! [elem prop-name prop-value]
  (let [prop-name (name prop-name)]
    (aset (.-style elem) prop-name (str prop-value))))

(defn- set-attr! [elem attr-name attr-value]
  (let [attr-name (name attr-name)]
    (.setAttribute elem attr-name attr-value)))

(defn- on-value-ref-invalidated* [set-fn]
  (fn on-value-ref-invalidated [[element attr-name :as key] ref]
    (r/remove-invalidation-watch ref key)
    (request-animation-frame
      (fn [_]
        (when (.-parentNode element)
          (r/add-invalidation-watch ref key on-value-ref-invalidated)
          (set-fn element attr-name @ref))))))

(defn bind-style-prop! [element attr-name attr-value]
  (if (satisfies? cljs.core/IDeref attr-value)
    ((on-value-ref-invalidated* set-style-prop!) attr-value [element attr-name])
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
      (listen! element attr-name (.substring attr-value 3))

      :default
      (if (satisfies? cljs.core/IDeref attr-value)
        ((on-value-ref-invalidated* set-attr!) attr-value [element attr-name])
        (set-attr! element attr-name attr-value)))))

;; From hiccup.compiler:
(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
     re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn- create-dom-node [kw]
  (let [[_ tag id class] (re-matches re-tag (name kw))
        node (.createElement js/document tag)]
    (when id (set! (.-id node) id))
    (when class (set! (.-className node) class))
    node))

;; DOM manipulation

(declare build-element)

(defn get-dom-node [elem]
  (-get-dom-node elem))

(defn- replace-child [parent new-elem cur-elem]
  (let [cur-dom-node (get-dom-node cur-elem)
        new-virtual-dom (get-virtual-dom new-elem)]
    (if (and
          (string? new-virtual-dom)
          (= (.-nodeType cur-dom-node) 3))
      (do
        (set! (.-textContent cur-dom-node) new-virtual-dom)
        (set! (.-spec cur-elem) (get-element-spec new-elem))
        cur-elem)
      (let [new-elem (build-element new-elem)]
        (.replaceChild
          (get-dom-node parent)
          (get-dom-node new-elem)
          cur-dom-node)
        new-elem))))

(defn- append-child [parent new-elem]
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
(defn- on-child-ref-invalidated* [parent [add-watch* remove-watch*] cancellation-token]
  (fn on-child-ref-invalidated
    ([key child-ref _ _]
     (on-child-ref-invalidated key child-ref))
    ([cur-elem child-ref]
     (remove-watch* child-ref cur-elem)
     (request-animation-frame
       (fn [x]
         (when-not @cancellation-token
           (add-watch* child-ref cur-elem on-child-ref-invalidated)
           (let [new-elem (as-element-spec @child-ref)
                 cur @cur-elem]
             (when (or (not cur) (not=
                                   (get-virtual-dom cur)
                                   (get-virtual-dom new-elem)))
               (reset! cur-elem
                 (transition-element parent
                   ;new-elem
                   (append-transition new-elem :show
                     (fn [elem _]
                       (when @cancellation-token
                         (-remove elem))))
                   cur))))))

       ))))

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

(defn- append-deref-child
  [parent child]
  (if-let [watch-fns (r/get-add-remove-watch* child)]
    (let [cur-elem (atom nil)
          cancellation-token (atom false)]
      ((on-child-ref-invalidated* parent watch-fns cancellation-token)
             cur-elem child)
      (ReactiveElement. child cur-elem cancellation-token))
    (transition-element parent @child nil)))
;
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
  (if (satisfies? IElement elem-spec)
    elem-spec
    (let [elem-spec (as-element-spec elem-spec)
          virtual-dom (get-virtual-dom elem-spec)]
      (if (string? virtual-dom)
        (Element. elem-spec (.createTextNode js/document virtual-dom))
        (let [node (create-dom-node (first virtual-dom))
              elem (Element. elem-spec node)
              attrs? (second virtual-dom)
              attrs (when (map? attrs?) attrs?)
              children (if attrs (nnext virtual-dom) (next virtual-dom))]
          (doseq [[k v] attrs]
            (bind-attr! node k v))
          (when children
            (append-children! elem children))
          elem)))))

(defn get-body []
  (aget (.getElementsByTagName js/document "body") 0))

(defn- resolve-existing-element [elem-or-node]
  (cond
    (satisfies? IHasElement elem-or-node)
    (-get-element elem-or-node)

    (satisfies? IElement elem-or-node)
    elem-or-node

    ;(string? elem-or-node)
    ;(when-let [node (.getElementById js/document elem-or-node)]
    ;  (Element. nil node))

    :default
    (Element. nil elem-or-node)))

(defn- resolve-child-element [elem-or-node]
  (cond
    (satisfies? IHasElement elem-or-node)
    (-get-element elem-or-node)

    :default
    elem-or-node))

(defn mount! [element child]
  (let [element (resolve-existing-element element)]
    ;;(clear-children! element)
    (append-child!
      element
      (resolve-child-element child))))
