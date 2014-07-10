(ns freactive.core
  (:refer-clojure
   :exclude [atom agent ref swap! reset! compare-and-set!])
  (:import [clojure.lang.ReactiveAtom])
  (:require
   [clojure.set]
   [clojure.data]))

;; Copying clojure.core atom stuff here so that we can use my ReactiveAtom class.

(defn atom
  "Creates and returns an Atom with an initial value of x and zero or
more options (in any order):

:meta metadata-map

:validator validate-fn

If metadata-map is supplied, it will become the metadata on the
atom. validate-fn must be nil or a side-effect-free fn of one
argument, which will be passed the intended new state on any state
change. If the new state is unacceptable, the validate-fn should
return false or throw an exception."
  {:added "1.0"
   :static true}
  ([x] (new clojure.lang.ReactiveAtom x))
  ([x & options] (#'clojure.core/setup-reference (atom x) options)))

(defn swap!
  "Atomically swaps the value of atom to be:
(apply f current-value-of-atom args). Note that f may be called
multiple times, and thus should be free of side effects. Returns
the value that was swapped in."
  {:added "1.0"
   :static true}
  ([^clojure.lang.ReactiveAtom atom f] (.swap atom f))
  ([^clojure.lang.ReactiveAtom atom f x] (.swap atom f x))
  ([^clojure.lang.ReactiveAtom atom f x y] (.swap atom f x y))
  ([^clojure.lang.ReactiveAtom atom f x y & args] (.swap atom f x y args)))

(defn compare-and-set!
  "Atomically sets the value of atom to newval if and only if the
current value of the atom is identical to oldval. Returns true if
set happened, else false"
  {:added "1.0"
   :static true}
  [^clojure.lang.ReactiveAtom atom oldval newval] (.compareAndSet atom oldval newval))

(defn reset!
  "Sets the value of atom to newval without regard for the
current value. Returns newval."
  {:added "1.0"
   :static true}
  [^clojure.lang.ReactiveAtom atom newval] (.reset atom newval))

(def ^:dynamic *deps* nil)
(def ^:dynamic *register-dep* (constantly nil))

;; (defrecord Reactive [dirty value f deps sully-fn]
;;   clojure.lang.IDeref
;;   (deref [this]
;;     (*register-dep* this)
;;     (if-not @dirty
;;       @value
;;       (let [simple (:simple (meta f))]
;;         (if (and simple @deps)
;;           (binding [*register-dep* (constantly nil)]
;;             (clojure.core/reset! value (f))
;;             (clojure.core/reset! dirty false)
;;             @value)
;;           (binding [*deps* #{}
;;                     *register-dep* (fn [x] (set! *deps* (conj *deps* x)))]
;;             (clojure.core/reset! value (f))
;;             (clojure.core/reset! dirty false)
;;             (let [removed (clojure.set/difference @deps *deps*)
;;                   added (clojure.set/difference *deps* @deps)]
;;               (doseq [r removed]
;;                 (remove-watch r sully-fn))
;;               (doseq [a added]
;;                 (add-watch a sully-fn sully-fn))
;;               (clojure.core/reset! deps *deps*))
;;             @value))))))

(defrecord ReactiveState [dirty value f deps sully-fn])

(defprotocol IReactive
  (recompute! [this])
  (rebind! [this f]))

(defrecord Reactive [data]
  IReactive
  (recompute! [this] (swap! data assoc :dirty true))
  (rebind! [this f] (swap! data merge {:dirty true :f f :deps nil}))
  clojure.lang.IDeref
  (deref [this]
    (*register-dep* this)
    (let [^ReactiveState {:keys [dirty value]} @data]
      (if-not dirty
        value
        (:value
         (clojure.core/swap!
          data
          (fn recompute-fn [^ReactiveState {:keys [dirty value f deps sully-fn] :as state}]
            (if-not dirty
              state
              (let [simple (:simple (meta f))]
                (if (and simple deps)
                  (binding [*register-dep* (constantly nil)]
                    (merge state {:value (f) :dirty false}))
                  (binding [*deps* #{}
                            *register-dep* (fn [x] (set! *deps* (conj *deps* x)))]
                    (let [new-value (f)]
                      (let [removed (clojure.set/difference deps *deps*)
                            added (clojure.set/difference *deps* deps)]
                        (doseq [r removed]
                          (remove-watch r sully-fn))
                        (doseq [a added]
                          (add-watch a sully-fn sully-fn))
                        (merge state {:value new-value :dirty false :deps *deps*}))))))))))))))

(defmethod print-method Reactive [o ^java.io.Writer w]
  (#'clojure.core/print-sequential (format "#<%s@%x%s: "
                            (.getSimpleName (class o))
                            (System/identityHashCode o)
                            "")
                    #'clojure.core/pr-on, "", ">", (list @o), w))

;; (defn reactive [f]
;;   (let [dirty (clojure.core/atom true)]
;;     (Reactive. dirty (clojure.core/atom nil) f (clojure.core/atom nil) (fn [& _] (clojure.core/reset! dirty true)))))

(defn reactive [f]
  (let [data (clojure.core/atom nil)]
    (clojure.core/reset!
     data
     (ReactiveState. true nil f nil
                     (fn sully-fn [& _]
                       (clojure.core/swap!
                        data
                        (fn do-sully [^ReactiveState state] (assoc state :dirty true))))))
    (Reactive. data))) 

(defn simple [f] (with-meta f (merge (meta f) {:simple true})))

(defn test1 []
  (let [prev (apply hash-set (repeatedly 3 #(rand-int 7)))
        cur (apply hash-set (repeatedly 3 #(rand-int 7)))]
    (clojure.data/diff prev cur)))

(defn test2 []
  (let [prev (apply hash-set (repeatedly 3 #(rand-int 7)))
        cur (apply hash-set (repeatedly 3 #(rand-int 7)))]
    (clojure.set/difference prev cur)
    (clojure.set/difference cur prev)))


(defn test3 []
  (let [a (atom 0)
        b (atom 0)
        c (reactive (fn [] (+ @a @b)))]
    (time
     (dotimes [i 100000]
       (swap! a inc)
       (swap! b inc)
       @c))))

(test3)
