(ns freactive.experimental.dom
  (:require-macros
    [freactive.core :refer [rx]])
  (:require
    [freactive.core :as r]))

(defprotocol IElement
  (-get-element-spec [this])
  (-get-dom-node [this])
  (-set-dom-node [this nide])
  (-get-transition [this transition-name])
  (-set-transitions [this transitions]))

(deftype Element [elem-spec dom-node transitions]
  IElement
  (-get-element-spec [_] elem-spec)
  (-get-dom-node [_] dom-node)
  (-set-dom-node [this node]
    (set! (.-dom-node this) node))
  (-get-transition [_ transition-name]
    (get transitions transition-name))
  (-set-transitions [this transitions]
    (set! (.-transitions this) transitions)))

(defn- as-element [elem-spec]
  (if (satisfies? IElement elem-spec)
    elem-spec
    (Element. elem-spec nil nil)))

(deftype DerefTransitionsWrapper [ref transitions])

(defn with-transitions [elem & {:as transitions}]
  (cond
    (or (sequential? elem) (string? elem))
    (Element. elem nil transitions)

    (satisfies? IDeref elem)
    (DerefTransitionsWrapper. elem transitions)

    (satisfies? IElement elem)
    (do
      (-set-transitions elem transitions)
      elem)

    :default
    (Element. elem nil transitions)))

(defn request-animation-frame [f]
  (.requestAnimationFrame js/window f))

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
        ))))

(defn- create-elem [kw]
  (.createElement js/document (name kw)))

(declare build-node)

(defn- as-dom-node [elem]
  (if (satisfies? IElement elem)
    (-get-dom-node elem)
    elem))

(defn- replace-child [parent new-elem cur-elem]
  (if (and
        cur-elem
        (string? new-elem)
        (= (.-nodeType cur-elem) 3))
    (set! (.-textContent cur-elem) new-elem)
    (let [new-elem (as-element new-elem)
          new-node (build-node (-get-element-spec new-elem))
          cur-node (when cur-elem (-get-dom-node cur-elem))]
      (-set-dom-node new-elem new-node)
      (let [parent (as-dom-node parent)]
        (if cur-node
          (.replaceChild parent new-node cur-node)
          (.appendChild parent new-node)))
      new-elem)))

(defn- do-show-element [parent new-elem cur-elem {:keys [show shown]
                                                  :as transitions}]
  (let [new-elem (replace-child parent new-elem cur-elem)]
    (if-let [show (or show (-get-transition new-elem :show))]
      (show new-elem
        (fn [elem] (when shown (shown elem))))
      (when shown (shown new-elem)))
    new-elem))

(defn- transition-element
  ([parent new-elem]
   (transition-element parent new-elem nil nil nil))
  ([parent new-elem cur-elem {:keys [hide show] :as transitions}]
   (if cur-elem
     (if-let [hide (or hide (-get-transition cur-elem :hide))]
       (hide cur-elem
         (do-show-element parent new-elem cur-elem transitions))
       (do-show-element parent new-elem cur-elem transitions))
     (do-show-element parent new-elem cur-elem transitions))))


(defn- cancel-and-remove-deref-element [parent elem]
  (reset! (.-cancellation-token elem) true)
  (.removeChild (as-dom-node parent) (as-dom-node @(.-cur-elem elem))))

(defn remove-child! [parent child]
  (if (instance? DerefElement child)
    (cancel-and-remove-deref-element parent child)
    (let [parent (as-dom-node parent)
          child (as-dom-node child)]
      (.removeChild parent child))))

(defn on-child-ref-invalidated* [parent [add-watch* remove-watch*]
                                 transitions
                                 cancellation-token]
  (let [transitions
        (assoc transitions
          :shown (fn [new-elem]
                   (when @cancellation-token
                     (remove-element! parent new-elem))))]
    (fn on-child-ref-invalidated
      ([key child-ref _ _]
       (on-child-ref-invalidated key child-ref))
      ([cur-elem child-ref]
       (remove-watch* child-ref cur-elem)
       (request-animation-frame
         (fn [_]
           (when-not @cancellation-token
             (add-watch* child-ref cur-elem on-child-ref-invalidated)
             (let [new-elem @child-ref
                   cur @cur-elem]
               (when (or (not cur) (not= (-get-element-spec cur) new-elem))
                 (reset! cur-elem
                   (transition-element parent new-elem cur transitions)))))))))))

(deftype DerefElement [child-ref cur-elem])

(defn- append-deref-child
  [parent child transitions]
  (if-let [watch-fns
           (cond
             (satisfies? freactive.core/IInvalidates child)
             [r/add-invalidation-watch r/remove-invalidation-watch]

             (satisfies? cljs.core/IWatchable child)
             [add-watch remove-watch])]
    (let [cur-elem (atom nil)
          cancellation-token (atom false)
          f ((on-child-ref-invalidated* parent watch-fns transitions
               cancellation-token) cur-elem child)]
      (DerefElement. child cur-elem cancellation-token))
    (transition-element parent @child nil transitions)))

(defn append-child! [parent child]
  (cond
    (instance? DerefTransitionsWrapper child)
    (append-deref-child parent (.-ref child) (.-transitions child))

    (satisfies? cljs.core/IDeref child)
    (append-deref-child parent child nil)

    :default
    (transition-element parent child)))

(defn- append-children! [elem children]
  (doseq [ch children]
    (if (sequential? ch)
      (if (keyword? (first ch))
        (append-child! elem ch)
        (append-children! elem ch))
      (append-child! elem ch))))

(defn build-node [elem-def]
  (if (string? elem-def)
    (.createTextNode js/document elem-def)
    (let [elem (create-elem (first elem-def))
          attrs? (second elem-def)
          attrs (when (map? attrs?) attrs?)
          children (if attrs (nnext elem-def) (next elem-def))]
      (doseq [[k v] attrs]
        (bind-attr! elem k v))
      (when children
        (append-children! elem children))
      elem)))

(defn- get-body []
  (aget (.getElementsByTagName js/document "body") 0))

(defn mount! [dom-element child]
  (append-child! dom-element child))

;(defn create-raw [elem-def]
;  (let [elem-def
;        (cond
;          (keyword? elem-def)
;          [elem-def]
;
;          :default
;          elem-def)
;        elem (as-element elem-def)
;        node (build-node (-get-element-spec elem))]
;    (-set-dom-node elem node)
;    elem))
