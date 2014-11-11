(ns freactive.experimental.dom
  (:require
    [freactive.core :as r]))

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

(defn- bind-style-prop! [element attr-name attr-value]
  (if (satisfies? cljs.core/IDeref attr-value)
    ((on-value-ref-invalidated* set-style-prop!) attr-value [element attr-name])
    (set-style-prop! element attr-name attr-value)))

(defn- listen! [element evt-name handler]
  (.addEventListener element evt-name handler))

(defn- bind-attr! [element attr-name attr-value]
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

(defn- create-elem [kw]
  (.createElement js/document (name kw)))

(declare build)

(defn- convert-child [child]
  (cond
    (string? child)
    (.createTextNode js/document child)

    :default
    child))

(defn- append-child!* [parent child]
  (let [child (convert-child child)]
    (.appendChild parent child)
    child))

(defn- replace-child!* [parent new-child old-child]
  (let [new-child (convert-child new-child)]
    (.replaceChild parent new-child old-child)
    new-child))

(defn on-child-ref-invalidated* [parent]
  (fn on-child-ref-invalidated
    [cur-elem child-ref]
    (r/remove-invalidation-watch child-ref cur-elem)
    (request-animation-frame
      (fn [_]
        (r/add-invalidation-watch child-ref cur-elem on-child-ref-invalidated)
        (let [new-elem @child-ref
              cur @cur-elem]
          (reset! cur-elem
            (if cur
              (replace-child!* parent new-elem cur)
              (append-child!* parent new-elem))))))))

(defn- append-child! [parent child]
  (if
    (satisfies? cljs.core/IDeref child)
    ((on-child-ref-invalidated* parent) (atom nil) child)

    (append-child!* parent child)))

(defn- append-children! [elem children]
  (doseq [ch children]
    (if (sequential? ch)
      (if (keyword? (first ch))
        (append-child! elem (build ch))
        (append-children! elem ch))
      (append-child! elem ch))))

(defn build [elem-def]
  (let [elem (create-elem (first elem-def))
        attrs? (second elem-def)
        attrs (when (map? attrs?) attrs?)
        children (if attrs (nnext elem-def) (next elem-def))]
    (doseq [[k v] attrs]
      (bind-attr! elem k v))
    (when children
      (append-children! elem children))
    elem))

(defn mount! [dom-element child]
  (append-child! dom-element child))

(defn- get-body []
  (aget (.getElementsByTagName js/document "body") 0))