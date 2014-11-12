(ns freactive.core-test
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom cursor rx*]]
    [cemerick.cljs.test :refer-macros [deftest is]]))

(deftest rx-test1
  (let [r0 (atom 0)
        r1 (rx* (fn [] (inc @r0)))]
    (is (= 1 @r1))
    (swap! r0 inc)
    (is (= 2 @r1))))

(deftest cursor-test
  (let [a (atom {:a {:b 2}})
        b (cursor a :a)
        c (rx* (fn [] (inc (:b @b))))]
    (is (= (:b @b) 2))
    (swap! a update-in [:a :b] inc)
    (is (= (:b @b) 3))
    (is (= @c 4))
    (swap! b update-in [:b] inc)
    (is (:b @b 4))
    (is (= @c 5))))
