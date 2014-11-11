(ns freactive.core-test
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom rx*]]
    [cemerick.cljs.test :refer-macros [deftest is]]))

(deftest rx-test1
  (let [r0 (atom 0)
        r1 (rx* (fn [] (inc @r0)))]
    (is (= 1 @r1))
    (swap! r0 inc)
    (is (= 2 @r1))))
