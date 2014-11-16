# freactive
*pronounced "eff-reactive" for functional reactive - sorry couldn't think of a better name :/*


freactive is a pure Clojurescript DOM library inspired by work done in reagent, om and reflex (as well as desktop GUI frameworks like QML and JavaFX). It uses hiccup-like vectors as "virtual DOM" nodes and relies heavily on Clojure's built-in deref and atom patterns.



**Goals:**
* Provide a **dead-simple API** that is intuitive and almost obvious for those familiar with Clojure (similar to Reagent)
* All for **high-performance** rendering
* Allow for **reactive binding of any attribute, style property or child node**
* Provide a **deeply-integrated animation** framework
* **Minimize unnecessary triggering of update events**
* Allow for **coordinated management of state via cursors** (as in Om)
* Be written in **pure Clojurescript**
* Coordinate all updates via **requestAnimationFrame** where possible
* Provide a generic items view component for **efficient binding to large data sets**



