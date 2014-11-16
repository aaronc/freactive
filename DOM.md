# freactive
*pronounced "F-reactive". This library should be considered experimental - it has not been widely tested.*


freactive is a high-performance, pure Clojurescript, declarative DOM library. It uses hiccup-style syntax and Clojure's built-in deref and atom patterns. It is inspired by work done in reagent, om and reflex (as well as desktop GUI frameworks like QML and JavaFX). [See it in action](http://aaronc.github.io/freactive/).

**Goals:**
* Provide a **dead-simple API** that is intuitive and almost obvious for those familiar with Clojure (similar to Reagent)
* Allow for **high-performance** rendering **good enough for animated graphics** based on a purely declarative syntax
* Allow for **reactive binding of any attribute, style property or child node**
* Provide a **deeply-integrated animation** framework
* Allow for **coordinated management of state via [cursors](#cursors)** (as in Om)
* Allow for cursors based on paths as well as **lenses**
* Provide a generic items view component for **efficient viewing of large data sets**
* **Minimize unnecessary triggering of update events**
* Coordinate all updates via **requestAnimationFrame** wherever possible
* Be written in **pure Clojurescript**


## Two-minute tutorial

[lein](http://leiningen.org) dependency:

[![Clojars Project](http://clojars.org/freactive/latest-version.svg)](http://clojars.org/freactive)

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

Transition callbacks can be added to any DOM element using the `with-transitions` function.

```clojure
(with-transitions
  [:h1 "Hello World!"]
  {:on-show (fn [node callback] (animation/animate! node 1000 my-easing-fn {:opacity "100%"} callback)})
```

The framework understands the `:on-show` and `:on-hide` transitions. These transitions will be applied upon changes at binding sites - i.e. at the site of an `rx` or an initial `mount!`.


## Cursors

`cursor`'s in freactive behave and look exactly like `atom`'s. You can use Clojurescript's built-in `swap!` and `reset!` functions on them and state will be propogated back to their parents. By default, change notifications from the parent propagate to the cursor when and only when they affect the state of the cursor.

cursors can be created by passing in a path that would be passed to `get-in` or `assoc-in` to the `cursor` function:

```clojure
(cursor my-atom [:a :b 0])
```

Fundamentally, however, cursors are based on [lenses](https://speakerdeck.com/markhibberd/lens-from-the-ground-up-in-clojure)! That means that you can pass any arbitrary getter (of the form `(fn [parent-state])`) and setter (of the form `(fn [parent-state cursor-state])`) and the cursor will handle it.

## Items View

TODO

## Configuration of Change Notifications

TODO



