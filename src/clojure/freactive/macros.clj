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

(defmacro debug-rx [rx]
  (let [dbg-str (str "rx-debug" (pr-str rx))]
    `(let [dbg-str# ~dbg-str
           res#
           (binding [freactive.core/*do-trace-captures*
                     (fn
                       ([] (println dbg-str# ": starting capture"))
                       ([c#] (println dbg-str# "captured :" c#)))]
             ~rx)
           invalidation-cb#
           (fn [k# r#] (println dbg-str#
                               "notifiying invalidation watches:"
                               (cljs.core/keys (.-invalidation-watches res#))
                               "& watches:"
                               (cljs.core/keys (.-watches res#))))]
       (freactive.core/add-invalidation-watch res# dbg-str# invalidation-cb#)
       res#)))


;(defmacro animation-rx [& body]
;  `(freactive.experimental.animation/animation-rx*
;     (fn [] ~@body)))

