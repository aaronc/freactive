# freactive

Work in progress!

Simple functional reactive programming for Clojure.

Defines a function `reactive` which takes a function as an argument
and returns a `clojure.lang.IDeref` whose is flagged to be recomputed
every time a reactive dependency is updated. (Dirty reactive values
are only recomputed when they are dereferenced).

How can a reactive dependency be updated?

freactive has a reactive `atom` implementation which will be
registered as a reactive dependency when reactive computations are
computed based on it.

```clojure
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

```


## License

Copyright © 2014 Aaron Craelius
Some content Copyright © Rich Hickey

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
