# freactive
*pronounced "f-reactive". Name may be changed. This library should be considered experimental - it has not been widely tested.*

freactive is a high-performance, pure Clojurescript, declarative DOM library. It uses [hiccup](https://github.com/weavejester/hiccup)-style syntax and Clojure's built-in deref and atom patterns. It is inspired by work done in [reagent](https://github.com/reagent-project/reagent), [om](https://github.com/swannodette/om) and [reflex](https://github.com/lynaghk/reflex) (as well as my experience with desktop GUI frameworks such as QML, JavaFX and WPF). **[See it in action!][dom-perf]**

**Goals:**
* Provide a **[simple, intuitive API](#hello-world)** that should be almost obvious for those familiar with Clojure (inspiration taken from reagent and QML)
* Allow for **[high-performance](#performance)** rendering **[good enough for animated graphics][dom-perf]** based on a purely declarative syntax
* Allow for **reactive binding of any attribute, style property or child node**
* Allow for **coordinated management of state via [cursors](#cursors)** (inspiration taken from om)
* Provide a **deeply-integrated [animation](#animations)** framework
* Allow for cursors based on paths as well as **lenses**
* Provide a generic [items view component](#items-view) for **efficient viewing of large data sets**
* **Minimize unnecessary triggering of update events**
* Coordinate all updates via **requestAnimationFrame** wherever possible
* Be written in **pure Clojurescript**
* Provide support for older browsers via polyfills (not yet implemented)

## Two-minute tutorial

**[Leiningen](http://leiningen.org) dependency info:**

[![Clojars Project](http://clojars.org/freactive/latest-version.svg)](http://clojars.org/freactive)

<a name="hello-world"></a>**Hello World example:**

To try this quickly, you can install the [austin](https://github.com/cemerick/austin) repl plugin, run `austin-exec`, open a browser with the URL provided by austin and execute the code below. This code is also compatible with [lein-figwheel](https://github.com/bhauman/lein-figwheel) - this is possibly the best approach for live Clojurescript development available now.

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
    [:h1 "Hello World!"]
    [:p "Your mouse is at: " (rx (str @mouse-pos))]])

(defonce root (dom/append-child! (.-body js/document) [:div#root]))

(dom/mount! root (view))
```

**Explanation:**

If you already understand [hiccup syntax](https://github.com/weavejester/hiccup#syntax) and Clojure's `atom`, you're 90% of the way to understanding freactive. In freactive, instead of Clojure's atom, you should use freactive's reactive `atom` which allows derefs to be captured by an enclosing reactive expression (this is exactly the same idea as in reagent).

**The `rx` macro**: the `rx` macro returns an `IDeref` instance (can be `deref`'ed with `@`) whose value is the body of the expression. This value gets updated when (and only when) one of the dependencies captured in its body (reactive `atom`s, other `rx`'s and also things like `cursor`'s) gets "invalidated". (Pains were taken to make this invalidation process as efficient and configurable as possible.)

**Binding to attributes, style properties and node positions:** Passing an `rx` or reactive `atom` (or any `IDeref` instance) as an attribute, style property or child of a DOM element represented via a hiccup vector binds it to that site. freactive makes sure that any updates to `rx`'s or `atom`'s are propogated to directly to that DOM directly site only as often as necessary (coordinated with `requestAnimationFrame`).

**Mounting components:** components are mounted by passing a target node and hiccup vector to the `mount!` function (this will replace the last child of the target node with the mounted node!).

**Helper functions:** a few additional helper functions such as - `append-child!`, `remove!`, and `listen!` - are included, but it is encouraged to use them sparingly and prefer the declarative hiccup syntax wherever possible.

## Performance

freactive should be able to handle fairly high performance graphics.

Rather than saying how fast freactive does X compared to framework Y (which isn't always productive), I created an example that would really tax its ability to render. This is to give me (as well as potential library users) an idea of it can and can't handle on different platforms. Isn't that what matters anyway?

This example tries to animate points on the screen (SVG circle nodes) relative to the current mouse position. It has a complexity factor, `n`, which can be controlled by the `+` and `-` buttons. The number of points is *(2n + 1)<sup>2</sup>*.

When you're observing the example you can view the calculated FPS rate as well as the estimated number of DOM attributes updated per second. I recommend trying different values of `n` in different browsers (even try your phone!). Notice at which number of points the animation is and isn't smooth. Please report any issues you find here so we can make it better!: https://github.com/aaronc/freactive/issues.

**Here is the example: http://aaronc.github.io/freactive/dom-perf**

All of this is done declaratively with only the [syntax described above](#two-minute-tutorial), [easers](#easers) and [transitions](#transitions).

**Here is the source for the example: https://github.com/aaronc/freactive/blob/master/test/freactive/dom_perf.cljs**

This example benchmarks performance of reactive `atom`, `rx` and `easer` updates, freactive's rendering loop and applying those updates to DOM attributes and style properties. It does not benchmark updating DOM text nodes or replacing DOM nodes - the two other types of transformations freactive does - additional examples should be created to benchmark these.

## Cursors

`cursor`'s in freactive behave and look exactly like `atom`'s. You can use Clojurescript's built-in `swap!` and `reset!` functions on them and state will be propogated back to their parents. By default, change notifications from the parent propagate to the cursor when and only when they affect the state of the cursor.

cursors can be created by passing in a path that would be passed to `get-in` or `assoc-in` to the `cursor` function:

```clojure
(def my-atom (atom {:a {:b [{:x 0}]}))
(def ab0 (cursor my-atom [:a :b 0]) ;; -> {:x 0}
```

Fundamentally, however, cursors are based on [lenses](https://speakerdeck.com/markhibberd/lens-from-the-ground-up-in-clojure). That means that you can pass any arbitrary getter (of the form `(fn [parent-state])`) and setter (of the form `(fn [parent-state cursor-state])`) and the cursor will handle it.

```clojure
(def my-atom (atom 0}))
(def ab0 (cursor my-atom print-number parse-number)
(println @ab0)
;; "0"
(reset! ab0 "1.2")
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
              ;; do something
              (when callback (callback)))})
```

The framework understands the `:on-show` and `:on-hide` transitions. These transitions will be applied upon changes at binding sites - i.e. at the site of an `rx` or an initial `mount!`. (A mechanism for triggering transitions based on changes to `data-state` is also planned.)

### Easers

*An API that wraps `easer` functionality in a convenient `animate!` function that takes style and attribute properties is planned.*

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

**Easing functions:** an easing function, `f`, is a function that is designed to take an input `t` parameter that ranges from `0.0` to `1.0` that has the property `(= (f 0) 0)` and `(= (f 1) 1)`. Basically the easing function is supposed to smoothly transition from `0` to `1`. The easer itself takes care of properly scaling the values based on `duration` and `from` and `to` values. A selection of easing functions from Dan Kersten's [ominate](https://github.com/danielytics/ominate) (thank you!) is currently included in this library, but this is subject to change.

**Optional `from` parameter:** the optional `from` parameter to `start-easing!` has a special behavior - if the current value of the easer is different from `from`, the `duration` of easing will be adjusted (linearly for now) based on the difference bettween `from` and the current value. This is to keep the speed of easing somewhat consistent. If you, don't want this behavior and always want the same `duration` regardless of the current value of the easer, don't specify a `from` value.

**Interupting in progress easings:** if `start-easing!` is called on an easer that is already in an easing transition that hasn't completed, it is equivalent to cancelling the current easing and sending the easer in a different direction starting from the current value. If there was on `on-complete` callback to the easing that was in progress it won't be called and is effectively "cancelled". (This behavior can be observed in the [performance example](#performance) if you click `+` or `-` while a transition is happening.)

## Items View

An experimental `items-view` has been created, but has not been documented yet. The API is also subject to change.

## Configuration of Change Notifications

TODO


[dom-perf]: http://aaronc.github.io/freactive/dom-perf

## Contributions & License

**Contributions (including pull requests) welcome!**

Distributed under the Eclipse Public License, either version 1.0 or (at your option) any later version.


