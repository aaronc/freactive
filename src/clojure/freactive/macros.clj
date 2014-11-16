(ns freactive.macros)

(defmacro rx [& body]
  `(freactive.core/rx*
     (fn []
       ~@body)))

(defmacro rx [& body]
  `(freactive.core/rx*
     (fn []
       ~@body)
     false))

(defmacro lazily [& body]
  `(binding [freactive.core/*lazy* true]
     ~@body))

(defmacro eagerly [& body]
  `(binding [freactive.core/*lazy* false]
     ~@body))

(defmacro non-reactively [& body]
  `(binding [freactive.core/*invalidate-rx* nil]
     ~@body))

(defmacro debug-rx [rx capture-callback invalidation-callback]
  `(let [res# (binding [freactive.core/*do-trace-captures* ~capture-callback] ~rx)]
    (freactive.core/add-invalidation-watch res# ~invalidation-callback ~invalidation-callback)
    res#))

;(defmacro animation-rx [& body]
;  `(freactive.experimental.animation/animation-rx* (fn [] ~@body)))


