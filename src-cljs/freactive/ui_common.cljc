(ns freactive.ui-common
  (:require
   [freactive.core :as r]))

(defprotocol IVirtualElement
  (-velem-insert [this native-parent native-before])
  (-velem-remove [this])
  (-velem-head [this])
  (-velem-tail [this])
  (-velem-replace [this new-velem])
  (-velem-native-element [this])
  (-velem-simple-element [this]))

(defn velem-native-element [this]
  (-velem-native-element this))

(defn velem-simple-element [this]
  (-velem-simple-element this))

(defn velem-head [this]
  (-velem-head this))

(defn velem-tail [this]
  (-velem-tail this))

(defn velem-remove [this]
  (-velem-remove this))

(defn velem-insert [this native-parent native-before]
  (-velem-insert this native-parent native-before))

(defn velem-replace [this new-velem]
  (-velem-replace this new-velem))

(deftype ReactiveElement [id the-ref binding-info
                          ^:mutable parent 
                          ^:mutable cur-velem ^:mutable dirty
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

  (show-new-elem [this new-velem native-before]
    (if cur-elem
      (set! cur-velem (-velem-replace cur-velem new-velem))
      (-velem-insert new-elem parent before))
    (set! updating false)
    (when dirty 
      (queue-animation #(.animate this))))

  (animate [this]
    (when-not disposed
      (let [new-velem (get-new-elem)]
        (when-not (= new-velem cur-velem)
          (-velem-replace cur-velem
           (fn []
             (if disposed
               (set! updating false)
               (.show-new-elem this (if dirty
                                      (get-new-elem)
                                      new-velem) nil))))))))
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
  
  IVirtualElement
  (-velem-head [this] (velem-head cur-elem))
  (-velem-tail [this] (velem-tail cur-elem))
  (-velem-native-element [this] (velem-native-element cur-elem))
  (-velem-simple-element [this] (velem-simple-element cur-elem))
  (-velem-insert [this native-parent native-before]
    (set! (.-parent this) native-parent)
    (.show-new-elem this (.get-new-elem this) native-before)
    this)
  (-velem-remove [this]
    (set! (.-disposed this) true)
    (velem-remove cur-elem))
  (-velem-replace [this new-velem]
    (if (= this new-velem)
      this
      (do
        (.dispose this)
        (velem-replace cur-elem new-velem)))))

(defn reactive-element [the-ref]
  (ReativeElement. (r/new-reactive-id) the-ref (r/get-binding-fns the-ref)
                   nil nil false false false))

(deftype ReactiveElementCollection [projection elements ^:mutable parent ^:mutable before]
  Object
  (clear [this]
    (doseq [elem elements]
      (velem-remove elem)))

  r/IReactiveProjectionTarget
  (-proj-move-elem [this idx before-idx]
    (.insert this (aget (.splice elements idx 1) 0) before-idx))
  (-proj-remove-elem [this idx]
    (velem-remove (aget (.splice elements idx 1) 0)))
  (-proj-insert-elem [this elem before-idx]
    (let [before-elem (if before-idx (aget elements before-idx) before)]
      (.splice elements (or before-idx (alength elements)) 0 to-move)
      ;; TODO handle append case
      (velem-insert to-move native-parent (velem-head before-elem))))
  (-proj-clear [this] (.clear this))

  IVirtualElement
  (-velem-native-element [this])
  (-velem-simple-element [this])
  (-velem-head [this]
    (when (> (.-length elements) 0)
      (velem-head (aget elements 0))))
  (-velem-tail [this]
    (when (> (.-length elements) 0)
      (velem-tail (aget elements (dec (.-length elements))))))
  (-velem-insert [this native-parent native-before]
    (set! parent native-parent)
    (set! before native-before)
    (r/project-elements projection this))
  (-velem-remove [this]
    (set! (.-disposed this) true)
    (when-let [dispose (.-dispose projection)]
      (dispose projection))
    (.clear this)))

(defn reactive-element-collection [projection]
  (ReactiveElementCollection. projection #js [] nil nil))
