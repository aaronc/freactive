# freactive
*pronounced "F-reactive". This library should be considered experimental - it has not been widely tested.*


freactive is a high-performance, pure Clojurescript, declarative DOM library. It uses [hiccup](https://github.com/weavejester/hiccup)-style syntax and Clojure's built-in deref and atom patterns. It is inspired by work done in [reagent](https://github.com/reagent-project/reagent), [om](https://github.com/swannodette/om) and [reflex](https://github.com/lynaghk/reflex) (as well as desktop GUI frameworks like QML and JavaFX). [See it in action](http://aaronc.github.io/freactive/).

**Goals:**
* Provide a **simple, intuitve API** that shoudl be almost obvious for those familiar with Clojure (similar to reagent)
* Allow for **high-performance** rendering **good enough for animated graphics** based on a purely declarative syntax
* Allow for **reactive binding of any attribute, style property or child node**
* Provide a **deeply-integrated [animation](#animations)** framework
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

**Explanation:**

If you already understand [hiccup syntax](https://github.com/weavejester/hiccup#syntax) and Clojure's `atom`, you're 90% there. In freactive, make sure you use freactive's reactive `atom` which allows derefs to be captured by an enclosing reactive expression (this is exactly the same idea as in reagent). We just need to introduce one additional concept - the macro `rx` (for reactive expression).

**The `rx` macro**: the `rx` macro returns an `IDeref` instance (can be `deref`'ed with `@`) whose value is the body of the expression. This value gets updated when (and only when) one of the dependencies captured in its body (reactive `atom`s, other `rx`'s and also things like `cursor`s) gets "invalidated". (Pains were taken to make this invalidation process as efficient and configurable as possible.)

**Binding to attributes, style properties and node positions:** Passing an `rx` or reactive `atom` (or any `IDeref` instance) as an attribute, style property or child of a DOM element represented via a hiccup vector binds it to that site. freactive makes sure that any updates to `rx`'s or `atom`'s are propogated to directly to that DOM directly site only as often as necessary (coordinated with `requestAnimationFrame`).

**Mounting components:** components are mounted by passing a target node and hiccup vector to the `mount!` function (this will replace the last child of the target node with the mounted node!).

**Helper functions:** a few additional helper functions such as - `append-child!`, `remove!`, and `listen!` - are included, but it is encouraged to use them sparingly and prefer the declarative hiccup syntax wherever possible.

## Cursors

`cursor`'s in freactive behave and look exactly like `atom`'s. You can use Clojurescript's built-in `swap!` and `reset!` functions on them and state will be propogated back to their parents. By default, change notifications from the parent propagate to the cursor when and only when they affect the state of the cursor.

cursors can be created by passing in a path that would be passed to `get-in` or `assoc-in` to the `cursor` function:

```clojure
(def my-atom (atom {:a {:b [{:x 0}]}))
(def ab0 (cursor my-atom [:a :b 0]) ;; -> {:x 0}
```

Fundamentally, however, cursors are based on [lenses](https://speakerdeck.com/markhibberd/lens-from-the-ground-up-in-clojure)! That means that you can pass any arbitrary getter (of the form `(fn [parent-state])`) and setter (of the form `(fn [parent-state cursor-state])`) and the cursor will handle it.

```clojure
(def my-atom (atom 0}))
(def ab0 (cursor my-atom print-number parse-number)
(println @ab0)
;; "0"
(reset! ab0 "1.2)
(println @my-atom)
;; 1.2
```

## Animations

### Transitions

Transition callbacks can be added to any DOM element using the `with-transitions` function.

```clojure
(with-transitions
  [:h1 "Hello World!"]
  {:on-show (fn [node callback]
              (animation/animate! node 1000 my-easing-fn {:opacity "100%"} callback)})
```

The framework understands the `:on-show` and `:on-hide` transitions. These transitions will be applied upon changes at binding sites - i.e. at the site of an `rx` or an initial `mount!`. (A mechanism for triggering transitions based on changes to `data-state` is also planned.)

### Easers

`easer`'s are the basis of freactive animations. An easer is a specialized type of deref value that is updated at every animation frame based on an easing function and target and duration parameters. Essentially it provides "tween" values. Easers are defined with the `easer` function which takes an initial value. They can be transitioned to another value using the `start-easing!` function which takes the following parameters: `from` (optional), `to`, `duration`, `easing-fn` and a `on-complete` callback.

An easer is designed to be used as a dependency in a reactive computation, like this:

```clojure
(def ease-factor (easer 0.0))
(defn my-view []
  (with-transitions
    [:h1 {:opacity (rx (* 100 @ease-factor))
          :font-size (rx (* 16 @ease-fator))} "Hello World!"]
    {:on-show (fn [node callback]
                (start-easing! easer 0 1.0 1000
                                     easing/quad-in on-complete)}))
```

**Easing functions:** an easing function, `f`, is a function that is designed to take an input `t` parameter that ranges from `0.0` to `1.0` that has the property `(= (f 0) 0)` and `(= (f 1) 1)`. Basically the easer is supposed to smoothly transition from `0` to `1`. The easer, takes care of scaling the values based on `duration` and `from` and `to` values. A selection of easing functions from Dan Kersten's [ominate](https://github.com/danielytics/ominate) (thank you!) is currently included in this library, but this is subject to change.

**Optional `from` parameter:** the optional `from` parameter to `start-easing!` has a special behavior - if the current value of the easer is different from `from`, the `duration` of easing will be adjusted (linearly for now) based on the difference bettween `from` and the current value. This is to keep the speed of easing somewhat consistent. If you, don't want this behavior and always want the same `duration` regardless of the current value of the easer, don't specify a `from` value.

**Interupting easings in progress:** if `start-easing!` is called on an easer that is already in an easing transition that hasn't completed, it is equivalent to cancelling the current easing and sending the easer in a different direction starting from the current value. If there was on `on-complete` callback to the easing that was in progress it won't be called and is effectively "cancelled".




## Items View

TODO

## Configuration of Change Notifications

TODO



