(defproject allgress/freactive "0.3.0"
  :description "High-performance, pure Clojurescript, declarative DOM library"
  :url "https://github.com/aaronc/freactive"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-RC2"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [garden "1.2.5"]
                 [freactive.core "0.2.0-SNAPSHOT"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [bardo "0.1.0" :exclusions [org.clojure/clojure]]])
