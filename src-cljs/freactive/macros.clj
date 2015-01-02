(ns freactive.macros)

(defmacro rx [& body]
  `(freactive.core/rx*
     (fn []
       ~@body)
     true))

(defmacro eager-rx [& body]
  `(freactive.core/rx*
     (fn []
       ~@body)
     false))

(defmacro non-reactively [& body]
  `(binding [freactive.core/*invalidate-rx* nil]
     ~@body))

(def ^:private auto-id (atom 0))

(defmacro debug-rx [rx]
  (let [dbg-str (str "rx-debug" (pr-str rx))
        id (str "debug-rx-" (swap! auto-id inc))]
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
                               (cljs.core/js-keys (.-invalidation-watches res#))
                               "& watches:"
                               (cljs.core/keys (.-watches res#))))]
       (freactive.core/add-invalidation-watch res# ~id invalidation-cb#)
       res#)))


;(defmacro animation-rx [& body]
;  `(freactive.experimental.animation/animation-rx*
;     (fn [] ~@body)))

