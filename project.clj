(defproject freactive "0.3.0-SNAPSHOT"
  :description "High-performance, pure Clojurescript, declarative DOM library"
  :url "https://github.com/aaronc/freactive"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/data.avl "0.0.12"]
                 [garden "1.2.5"]
                 [freactive.core "0.2.0-SNAPSHOT"]]
  :profiles
  {:dev
   {:plugins [[lein-cljsbuild "1.0.5"] 
              [lein-figwheel "0.3.3" :exclusions [org.cloure/clojure]]]
    :dependencies
    [[org.clojure/clojure "1.7.0-RC1"]
      [org.clojure/clojurescript "0.0-3269"]
      [figwheel "0.3.3" :exclusions [org.cloure/clojure]]
      [org.clojure/core.async "0.1.346.0-17112a-alpha"]
      [bardo "0.1.0" :exclusions [org.clojure/clojure]]]
     :cljsbuild {:builds
                 [{:id           "example"
                   :source-paths ["src" "example"
                                  "checkouts/freactive.core/src/clojure"
                                  "checkouts/freactive.core/test"]
                   :compiler     {:output-to     "resources/public/js/compiled/app.js"
                                  :output-dir    "resources/public/js/compiled/out"
                                  :optimizations :none
                                  :pretty-print true
                                  :source-map    true}}
                  {:id           "example-advanced"
                   :source-paths ["src" "example" "test" "checkouts/freactive.core/src/clojure"]
                   :compiler     {:output-to     "resources/public/js/compiled/advanced.js"
                                  :output-dir    "resources/public/js/compiled/out-adv"
                                  :optimizations :advanced
                                  :main "freactive.dom-perf"}}]}}}
  :source-paths ["src"]
  :test-paths ["test" "example"])
