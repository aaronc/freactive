(defproject freactive "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha3"]
                 [org.clojure/clojurescript "0.0-2371"]]
  :profiles
  {:dev
    {:plugins [[com.cemerick/austin "0.1.5"]]
     :dependencies
     [[com.cemerick/clojurescript.test "0.3.1"]]}}
  :source-paths ["src/clojure"]
  :javac-options ["-Xlint:unchecked"]
  :java-source-paths ["src/java"])
