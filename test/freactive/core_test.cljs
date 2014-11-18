(ns freactive.core-test
  (:refer-clojure :exclude [atom])
  (:require
    [freactive.core :refer [atom cursor state-machine
                            transition!]]
    [cljs.reader]
    [cemerick.cljs.test :refer-macros [deftest is run-tests]])
  (:require-macros [freactive.macros :refer [rx]]))

(deftest rx-test1
  (let [r0 (atom 0)
        r1 (rx (inc @r0))]
    (is (= 1 @r1))
    (swap! r0 inc)
    (is (= 2 @r1))))

(deftest cursor-test
  (let [a (atom {:a {:b 2}})
        b (cursor a :a)
        c (rx (inc (:b @b)))]
    (is (= (:b @b) 2))
    (swap! a update-in [:a :b] inc)
    (is (= (:b @b) 3))
    (is (= @c 4))
    (swap! b update-in [:b] inc)
    (is (:b @b 4))
    (is (= @c 5))))

(deftest lens-test
  (let [a (atom {:a 0})
        l (cursor a pr-str (fn [_ new-value]
                            (cljs.reader/read-string new-value)))]
    (is (= @l "{:a 0}"))
    (reset! l "{:b 1}")
    (is (= @a {:b 1}))
    (reset! a {:c 2})
    (is (= @l "{:c 2}"))))

;(defn sm1
;  (state-machine
;    :init
;    {:from-init (fn [to] true)
;     :to-init (fn [from] false)
;     :to-running (fn [from]
;                   (if (or (= from :init) (= :from :stopped))
;                     true))
;     :from-running {fn [to]
;                    (when (= to :)
;                      true)}
;     :to-stopped (fn [from]
;                   (when (= from :running)
;                     true))
;     :from-stopped (fn [to]
;                     (when (= to :running)
;                       true))}))

(defn sm1 []
  (state-machine
    :init
    {:from-init true
     :to-init false
     :from-running-to-stopped true
     :from-stopped-to-running true
     :to-finished true
     :from-finished false}
    :default-accept false
    :allowed-states #{:init :running :stopped :finished}))

(defn sm2 []
  (state-machine
    :init
    {:from-init #(true)
     :to-init #(false)
     :from-running-to-stopped #(true)
     :from-stopped-to-running #(true)
     :to-finished #(true)
     :from-finished #(false)}
    :default-accept false
    :allowed-states #{:init :running :stopped :finished}))

(defn test-sm [sm]
  (is (= @sm :init))
  (is (= (transition! sm :running)) :running)
  (is (= (transition! sm :stopped)) :stopped)
  (is (= (transition! sm :running)) :running)
  (is (= (transition! sm :finished)) :finished)
  (is (= (transition! sm :running)) :finished)
  (is (= (transition! sm :test1)) :finished)
  )

(deftest state-machine-test
         (test-sm (sm1))
         ;;(test-sm (sm2))
         )
