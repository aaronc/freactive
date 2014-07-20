(ns freactive.core
  (:refer-clojure :exclude [atom]))

(def ^:dynamic *register-dep* (constantly nil))

(deftype ReactiveAtom [state meta validator watches]
  Object
  (equiv [this other]
    (-equiv this other))

  IAtom
  
  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [_]
    (*register-dep* thi)
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<Atom: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog/getUid this)))

(deftype Reactive [state dirty f deps meta]
  Object
  (equiv [this other]
    (-equiv this other))

  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [_]
    (*register-dep* thi)
    (if-not dirty
      state
      (binding [*register-deps* nil])))

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<Atom: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog/getUid this)))
