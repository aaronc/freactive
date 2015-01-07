(defproject freactive "0.2.0-SNAPSHOT"
  :description "High-performance, pure Clojurescript, declarative DOM library"
  :url "https://github.com/aaronc/freactive"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha4"]
                 [org.clojure/clojurescript "0.0-2498"]
                 [org.clojure/data.avl "0.0.12"]]
  :profiles
  {:dev
    {:plugins [[com.cemerick/austin "0.1.5"]
               [lein-cljsbuild "1.0.3"] 
               [lein-figwheel "0.2.0-SNAPSHOT"]]
     :dependencies
     [[com.cemerick/clojurescript.test "0.3.1"]
      [figwheel "0.2.0-SNAPSHOT"]
      [org.clojure/core.async "0.1.346.0-17112a-alpha"]
      [bardo "0.1.0" :exclusions [org.clojure/clojure]]]

     :cljsbuild {:builds
                 [{:id           "example"
                   :source-paths ["src-cljs" "example"]
                   :compiler     {:output-to     "resources/public/js/compiled/app.js"
                                  :output-dir    "resources/public/js/compiled/out"
                                  :optimizations :none
                                  :pretty-print true
                                  :source-map    true}}]}}}
  :source-paths ["src/clojure" "src-cljs"]
  :test-paths ["test" "example"]
  :javac-options ["-Xlint:unchecked"]
  :java-source-paths ["src/java"])
