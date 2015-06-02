(ns freactive.ui-common
  (:require
   [freactive.core :as r]))

(defprotocol IVirtualElement
  (-velem-insert [this native-parent native-before])
  (-velem-remove [this])
  (-velem-parent [this])
  (-velem-head [this])
  (-velem-tail [this])
  (-velem-next-sibling [this])
  (-velem-replace [this cur-velem])
  (-velem-native-element [this])
  (-velem-simple-element [this])
  (-velem-lifecycle-callback [this cb-name]))

(defn velem-native-element [this]
  (-velem-native-element this))

(defn velem-simple-element [this]
  (-velem-simple-element this))

(defn velem-parent [this]
  (-velem-parent this))

(defn velem-head [this]
  (-velem-head this))

(defn velem-tail [this]
  (-velem-tail this))

(defn velem-next-sibling [this]
  (-velem-next-sibling this))

(defn velem-remove [this]
  (-velem-remove this))

(defn velem-insert [this native-parent native-before]
  (-velem-insert this native-parent native-before))

(defn velem-replace [this cur-velem]
  (-velem-replace this cur-velem))

(defn velem-lifecycle-callback [this cb-name]
  (-velem-lifecycle-callback this cb-name))

(deftype ReactiveElement [id the-ref binding-info velem-fn enqueue-fn 
                          ^:mutable parent 
                          ^:mutable cur-velem ^:mutable dirty
                          ^:mutable updating ^:mutable disposed]
  Object
  (onInitialized [this]
    (when-let [binding-initialized (get (meta the-ref) :binding/on-initialized)]
      (binding-initialized the-ref)))
  (dispose [this]
    ((.-remove-watch binding-info) the-ref id)
    (when cur-velem (r/dispose cur-velem))
    (when-let [clean (.-clean binding-info)] (clean the-ref))
    (set! (.-disposed this) true)
    (when-let [binding-disposed (get (meta the-ref) :binding/on-disposed)]
      (binding-disposed the-ref)))
  (get-new-elem [this]
    (set! dirty false)
    ((.-add-watch binding-info) the-ref id #(.invalidate this))
    (velem-fn (or ((.-raw-deref binding-info) the-ref) "")))
  (done-updating [this]
    (set! updating false)
    (when dirty 
      (enqueue-fn #(.animate this))))
  (show-new-elem [this new-velem native-before]
    (set! cur-velem
          (if cur-velem
            (velem-replace new-velem cur-velem)
            (velem-insert new-velem parent native-before)))
    (.done-updating this))
  (animate [this]
    (when-not disposed
      (let [new-velem (.get-new-elem this)]
        (when-not (= new-velem cur-velem)
          (if-let [on-detaching (velem-lifecycle-callback cur-velem :node/on-detaching)]
            (on-detaching
             cur-velem
             (fn []
               (if disposed
                 (set! updating false)
                 (.show-new-elem this (if dirty
                                        (.get-new-elem this)
                                        new-velem) nil))))
            (.show-new-elem this new-velem nil))))))
  (invalidate [this]
    ((.-remove-watch binding-info) the-ref id)
    (when-not disposed
      (set! dirty true)
      (when-not updating
        (set! updating true)
        (enqueue-fn #(.animate this)))))

  IEquiv
  (-equiv [this other]
    (and
     (instance? ReactiveElement other)
     (= the-ref (.-the-ref other))))
  
  IVirtualElement
  (-velem-parent [this] parent)
  (-velem-head [this] (velem-head cur-velem))
  (-velem-tail [this] (velem-tail cur-velem))
  (-velem-next-sibling [this]
    (velem-next-sibling cur-velem))
  (-velem-native-element [this] (velem-native-element cur-velem))
  (-velem-simple-element [this] (velem-simple-element cur-velem))
  (-velem-insert [this native-parent native-before]
    (set! (.-parent this) native-parent)
    (.onInitialized this)
    (.show-new-elem this (.get-new-elem this) native-before)
    this)
  (-velem-remove [this]
    (.dispose this)
    (velem-remove cur-velem))
  (-velem-replace [this elem-to-replace]
    (.onInitialized this)
    (set! cur-velem (velem-replace (.get-new-elem this) elem-to-replace))
    this)
  (-velem-lifecycle-callback [this cb-name]
    (when cur-velem
      (velem-lifecycle-callback cur-velem cb-name))))

(defn reactive-element [the-ref velem-fn enqueue-fn]
  (ReactiveElement.
   (r/new-reactive-id)
   the-ref
   (r/get-binding-fns the-ref)
   velem-fn
   enqueue-fn
   nil nil false false false))

(deftype ReactiveElementCollection [projection elements velem-fn enqueue-fn ^:mutable parent ^:mutable before]
  Object
  (dispose [this]
    (set! (.-disposed this) true)
    (r/dispose projection)
    (doseq [elem elements]
      (r/dispose elem)))
  (clear [this]
    (doseq [elem elements]
      (velem-remove elem)))

  r/IReactiveProjectionTarget
  (-proj-move-elem [this idx before-idx]
    (r/-proj-insert-elem this (aget (.splice elements idx 1) 0) before-idx))
  (-proj-remove-elem [this idx]
    (velem-remove (aget (.splice elements idx 1) 0)))
  (-proj-insert-elem [this elem before-idx]
    (let [elem (velem-fn elem)
          len (.-length elements)
          before-elem
          (cond
            (and before-idx (< before-idx len))
            (velem-head (aget elements before-idx))

            (> len 0)
            (velem-next-sibling this)

            :default
            before)]
      (.splice elements (or before-idx (alength elements)) 0 elem)
      (velem-insert elem parent before-elem)))
  (-proj-clear [this] (.clear this))

  IVirtualElement
  (-velem-parent [this] parent)
  (-velem-native-element [this])
  (-velem-simple-element [this])
  (-velem-head [this]
    (when (> (.-length elements) 0)
      (velem-head (aget elements 0))))
  (-velem-tail [this]
    (when (> (.-length elements) 0)
      (velem-tail (aget elements (dec (.-length elements))))))
  (-velem-next-sibling [this]
    (when-let [tail (velem-tail this)]
      (.-nextSibling tail)))
  (-velem-insert [this native-parent native-before]
    (set! parent native-parent)
    (set! before native-before)
    (r/project-elements projection this enqueue-fn)
    this)
  (-velem-remove [this]
    (set! (.-disposed this) true)
    (when-let [dispose (.-dispose projection)]
      (dispose projection))
    (.clear this))
  (-velem-replace [this cur-velem]
    (let [native-parent (velem-parent cur-velem)
          next-sib (velem-next-sibling cur-velem)]
      (velem-remove cur-velem)
      (velem-insert this native-parent next-sib)))
  (-velem-lifecycle-callback [this cb-name]))

(defn reactive-element-collection [projection velem-fn enqueue-fn]
  (ReactiveElementCollection. projection #js [] velem-fn enqueue-fn nil nil))

