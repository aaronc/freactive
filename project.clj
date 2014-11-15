(defproject freactive "0.1.0"
  :description "Reactive atoms, expressions and cursors for Clojure"
  :url "https://github.com/aaronc/freactive"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha3"]
                 [org.clojure/clojurescript "0.0-2371"]]
  :profiles
  {:dev
    {:plugins [[com.cemerick/austin "0.1.5"]
               [lein-cljsbuild "1.0.3"] ;; 1.0.3 is a requirement
               [lein-figwheel "0.1.5-SNAPSHOT"]]
     :dependencies
     [[com.cemerick/clojurescript.test "0.3.1"]
      [figwheel "0.1.5-SNAPSHOT"]]
     :resource-paths ["example"]
     :cljsbuild {:builds [{:id           "example"
                           :source-paths ["src/clojure" "test"]
                           :compiler     {:output-to     "resources/public/js/compiled/app.js"
                                          :output-dir    "resources/public/js/compiled/out"
                                          :optimizations :none
                                          :source-map    true}}]}
     }}
  :source-paths ["src/clojure"]
  :javac-options ["-Xlint:unchecked"]
  :java-source-paths ["src/java"])
