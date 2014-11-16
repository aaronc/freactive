# freactive
*pronounced "F-reactive"*

freactive is a pure Clojurescript DOM library inspired by work done in reagent, om and reflex (as well as desktop GUI frameworks like QML and JavaFX). It uses hiccup-style syntax and relies heavily Clojure's built-in deref and atom patterns.

**Goals:**
* Provide a **dead-simple API** that is intuitive and almost obvious for those familiar with Clojure (similar to Reagent)
* All for **high-performance** rendering
* Allow for **reactive binding of any attribute, style property or child node**
* Provide a **deeply-integrated animation** framework
* **Minimize unnecessary triggering of update events**
* Allow for **coordinated management of state via cursors** (as in Om)
* Allow for cursors based on paths as well as **lenses**
* Be written in **pure Clojurescript**
* Coordinate all updates via **requestAnimationFrame** where possible
* Provide a generic items view component for **efficient viewing of large data sets**

## Two-minute tutorial

**Hello World example:**

```clojure
(ns example1
  (:refer-clojure :exclude [atom])
  (:require [freactive.core :refer [atom]
            [freactive.dom :as dom)
  (:require-macros [freactive.macros :refer [rx]))
    
(defonce mouse-pos (atom nil))

(defn view []
  [:div
    {:width "100%" :height "100%"
     :on-mousemove (fn [e] (reset! mouse-pos [(.-clientX e) (.-clientY e)]))}
    [:h1 "Hello World!]
    [:p "Your mouse is at: " (rx (str @mouse-pos))]])

(defonce root (dom/append-child! (.-body js/document) [:div#root]))

(dom/mount! root (view))
```

If you already understand hiccup DOM syntax and Clojure's `atom`, you're 90% there. In freactive, make sure you use freactive's reactive `atom` which allows derefs to be captured by an enclosing reactive expression (this is exactly the same idea as in reagent). We just need to introduce one additional concept - the macro `rx` (for reactive expression).



The `rx` macro returns an `IDeref` instance (can be `deref`'ed with `@`) whose value is the body of the expression. This value gets updated when (and only when) one of the dependencies captured in its body (reactive `atom`s, other `rx`'s and also things like `cursor`s) gets "invalidated". (Pains were taken to make this invalidation process as efficient and configurable as possible.)

Passing an `rx` or reactive `atom` (or any `IDeref` instance) as an attribute, style property or child of a DOM element represented via a hiccup vector binds it to that attribute, style property or child node position. freactive makes sure that any updates to `rx`'s or `atom`'s are propogated to the DOM directly to the binding site only as often as necessary (coordinated with `requestAnimationFrame`).

Components are mounted by passing a target node and hiccup vector to the `mount!` function (this will replace the last child of the target node with the mounted node!). A few additional convenience functions are included - `append-child!`, `remove!`, and `listen!` - but it is encouraged to use them sparingly and prefer the declarative hiccup syntax wherever possible.

## Animations

TODO

## Cursors

TODO

## Items View

TODO



