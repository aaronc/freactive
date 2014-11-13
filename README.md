# freactive

The idea of this library is to provide some idioms for functional reactive
programming based on Clojure's already existing `deref`, `swap!` and `reset!`
functions. Currently there are reactive `atom`, `rx` (reactive expressions or computations),
and lens-based  `cursor` types.

This library started when I needed to write a fairly
large Clojure project in JavaFX (using my own [fx-clj](https://github.com/aaronc/fx-clj/)).
I was aware of [Om](https://github.com/swannodette/om) and [Reagent](https://github.com/reagent-project/reagent)
and figured something along those lines could be created with a Reagent-like reactive atom library that
interacted with JavaFX. While doing this, I realized that a library with the same API could be created 
in ClojureScript and that also, a DOM library with a similar API to the JavaFX library could be created.
I created this [spec](https://github.com/aaronc/freactive/wiki/User-Interface-Spec) for user interface libraries that could be based upon freactive using a similar API.

Example:
```clojure
(ns test-freactive
  (:refer-clojure :exclude [atom])
  (:require [freactive.core :refer [atom rx lens cursor]))
  
  
(def a1 (atom 0))
(def a2 (atom 0))

(def my-rx (rx (inc @a1))

(println @my-rx)
;; 1

(swap! a1 inc)

(println @my-rx)
;; 2

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
