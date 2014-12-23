# freactive
*pronounced "f-reactive" for functional reactive - name subject to change. This library should be considered experimental - it has not been widely tested.*

freactive is a high-performance, pure [Clojurescript](https://github.com/clojure/clojurescript), declarative DOM library. It uses [hiccup](https://github.com/weavejester/hiccup)-style syntax and Clojure's built-in deref and atom patterns. It is inspired by [reagent][reagent], [om][om] and [reflex][reflex] (as well as my experience with desktop GUI frameworks such as QML, JavaFX and WPF). **[See it in action!][dom-perf]**

**Goals:**
* Provide a **[simple, intuitive API](#hello-world)** that should be almost obvious to those familiar with Clojure (inspiration from [reagent][reagent])
* Allow for **[high-performance](#performance)** rendering **[good enough for animated graphics][dom-perf]** based on a purely declarative syntax
* Allow for **reactive binding of any attribute, style property or child node**
* Allow for **coordinated management of state via [cursors](#cursors)** (inspiration from [om][om])
* Provide **deeply-integrated [animation](#animations)** support
* Allow for cursors based on paths as well as **lenses**
* Provide a generic [items view component](#items-view) for **efficient viewing of large data sets**
* **Minimize unnecessary triggering of update events**
* Allow for binding of **any DOM tag including Polymer elements**
* Coordinate all updates via **requestAnimationFrame** wherever possible
* Use generic algorithms wherever possible for pluggable extension points including custom polyfills, event delegation, etc.
* Be easy to [debug](#debugging-reactive-expressions)
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
  (:require [freactive.core :refer [atom cursor]]
            [freactive.dom :as dom])
  (:require-macros [freactive.macros :refer [rx]]))
    
(defonce mouse-pos (atom nil))

(defn view []
  [:div
    {:width "100%" :height "100%" :style {:border "1px solid black"}
     :on-mousemove (fn [e] (reset! mouse-pos [(.-clientX e) (.-clientY e)]))}
    [:h1 "Hello World!"]
    [:p "Your mouse is at: " (rx (str @mouse-pos))]])

(defonce root (dom/append-child! (.-body js/document) [:div#root]))

(dom/mount! root (view))
```

**Explanation:**

If you already understand [hiccup syntax](https://github.com/weavejester/hiccup#syntax) and Clojure's [`atom`](http://clojure.org/atoms), you're 90% of the way to understanding freactive. freactive's syntax is *very* similar to that of [reagent][reagent] with a few small differences.

**Reactive atoms:** In freactive, instead of Clojure's atom, you use freactive's reactive `atom` which allows `deref`'s to be captured by an enclosing reactive expression - an `rx` in this case. (This is exactly the same idea as in [reagent][reagent] and I believe it originally came from [reflex][reflex]).

**The `rx` macro**: The `rx` macro returns an `IDeref` instance (can be `deref`'ed with `@`) whose value is the body of the expression. This value gets updated when (and only when) one of the dependencies captured in its body (reactive `atom`s, other `rx`'s and also things like [`cursor`](#cursors)'s) gets "invalidated". (Pains were taken to make this invalidation process as efficient and configurable as possible.)

**Binding to attributes, style properties and node positions:** Passing an `rx` or reactive `atom` (or any `IDeref` instance) as an attribute, style property or child of a DOM element represented via a hiccup vector binds it to that site. freactive makes sure that any updates to `rx`'s or `atom`'s are propogated directly to that DOM site only as often as necessary (coordinated with `requestAnimationFrame`).

**Mounting components:** Components are mounted by passing a target node and hiccup vector to the `mount!` function (this will replace the last child of the target node with the mounted node!).

**Events:** All attributes prefixed with `:on-` will treated as event handlers and take a Clojurescript function as an argument.

**Helper functions:** A few additional helper functions such as - `append-child!`, `remove!`, and `listen!` - are included, but it is encouraged to use them sparingly and prefer the declarative hiccup syntax wherever possible.

*Note: `atom` and `rx` are also available for Java Clojure and can be used with JavaFX via [fx-clj](https://github.com/aaronc/fx-clj) using a similar API. Originally this library was conceived as just a clj/cljs `atom` and `rx` library. After working with it in fx-clj, I wanted to do the same thing for the DOM and voila. Eventually a "core" library containing just the reactive data types will be split off. The Java version of core.clj is slightly out of sync with core.cljs. There is also an out-of-date ClojureCLR version.*

## Performance

freactive should be able to handle fairly high performance graphics.

Rather than saying how fast freactive does X compared to framework Y (which isn't always productive), I created an example that would really tax its ability to render. This is to give me (as well as potential library users) an idea of what it can and can't handle on different platforms.

This example tries to animate points on the screen (SVG circle nodes) relative to the current mouse position. It has a complexity factor, `n`, which can be controlled by the `+` and `-` buttons. The number of points is *(2n + 1)<sup>2</sup>*.

When you're observing the example, you can view the calculated FPS rate as well as the estimated number of DOM attributes updated per second. I recommend trying different values of `n` in different browsers (even try your phone!). Notice at which number of points the animation is and isn't smooth. Please report any issues you find here so we can make it better!: https://github.com/aaronc/freactive/issues.

**Here is the example: http://aaronc.github.io/freactive/dom-perf**

All of this is done declaratively with only the [syntax described above](#two-minute-tutorial), [easers](#easers) and [transitions](#transitions).

**Here is the source for the example: https://github.com/aaronc/freactive/blob/master/test/freactive/dom_perf.cljs**

This example benchmarks performance of reactive `atom`, `rx` and `easer` updates, freactive's rendering loop and applying those updates to DOM attributes and style properties. It also tests freactive's ability to clean up after itself and create new DOM elements. In the pause between transitions (usually not perceptable for small `n` values), freactive is cleaning up old elements (with attached `rx`'s that need to be deactivated) and creating new DOM elements. If the average frame rate for a given `n` doesn't drop after many transitions, it means that freactive is doing a good job of cleaning up after itself. If you notice a significant drop, please [report](issues) it!

You should be able to see fairly smooth animations with thousands of points (n >= 16) on most modern computers even though the frame rate will start drop significantly. The "number of attrs updated" calculation is only valid when either the mouse is moving or a transition is happening.

*(Okay... you may be wondering if I did a Reagent comparsion because the code is so similar. [Here it is](http://aaronc.github.io/freactive-reagent-comparison/). Reagent and React are quite fast! but freactive does seem to scale better for higher values of `n`. freactive also provides built-in animations.)*

## Transitions

Transition callbacks can be added to any DOM element using the `with-transitions` function.

```clojure
(with-transitions
  [:h1 "Hello World!"]
  {:on-show (fn [node callback]
              ;; do something
              (when callback (callback)))})
```

The framework understands the `:on-show` and `:on-hide` transitions. These transitions will be applied upon changes at binding sites - i.e. at the site of an `rx` or an initial `mount!`. (A mechanism for triggering transitions based on changes to `data-state` is also planned.)

## Animations

### Easers

*An API that wraps `easer` functionality in a convenient `animate!` function that takes style and attribute properties is planned.*

`easer`'s are the basis of freactive animations. An easer is a specialized type of `deref` value that is updated at every animation frame based on an easing function and target and duration parameters. Essentially it provides "tween" values. Easers are defined with the `easer` function which takes an initial value. They can be transitioned to another value using the `start-easing!` function which takes the following parameters: `from` (optional), `to`, `duration`, `easing-fn` and a `on-complete` callback.

An easer is designed to be used as a dependency in a reactive computation, like this:

```clojure
(def ease-factor (animation/easer 0.0))
(defn my-view []
  (dom/with-transitions
    [:h1 {:style
          {:font-size (rx (str (* 16 @ease-factor) "px"))}} "Hello World!"]
    {:on-show (fn [node callback]
                (animation/start-easing! ease-factor 0 1.0 1000
                                         (ease :quad-in-out) callback))}))
```

By creating an `easing-chain`, we can do some more complex things:
```clojure
(def ease1 (animation/easer 0.0))
(def ease2 (animation/easer 1.0))
(def complex-transition
  (animation/easing-chain
    [[ease1 0.0 1.0 1000 (ease :quad-in-out)]
     [ease2 1.0 0.0 500 (ease :quad-out)]
     [ease2 0.0 1.0 150 (ease :quint-in)]]))
(defn my-view []
  (dom/with-transitions
    [:h1 {:style
          {:font-size (rx (str (* 16 @ease1) "px"))
           :opacity (rx (str @ease2))}}
     "Hello World!"]
    {:on-show
     (fn [node callback] (complex-transition callback))}))
```

**Easing functions:** an easing function, `f`, is a function that is designed to take an input `t` parameter that ranges from `0.0` to `1.0` that has the property `(= (f 0) 0)` and `(= (f 1) 1)`. Basically the easing function is supposed to smoothly transition from `0` to `1`. The easer itself takes care of properly scaling the values based on `duration` and `from` and `to` values. The easing functions shown above use [bardo](https://github.com/pleasetrythisathome/bardo)'s `ease` function from `bardo.ease`. Any third-party easing library such as bardo can be used for easing functions. (freactive only provides the most basic `quad-in` and `quad-out` easing functions built-in.)

**Optional `from` parameter:** the optional `from` parameter to `start-easing!` has a special behavior - if the current value of the easer is different from `from`, the `duration` of easing will be adjusted (linearly for now) based on the difference bettween `from` and the current value. This is to keep the speed of easing somewhat consistent. If you don't want this behavior and always want the same `duration` regardless of the current value of the easer, don't specify a `from` value.

**Interupting in progress easings:** if `start-easing!` is called on an easer that is already in an easing transition that hasn't completed, it is equivalent to cancelling the current easing and sending the easer in a different direction starting from the current value. If there was on `on-complete` callback to the easing that was in progress it won't be called and is effectively "cancelled". (This behavior can be observed in the [performance example](#performance) if you click `+` or `-` while a transition is happening.)

## Cursors

`cursor`'s in freactive behave and look exactly like `atom`'s. You can use Clojurescript's built-in `swap!` and `reset!` functions on them and state will be propogated back to their parents. By default, change notifications from the parent propagate to the cursor when and only when they affect the state of the cursor.

Fundamentally, cursors are based on [lenses](https://speakerdeck.com/markhibberd/lens-from-the-ground-up-in-clojure). That means that you can pass any arbitrary getter (of the form `(fn [parent-state])`) and setter (of the form `(fn [parent-state cursor-state])`) and the cursor will handle it.

```clojure
(def my-atom (atom 0))
(defn print-number [my-atom-state]
  ;; print the number with some formmating
)
(defn parse-number [my-atom-state new-cursor-state]
  ;; parse new-cursor-state into a number and return it
  ;; if parsing fails you can just return my-atom-state
  ;; to cancel the update or throw a validation
  ;; exception
)
(def a-str (cursor my-atom print-number parse-number))
;; @a-str -> "0"
(reset! a-str "1.2")
(println @my-atom)
;; 1.2
```

cursors can also be created by passing in a keyword or a key sequence that would be passed to `get-in` or `assoc-in` to the `cursor` function:

```clojure
(def my-atom (atom {:a {:b [{:x 0}]}}))
(def ab0 (cursor my-atom [:a :b 0])) ;; @ab0 -> {:x 0}
(def a (cursor my-atom :a) ;; a keyword can be used as well
```

This is somewhat similar (but not exactly) to cursors in [om][om] - which was the inspiration for cursors in freactive. It should be noted that in freactive, cursors were designed to work with lenses first and then with key or key sequences (`korks`) for convenience. A cursor doesn't know anything about the structure of data it references (i.e. the associative path from parent to child).

## Items View

An experimental `items-view` has been created, but is still a work in progress... This documentation describes the concetp in a very general way.

The idea of the `items-view` is to provide a generic container for large collections of objects that send notifications about exactly which items changed so that diffing is not neeeded. An analogue to this in the desktop UI world is the [WPF `ItemsControl`](http://msdn.microsoft.com/en-us/library/system.windows.controls.itemscontrol%28v=vs.110%29.aspx) which is a base class for `ListView`'s and `TreeView`'s. Basically it allows to framework to observe a collection and add or remove nodes rendering them based on a data template.

In freactive, the `items-view` will take a `container` parameter (hiccup virtual node), a `template-fn` which will receive a single argument representing a `cursor` to a single item in the collection and should return a hiccup virtual node (can be reactive), and a `collection` parameter representing the underlying collection that is being rendered. The `collection` should be satisfy the `IObservableCollection` protocol which is still being fleshed out. A basic implementation of `IObservableCollection` will be provided which wraps an atom containing a Clojure map or vector and provides specific methods for adding/updating/removing individual items so that notifications can be done on an item-specific basis with no need for diffing. This type of idiom will allow for quite large collections. `IObservableCollection` could eventually be extended to support a database-backed collection and then we have something like Meteor in Clojurescript..! The `items-view` should provide built-in support for applying and removing sorts in a stable way, for adding and removing filters and for limiting the displayed elements to a specific range (to support paging and infinite scrolling). It should be agnostic to the underlying `IObservableCollection` as well as the `container` and `template-fn` and do things as generically as possible.

It should be noted that the `items-view` will be orthogonal to the other functionality in freactive - freactive "core" will just attempt to provide idioms which would support an `items-view` and a good out of the box implementation. In reality, `items-view` could be a separate library and alternate implementations could co-exist.

## Debugging Reactive Expressions

Reactive expressions can be hard to debug - sometimes we notice that something should be getting invalidated that isn't or it seems like something is getting updated too often.

The `debug-rx` macro can be placed around the initialization of any `rx`:
```clojure
 (debug-rx (rx (str @n)))
```

and you should seeing verbose debug statements corresponding to:
* start of dependency capture
* each dependency capture
* each invalidation event with a print out of watch keys (note: not all watches aware of this `rx` may be registered - part of freactive's optimizations are smart attaching and removing of watches based on dirty flags)

## Reactive Change Notifications In-depth

### Differences between regular atoms and reactive atoms

In addition to their ability to register themselves as a dependency to an `rx`, reactive `atom`'s have one additional difference from regular `atom`s. Reactive `atom`s do an equality check (using `=`) before completing a change and notifying watches. i.e: they will only report a change when the value actually has changed.

### Eagerness and Laziness

A lazy dependency invalidates a parent `rx` whenever it gets invalidated (but it doesn't check to see if its value has really changed). An eager dependency checks to see if it really has changed before notifying its parent. *By default, `rx`'s are lazy and `cursor`'s are eager*. This is because an `rx` is something whose value almost always changes whenever a dependency changes and a `cursor` is usually something that will only change when its portion of a larger state changes (i.e. the path `[:a :b]` in `{:a {:b 1} c: {:d 2}}`). There is also an `eager-rx` and a `lazy-cursor` if you want to invert this default behavior.

**Details:**

*You probably shouldn't need to understand this  to develop most apps, but it may be useful to those trying to maximize performance in complex situations.*

Laziness relates to the `IInvalidates` protocol which freactive introduces. Basically `IInvalidates` defines three protocol methods: `-add-invalidation-watch`, `-remove-invalidation-watch` and `-notify-invalidations-watches`. These take the same parameters as the corresponding `-add-watch`, `-remove-watch`, etc. methods from `IWatchable`. The only difference is that the callback function should take 2 args (instead of 4): `key` and `ref`. When something is invalidated, we are communicating that it's state will probably change, but that we don't know what the new state is yet!

So, if we register an `invalidation-watch` against an `rx`, it will perform lazily - i.e. it will only compute its new state when we `deref` it. If we register a `watch` against it, it will perform eagerly and it will only notify about state changes (to both watches and invalidation watches) if the value has actually change!

So, how do we make an `rx` or `cursor` lazy or eager? Well, it may seem counter-intuitive, but reactives in freactive actually register their own dependencies. Instead of "registering" with the parent, they look for a `*invalidate-rx*` function to be bound in the current context and they they register it either as a watch or invalidation watch. `*invalidate-rx*` actually should be a `fn` with 0, 2 and 4 arity overloads. The 0 arity-overload allows the dependency to take entire control over the invalidation process and the 2 and 4 arities correspond to invalidation watches and watches respectively. Whenever `*invalidate-rx*` is called, it immediately removes the watch on whatever dependency called it (it will be added the next time the `rx` is `deref`ed if it is still in the `rx` scope.) After some benchmarking, this method seemed to be the most efficient general method.

Anyway, because dependencies register themselves, they can decide whether to register themselves lazily or eagerly. It should be noted that a dependency is eager whenever anything registers a `watch` (as opposed to an `invalidation-watch`) against it. We can override a dependency's choice of eagerness or laziness by `deref`ing them within an `eagerly` or `lazily` macro - if you ever should need that: `(eagerly @a)`.

**Propogation of changes to the DOM:**

Attribute and node change listeners always try to register an `invalidation-watch` first and when not available (for atoms for instance) a `watch`. Whenenver they receive a change notification, they remove the watch, queue an update to the render queue, and add the watch again right before the update is applied (when `deref` is called).

### Deciding not to register a reactive dependency

Sometimes you want to reference a reactive `atom` or `rx` from within an `rx` without registering it as a dependency! Or maybe you want to make sure that in library code, no surrounding `rx` is calling your function. The `non-reactively` macro (in `freactive.macros`) will take care of this:
```clojure
 ;; a is registered as a dependency, but b isn't!
(rx (+ @a (non-reactively @b)))
```

## Contributions

**Contributions (including pull requests) are welcome!**

### TODO list

**If you would like to contribute, here is a list of things that would help get this library to a mature state.** The list is organized by category and relative priority. Each item has a link to an issue which you can comment on, assign to yourself possibly, etc.

Core functionality:
* [Good polyfills for things like `requestAnimationFrame`, `addEventListener`, etc. to support older browsers where feasible](https://github.com/aaronc/freactive/issues/4)
* [Benchmarking of event handlers - do we need to do something like React's synthentic events?](https://github.com/aaronc/freactive/issues/6)

Items view:
* [Efficient algorithms for applying stable (possible in place) sorting to the `items-view`](https://github.com/aaronc/freactive/issues/5)

Animations:
* [A stable (possibly 3rd party) easings library](https://github.com/aaronc/freactive/issues/7). I incorporated some easings from [ominate](https://github.com/danielytics/ominate) - it has some open bug reports - maybe those can be fixed and the easings part can be forked so that it's shared. There's also [tween-clj](https://github.com/gstamp/tween-clj).

More examples and testing on different platforms is always welcome.

Comments, suggestions and questions can be posted here: https://github.com/aaronc/freactive/issues

## License

Distributed under the Eclipse Public License, either version 1.0 or (at your option) any later version.

[dom-perf]: http://aaronc.github.io/freactive/dom-perf
[issues]: https://github.com/aaronc/freactive/issues
[reagent]: https://github.com/reagent-project/reagent
[om]: https://github.com/swannodette/om
[reflex]: https://github.com/lynaghk/reflex
