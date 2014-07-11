(ns freactive.core
  (:refer-clojure
   :exclude [atom agent ref swap! reset! compare-and-set!])
  (:import [clojure.lang ReactiveAtom Reactive])
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

(defrecord ReactiveState [proxy-ref dirty value f deps sully-fn])

;; (definterface IReactive
;;   (forceRecompute [])
;;   (deactivate [])
;;   (rebind [f]))

;; (defn- compute [^ReactiveState {:keys [dirty value f deps sully-fn proxy-ref] :as state}]
;;   (if-not dirty
;;     state
;;     (let [simple (:simple (meta f))]
;;       (if (and simple deps)
;;         (binding [*register-dep* (constantly nil)]
;;           (merge state {:value (f) :dirty false}))
;;         (binding [*deps* #{}
;;                   *register-dep*
;;                   (fn register-dep [x]
;;                     (when (not= x proxy-ref) (set! *deps* (conj *deps* x))))]
;;           (let [new-value (f)]
;;             (let [removed (clojure.set/difference deps *deps*)
;;                   added (clojure.set/difference *deps* deps)]
;;               (doseq [r removed]
;;                 (remove-watch r sully-fn))
;;               (doseq [a added]
;;                 (add-watch a sully-fn sully-fn))
;;               (merge state {:value new-value :dirty false :deps *deps*}))))))))

;; (defn reactive [f & options]
;;   (let [data (clojure.core/atom nil)

;;         {:keys [lazy] :or {lazy true}} (apply hash-map options)

;;         sully-fn (if lazy
;;                    (fn lazy-sully-fn [& _]
;;                      (clojure.core/swap!
;;                       data
;;                       (fn do-sully [^ReactiveState state] (assoc state :dirty true))))

;;                    (fn proactive-sully-fn [& _]
;;                      (clojure.core/swap!
;;                       data
;;                       (fn [^ReactiveState state]
;;                         (compute (assoc state :dirty true))))))

;;         reactive-proxy
;;         (proxy [clojure.lang.ARef] []
;;           (setValidator [vf]
;;             (.deref this)
;;             (.setValidator data (fn validator-wrapper [state]
;;                                   (vf (:value state)))))
;;           (deref []
;;             (*register-dep* this)
;;             (let [^ReactiveState {:keys [dirty value]} @data]
;;               (if-not dirty
;;                 value
;;                 (:value
;;                  (clojure.core/swap!
;;                   data
;;                   compute))))))]
;;    (clojure.core/reset! data (ReactiveState. reactive-proxy true nil f nil sully-fn))
;;     (.addWatch data :proxy-forward
;;                (fn notify-forwarder [k r old-state new-state]
;;                  (let [old-value (:value old-state)
;;                        new-value (:value new-state)
;;                        sullied (and (:dirty new-state) (not (:dirty old-state)))]
;;                    (when (or (not= old-value new-value) sullied)
;;                      (.notifyWatches reactive-proxy old-value new-value)))))
;;     (#'clojure.core/setup-reference reactive-proxy options))) 

(defn reactive [f & options]
  (let [{:keys [simple deps]} (apply hash-map options)
        simple (or simple (:simple (meta f)))
        r (Reactive. f)]
    (when simple
      (.setSimple r true))
    (when deps
      (.setDeps r deps)
      (.setSimple r true))
    (#'clojure.core/setup-reference r options)))
                      

(defn simple [f] (with-meta f (merge (meta f) {:simple true})))

(import '(java.util TimerTask Timer))

(defn test1 []
  (let [a (atom 0)
        b (atom 0)
        c (reactive (fn [] (+ @a @b)))
        d (atom 0)
        e (reactive (fn [] (+ @c @d)))
        f (reactive (fn [] (if (even? @a) @b @c)))
        task (proxy [TimerTask] []
               (run [] @f @e @c ))]
    (. (new Timer) (schedule task (long 1)))
    (println "Reactive")
    (time
     (dotimes [i 2000000]
       (swap! a inc)
       (swap! b inc)
       (swap! d inc)))
    (assert (= (+ @a @b) @c)
            (= (+ @c @d) @e))))

(test1)

(defn test2 []
  (let [a (atom 0)
        b (atom 0)
        c (fn [] (+ @a @b))
        d (atom 0)
        e (fn [] (+ (c) @d))
        f (fn [] (if (even? @a) @b (c)))
        task (proxy [TimerTask] []
               (run [] (f) (e) (c)))]
    (. (new Timer) (schedule task (long 1)))
    (println "Non-reactive")
    (time
     (dotimes [i 2000000]
       (swap! a inc)
       (swap! b inc)
       (swap! d inc)))))

(test2)
