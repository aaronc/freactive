(ns freactive.cljs-perf)

(defn bench [f]
  (time
    (dotimes [i 30000]
      (f))))

(defprotocol ITest1
  (-do-something [this]))

(extend-type string
  ITest1
  (-do-something [this]))

(defmulti test1 type)

(defn test1-string [x])

(defn do-test1 [x]
  (if (string? x)
    (test1-string x)
    (test1 x)))

(bench #(satisfies? ITest1 "abc"))

(bench #(-do-something "abc"))

(bench #(do-test1 "abc"))

(def js0 #js {})

(def clj0 {})

(bench #(set! (.-x js0) 0))

(bench #(assoc clj0 :x 0))

(def element-spec-lookup #js {})

(defprotocol IElementSpec
  (-get-virtual-dom [x]))

(defrecord ElementSpec [spec]
  IElementSpec
  (-get-virtual-dom [x] spec))

(extend-type string
  IElementSpec
  (-get-virtual-dom [x] x))

(extend-type PersistentVector
  IElementSpec
  (-get-virtual-dom [x] x))

(defn- dom-node? [x]
  (> (.-nodeType x) 0))

(defn- get-virtual-dom [x]
  (cond
    (dom-node? x)
    (get-virtual-dom (aget element-spec-lookup x))
    (string? x) x
    (vector? x) x
    :default (-get-virtual-dom x)))

(defn- get-element-spec [x]
  (if (dom-node? x)
    (aget element-spec-lookup x)
    x))

(defn- get-transition [x transition-name]
  (let [spec (get-element-spec x)]
    (when-not (string? spec)
      (get (meta spec) transition-name))))

(def es0 (ElementSpec. "abc"))

(bench #(get-virtual-dom "abc"))

(bench #(-get-virtual-dom []))

(bench #(get-virtual-dom []))

(bench #(get-virtual-dom es0))

(bench #(get-transition [] :on-show))

(bench #(get-transition "abc" :on-show))

(defprotocol IHasDOMNode
  (-get-dom-node [x]))

(defn get-dom-node [x]
  (if (dom-node? x)
    x
    (-get-dom-node x)))

;(defprotocol IDispose
;  (-dispose! [x]))

(defprotocol IRemove
  (-remove! [x]))

(defn- remove-dom-node [x])

(defn remove! [x]
  (if (dom-node? x)
    (remove-dom-node x)
    (-remove! x)))

