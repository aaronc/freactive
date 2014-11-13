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

(defmacro not-reactively [& body]
  `(binding [freactive.core/*invalidate-rx* nil]
     ~@body))
