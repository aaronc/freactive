(ns freactive.experimental.units)

(defprotocol IUnit
  (-read-value [this cur-value-str])
  (-get-writer [this])
  (-cur-value [this]))

(deftype Pixel [x]
  Object
  (toString [_] (str x "px"))

  IUnit
  (-get-writer [_] (fn [y] (str y "px")))
  (-read-value [this cur-value-str])
  (-cur-value [_] x))

(defn px [x] (Pixel. x))

(deftype Translate [x y]
  Object
  (toString [_] (str "translate(" x "px," y "px"))

  IUnit
  (-get-writer [_] (fn [v] (str "translate(" (aget v 0) "px," (aget v 1) "px")))
  (-read-value [this cur-value-str])
  (-cur-value [_] #js [x y]))

(defn translate [x y] (Translate. x y))


(deftype Scale [x]
  Object
  (toString [_] (str "scale(" x ")"))

  IUnit
  (-get-writer [_] (fn [y] (str "scale(" y ")")))
  (-read-value [this cur-value-str])
  (-cur-value [_] x))

(defn scale [x] (Scale. x))

(deftype Rotate [x]
  Object
  (toString [_] (str "rotate(" x "deg)"))

  IUnit
  (-get-writer [_] (fn [y] (str "rotate(" y "deg)")))
  (-read-value [this cur-value-str])
  (-cur-value [_] x))

(defn rotate [x] (Rotate. x))

;(defn transform [])

(deftype SVGTranslateX [x]
  Object
  (toString [_] (str "translate(" x ")"))

  IUnit
  (-get-writer [_] (fn [x] (str "translate(" x ")")))
  (-read-value [this cur-value-str])
  (-cur-value [_] x))

(deftype SVGTranslate [x y]
  Object
  (toString [_] (str "translate(" x "," y ")"))

  IUnit
  (-get-writer [_] (fn [v] (str "translate(" (aget v 0) "," (aget v 1) "")))
  (-read-value [this cur-value-str])
  (-cur-value [_] #js [x y]))

(defn svg-translate
  ([x] (SVGTranslateX. x))
  ([x y] (SVGTranslate. x y)))
