(ns freactive.ui-common
  (:require
   [freactive.core :as r]))

(defprotocol IVirtualElement
  "Warning: this is currently an internal API subject to change or sudden removal.

A simple element is any element which directly wraps exactly one native element."
  (-velem-insert [this vparent vnext-sibling]
    "Inserts this virtual element into a native element tree. vnext-sibling
is the next sibling virtual element if any.")
  (-velem-replace [this cur-velem]
    "Replaces cur-velem (making sure to dispose it) with this virtual element.")
  (-velem-take [this]
    "Removes the virtual element from the element tree without disposing it.")
(-velem-parent [this]
    "Returns the virtual parent element")
  (-velem-head [this]
    "Returns a simple virtual element (or nil) representing the head of an
element sequence. Same as -velem-simple-element for simple elements.")
  (-velem-next-sibling-of [this child]
    "Returns the next virtual sibling element to this element or nil when this
is the last child.")
  (-velem-native-element [this]
    "Returns the native element wrapped by this simple element or nil for
sequence elements.")
  (-velem-simple-element [this]
    "Returns the simplest virtual element (one directly wrapping a native
element) wrapped by this virtual element (or itself), or nil for sequence
elements.")
  (-velem-lifecycle-callback [this cb-name]
    "Gets a lifecycle callback fn (if any) for the keyword cb-name."))

(defn velem-native-element [this]
  (-velem-native-element this))

(defn velem-simple-element [this]
  (-velem-simple-element this))

(defn velem-parent [this]
  (-velem-parent this))

(defn velem-head [this]
  (-velem-head this))

(defn velem-next-sibling-of [this child]
  (-velem-next-sibling-of this child))

(defn next-native-sibling [vnext]
  (when vnext
    (if-let [head (velem-head vnext)]
      (velem-native-element head)
      (let [parent (velem-parent vnext)]
        (loop [vnext vnext]
          (let [vnnext (velem-next-sibling-of parent vnext)]
            (if vnnext
              (if-let [head (velem-head vnnext)]
                (velem-native-element head)
                (recur (velem-next-sibling-of parent vnnext)))
              (when-not (velem-simple-element parent)
                (let [pparent (velem-parent parent)]
                  (next-native-sibling (velem-next-sibling-of pparent parent)))))))))))

(defn native-parent [parent]
  (when parent
    (or (velem-native-element parent)
        (native-parent (velem-parent parent)))))

(defn velem-take [this]
  (-velem-take this))

(defn velem-remove [this]
  (velem-take this)
  (r/dispose this))

(defn velem-insert [this vparent vnext-sibling]
  (-velem-insert this vparent vnext-sibling))

(defn velem-replace [this cur-velem]
  (-velem-replace this cur-velem))

(defn velem-lifecycle-callback [this cb-name]
  (-velem-lifecycle-callback this cb-name))

(deftype ReactiveElement [id the-ref binding-info velem-fn enqueue-fn 
                          ^:mutable parent ^:mutable vnext
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
  (show-new-elem [this new-velem]
    (set! cur-velem
          (if cur-velem
            (velem-replace new-velem cur-velem)
            (velem-insert new-velem parent vnext)))
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
                                        new-velem)))))
            (.show-new-elem this new-velem))))))
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
  (-velem-next-sibling-of [this child]
    (velem-next-sibling-of cur-velem child))
  (-velem-native-element [this] (velem-native-element cur-velem))
  (-velem-simple-element [this] (velem-simple-element cur-velem))
  (-velem-insert [this vparent vnext-sibling]
    (set! (.-parent this) vparent)
    (set! (.-vnext this) vnext-sibling)
    (.onInitialized this)
    (.show-new-elem this (.get-new-elem this))
    this)
  (-velem-take [this]
    (velem-take cur-velem))
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
   nil nil nil false false false))

;; (defprotocol IVirtualElementContainer
;;   (-velem-container-insert [this child before])
;;   (-velem-container-remove [this child]))

(defn array-next-sibling-of [elements child]
  (let [idx (.indexOf elements child)]
    (when (and (>= idx 0) (< (dec (.-length elements))))
      (aget elements (inc idx)))))

(deftype ElementSequence [elements velem-fn ^:mutable parent]
  Object
  (peek [this idx]
    (aget elements idx))
  (take [this idx]
    (let [elem (aget (.splice elements idx 1) 0)]
      (velem-take elem)
      elem))
  (count [this] (.-length elements))
  (move [this idx before-idx]
    (.insert this (aget (.splice elements idx 1) 0) before-idx))
  (insert [this elem before-idx]
    (let [elem (velem-fn elem)
          len (.-length elements)
          before-elem
          (if (and before-idx (< before-idx len))
            (aget elements before-idx)
            (velem-next-sibling-of parent this))]
      (.splice elements (or before-idx (alength elements)) 0 elem)
      (velem-insert elem parent before-elem))))

(deftype ReactiveElementSequence [projection elements velem-fn enqueue-fn ^:mutable src ^:mutable parent]
  Object
  (dispose [this]
    (set! (.-disposed this) true)
    (r/dispose projection)
    (doseq [elem elements]
      (r/dispose elem)))
  (clear [this]
    (doseq [elem elements]
      (velem-remove elem)))

  r/IProjectionTarget
  (-target-peek [this idx]
    (aget elements idx))
  (-target-take [this idx]
    (let [elem (aget (.splice elements idx 1) 0)]
      (velem-take elem)
      elem))
  (-target-count [this] (.-length elements))
  (-target-move [this idx before-idx]
    (r/-target-insert this (aget (.splice elements idx 1) 0) before-idx))
  (-target-insert [this elem before-idx]
    (let [elem (velem-fn elem)
          len (.-length elements)
          before-elem
          (if (and before-idx (< before-idx len))
            (aget elements before-idx)
            (velem-next-sibling-of parent this))]
      (.splice elements (or before-idx (alength elements)) 0 elem)
      (velem-insert elem parent before-elem)))
  

  IVirtualElement
  (-velem-parent [this] parent)
  (-velem-native-element [this])
  (-velem-simple-element [this])
  (-velem-head [this]
    (when (> (.-length elements) 0)
      (velem-head (aget elements 0))))
  (-velem-next-sibling-of [this child]
    (array-next-sibling-of elements child))
  (-velem-insert [this vparent vnext-sibling]
    (set! parent vparent)
    (set! src (r/project projection this enqueue-fn velem-fn))
    this)
  (-velem-take [this]
    (doseq [elem elements]
      (velem-take elem))) 
  (-velem-replace [this cur-velem]
    (let [vparent (velem-parent cur-velem)
          next-sib (velem-next-sibling-of vparent cur-velem)]
      (velem-remove cur-velem)
      (velem-insert this vparent next-sib)))
  (-velem-lifecycle-callback [this cb-name]))

(defn reactive-element-sequence [projection velem-fn enqueue-fn]
  (ReactiveElementSequence. projection #js [] velem-fn enqueue-fn nil nil))
