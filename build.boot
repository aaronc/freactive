(set-env!
  :source-paths #{"src" "test"}
  :resource-paths #{"src"}
  :wagons '[[s3-wagon-private "1.1.2"]]
  :repositories [["clojars" "http://clojars.org/repo/"]
                 ["maven-central" "http://repo1.maven.org/maven2/"]
                 ["my.datomic.com" {:url "https://my.datomic.com/repo"
                                    :username (System/getenv "DATOMIC_USERNAME")
                                    :password (System/getenv "DATOMIC_PASSWORD")}]
                 ["releases" {:url "http://archiva:8080/repository/internal"
                              :username (System/getenv "ARCHIVA_USERNAME")
                              :password (System/getenv "ARCHIVA_PASSWORD")}]]

  :dependencies '[[adzerk/boot-cljs "0.0-3308-0" :scope "test"]
                  [adzerk/boot-cljs-repl "0.1.9" :scope "test"]
                  [adzerk/boot-reload "0.3.1" :scope "test"]
                  [pandeiro/boot-http "0.6.2" :scope "test"]
                  [cljsjs/boot-cljsjs "0.5.0" :scope "test"]
                  [allgress/boot-tasks "0.2.2" :scope "test"]])

(require
  '[adzerk.boot-cljs :refer :all]
  '[adzerk.boot-cljs-repl :refer :all]
  '[adzerk.boot-reload :refer :all]
  '[allgress.boot-tasks :refer :all]
  '[pandeiro.boot-http :refer :all]
  '[cljsjs.boot-cljsjs :refer :all])

(set-project-deps!)

(default-task-options!)

(task-options!
  reload {:on-jsload 'allgress.cereus.core/on-jsload})

(deftask web-dev
         "Developer workflow for web-component UX."
         []
         (comp
           (asset-paths :asset-paths #{"html" "bower_components"})
           (from-cljsjs)
           (serve :dir "target/")
           #_(run-jar :jarfile "../web/target/web_0.7.0_standalone.jar -e pluto -a admin -p 8081")
           ;;(run-jar :jarfile "../login/target/login-0.1.2.jar")
           ;;(run-jar :jarfile "../account-manager/target/account-manager-0.1.5.jar")
           (watch)
           (speak)
           (cljs)
           (reload)))






(comment
  (run-jar :jarfile "../web/target/web-0.3.0.jar -e dev")
  (run-jar :jarfile "../login/target/login-0.1.2.jar -e dev")
  (run-jar :jarfile "../account-manager/target/account-manager-0.1.5.jar -e dev"))