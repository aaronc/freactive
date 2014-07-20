(ns freactive.core
  (:refer-clojure
   :exclude [atom agent ref swap! reset! compare-and-set!])
  (:import [clojure.lang ReactiveAtom Reactive StatefulReactive]))

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

(defn reactive [f & options]
  (#'clojure.core/setup-reference (Reactive. f) options))

(defn stateful-reactive [init-state f & options]
  (#'clojure.core/setup-reference (StatefulReactive. init-state f) options))

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
