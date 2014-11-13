# freactive

The goal of this library is to provide some idioms for functional reactive programming based on Clojure's existing `deref`, `swap!` and `reset!` functions. Currently freactive has reactive `atom`, `rx` (reactive expressions or computations), and lens-based  `cursor` types.

This idea for this came when I needed to write a fairly complex, real-time JavaFX app (using my own [fx-clj](https://github.com/aaronc/fx-clj/)). I knew of [Om](https://github.com/swannodette/om) and [Reagent](https://github.com/reagent-project/reagent) and wanted something for JavaFX that used Reagent-like reactive atoms. While doing this, I realized that with a common library of reactive "ref"'s, different UI libaries could share the same data structures and state management idioms. That is the vision for this library.

For maximal efficieny, pains were taken while to keep the propogation of state changes to the minimum necessary and to allow for configurable laziness where applicable.

*I have drafted a brief [spec](https://github.com/aaronc/freactive/wiki/User-Interface-Spec) for user interface libraries that could be based upon freactive using a similar Hiccup-like API. The goal is for fx-clj and an freactive-based DOM library to support this spec.*

*The ClojureScript version of the API is described here - as the Java-version was designed first, the ClojureScript version had the benefit of further refinement. The Java-version will be updated to match this document as soon as I have a chance.*

Example:
```clojure
;; ClojureScript:

(ns test-freactive
  (:refer-clojure :exclude [atom])
  (:require [freactive.core :refer [atom cursor]]
            [cljs.reader :refer [read-string]])
  (:require-macros [freactive.macros :refer [rx]]))
  
(def my-atom (atom {:a 1}))
(def my-rx (rx (str @my-atom)))
(def cursor-a (cursor my-atom :a))
(def cursor-a-str (cursor cursor-a pr-str (fn [_ new-value] (read-string new-value))))

(println @cursor-a-str)
;; "1"

(reset! cursor-a-str "4")

(println @my-rx)
;; "{:a 4}"
```

All of the data types in this library implement the `IDeref` interface and
when they are `deref`'ed from another "reactive expression" will be registered
as dependents.

## Reactive Atoms

Reactive atoms are the same as standard Clojure atoms, except for two differences:

* When `deref` is called on a reactive atom, it calls a `register-dep` function
with itself as an argument so that it can be registered as a dependency to
a computation that has bound the `*register-dep*` var in the current scope.
* Reactive atoms will not notify their watches unless they have actually changed
(i.e. they will do an equality test between the old value and new value before
notifying of changes).

## Reactive Expressions

A reactive expression is an `IDeref` instance whose value is the result of
a computation that can be updated reactively when it's dependencies are
invalidatted.


## Reactive Cursors

## License

Copyright © 2014 Aaron Craelius
Some content Copyright © Rich Hickey

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
