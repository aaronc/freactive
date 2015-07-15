(ns freactive.react
  (:require
   [cljsjs.react]
   [freactive.core :as r]
   [freactive.dom :as dom]))

(declare as-react)

(defprotocol IAsReact
  (-as-react [x]))

(extend-protocol IAsReact
  object
  (-as-react [x] (str x))

  nil
  (-as-react [x] "")

  boolean
  (-as-react [x] (str x))

  number
  (-as-react [x] (str x)))

(defn init-binding [this new-ref]
  (.setState
   this
   #js {:binding
        (r/bind-attr*
         new-ref
         (fn [spec]
           (let [state (.-state this)]
             (when (or (not state) (not (identical? spec (.-spec state))))
               (.setState this #js {:spec spec}))))
         dom/queue-animation)}))

(defn dispose-binding [this]
  (when-let [binding (.-binding (.-state this))]
    (r/dispose binding)))

(def binding-spec
  #js
  {:displayName "FReactiveBinding"
   :componentWillMount
    (fn []
      (this-as
       this
       (init-binding
        this
        (if-let [fvec (.-fvec (.-props this))]
          (r/rx* (fn [] (apply (first fvec) (rest fvec))))
          (.-aref (.-props this))))))
    :componentDidMount
    (fn [])
    :componentWillReceiveProps
   (fn [next-props]
     (this-as
      this
      (or 
       (if-let [fvec (.-fvec next-props)]
         (let [old-fvec (.-fvec (.-props this))]
           (when-not (= fvec old-fvec)
             (dispose-binding this)
             (init-binding this
                           (r/rx* (fn [] (apply (first fvec) (rest fvec)))))))
         (let [old-ref (.-aref (.-props this))
               new-ref (.-aref next-props)]
           (when-not (identical? old-ref new-ref)
             (dispose-binding this)
             (init-binding this new-ref)))))))
    :shouldComponentUpdate
    (fn [next-props next-state]
      (this-as
       this
       (not
        (identical? (.-spec (.-state this))
                    (.-spec next-state)))))
    :componentWillUpdate
    (fn [next-props next-state]
      (this-as
       this))
    :componentDidUpdate
    (fn [prev-props prev-state]
      (this-as
       this))
    :render
    (fn []
      (this-as
       this
       (as-react (.-spec (.-state this)))))
    :componentWillUnmount
    (fn []
      (this-as
       this
       (dispose-binding this)))})

(def binding-class
  (.createClass js/React binding-spec))

(defn resolve-react-class [uri tag] tag)

(defn clj->react-attrs [attrs]
  ;; (let [js-attrs #js {}
  ;;       class (:class attrs)
  ;;       style (:style attrs)
  ;;       attrs (dissoc attrs :class :style)]
  ;;   (when class
  ;;     (set! (.-className attrs) class))
  ;;   (doseq [[k v] attrs]
  ;;     ))
  (clj->js attrs)
  )

(def ^:private element-ns-lookup #js {})

(declare react-element)

(defn- as-react [elem-spec]
  (cond
    (string? elem-spec)
    elem-spec

    (js/React.isValidElement elem-spec)
    elem-spec

    (sequential? elem-spec)
    (let [head (first elem-spec)]
      (cond
        (keyword? head)
        (let [tag-ns (namespace head)
              tag-name (name head)
              tail (rest elem-spec)]
          (if tag-ns
            (if-let [tag-handler (aget element-ns-lookup tag-ns)]
              (cond
                (fn? tag-handler)
                (as-react (tag-handler tag-name tail))

                :default
                (.warn js/console "Invalid ns node handler" tag-handler))
              (.warn js/console "Undefined ns node prefix" tag-ns))
            (react-element nil tag-name tail)))

        (ifn? head)
        (.createElement
         js/React binding-class (clj->js (assoc (meta elem-spec) :fvec elem-spec)) nil)))

    (satisfies? IDeref elem-spec)
    (.createElement
     js/React binding-class (clj->js (assoc (meta elem-spec) :aref elem-spec)) nil)

    :default
    (as-react (-as-react elem-spec))))

(def react-element
  (dom/element*
   (fn [uri tag attrs children]
     (.createElement
      js/React
      (resolve-react-class uri tag)
      (clj->react-attrs attrs)
      children))
   (dom/append-children* as-react)))

(defn render [element container]
  (.render js/React
           (as-react element)
           (if (dom/dom-node? container)
             container
             (dom/create-or-find-root-node container))))
