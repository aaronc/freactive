(ns freactive.core
  (:refer-clojure
   :exclude [atom agent ref])
  (:import [freactive ReactiveAtom Reactive]))

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
  ([x] (new ReactiveAtom x))
  ([x & options] (#'clojure.core/setup-reference (atom x) options)))

(defn reactive [f & options]
  (#'clojure.core/setup-reference (Reactive. f) options))

(import '(System.Timers Timer))

;; (defn test1 []
;;   (let [a (atom 0)
;;         b (atom 0)
;;         c (reactive (fn [] (+ @a @b)))
;;         d (atom 0)
;;         e (reactive (fn [] (+ @c @d)))
;;         f (reactive (fn [] (if (even? @a) @b @c)))
;;         task (proxy [TimerTask] []
;;                (run [] @f @e @c ))]
;;     (. (new Timer ) (schedule task (long 1)))
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



