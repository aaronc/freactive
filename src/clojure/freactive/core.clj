(ns freactive.core
  (:refer-clojure
   :exclude [atom agent ref swap! reset! compare-and-set!])
  (:import [clojure.lang ReactiveAtom Reactive StatefulReactive ReactiveAtomView]))

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
  ([x] (new freactive.ReactiveAtom x))
  ([x & options] (#'clojure.core/setup-reference (atom x) options)))

(defn reactive* [f & options]
  (#'clojure.core/setup-reference (Reactive. f) options))

(defn eager-reactive* [f & options]
  (#'clojure.core/setup-reference (Reactive. f false) options))

(defmacro reactive [& body]
  `(freactive.core/reactive*
     (fn reactive-computation-fn []
       ~@body)))

(defmacro eager-reactive [& body]
  `(freactive.core/eager-reactive*
     (fn reactive-computation-fn []
       ~@body)))

(defn reactive-state [init-state f & options]
  (#'clojure.core/setup-reference (StatefulReactive. init-state f) options))

(defn reactive-atom-view
  ([ratom view-transform]
   (reactive-atom-view view-transform (fn [x _] x)))
  ([ratom view-transform update-transform]
   (ReactiveAtomView. ratom view-transform update-transform)))

;; (import '(java.util TimerTask Timer))

;; (defn test1 []
;;   (let [a (atom 0)
;;         b (atom 0)
;;         c (reactive (fn [] (+ @a @b)))
;;         d (atom 0)
;;         e (reactive (fn [] (+ @c @d)))
;;         f (reactive (fn [] (if (even? @a) @b @c)))
;;         task (proxy [TimerTask] []
;;                (run [] @f @e @c ))]
;;     (. (new Timer) (schedule task (long 1)))
;;     (println "Reactive")
;;     (time
;;      (dotimes [i 2000000]
;;        (swap! a inc)
;;        (swap! b inc)
;;        (swap! d inc)))
;;     (assert (= (+ @a @b) @c)
;;             (= (+ @c @d) @e))))

;; (test1)

;; (defn test2 []
;;   (let [a (atom 0)
;;         b (atom 0)
;;         c (fn [] (+ @a @b))
;;         d (atom 0)
;;         e (fn [] (+ (c) @d))
;;         f (fn [] (if (even? @a) @b (c)))
;;         task (proxy [TimerTask] []
;;                (run [] (f) (e) (c)))]
;;     (. (new Timer) (schedule task (long 1)))
;;     (println "Non-reactive")
;;     (time
;;      (dotimes [i 2000000]
;;        (swap! a inc)
;;        (swap! b inc)
;;        (swap! d inc)))))

;; (test2)

(defn atom-view
  ([ratom view-fn]
   (atom-view ratom view-fn identity))
  ([ratom view-fn update-fn]
   (ReactiveAtomView. ratom view-fn update-fn)))
