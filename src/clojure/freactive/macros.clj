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
