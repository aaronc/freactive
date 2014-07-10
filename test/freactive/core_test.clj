(ns freactive.core-test
  (:refer-clojure :exclude [atom swap!])
  (:require [freactive.core :refer
             [reactive atom swap!]]))

(def a (atom 0))

(def b (atom 0))

(def r (reactive (fn [] (+ @a @b))))

@r
;; 0

(swap! a inc)
;; 1

@r
;; 1

(swap! b inc)
;; 1

@r
;; 2
