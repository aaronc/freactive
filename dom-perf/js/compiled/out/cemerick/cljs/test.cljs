(ns cemerick.cljs.test
  (:require-macros [cemerick.cljs.test :refer (with-test-out test-runner-entry-point)])
  (:require [clojure.string :as str])
  (:refer-clojure :exclude (set-print-fn!)))

; *print-fn* for emitting test output; captured by `init-test-environment`
(def ^:dynamic *test-print-fn* nil)

; when true, indicates that a particular test-running function is the user's
; entry point
(def ^:dynamic ^:private *entry-point* true)

; bound to the current "test context" for the duration of _synchronous_ tests
; this remains nil for all ^:async tests
(def ^:dynamic *test-ctx* nil)

;; The globals that clojure.test uses for reporting functions are folded in the
;; "test environment" that is explicitly passed around

(defn- init-test-environment*
  [aux-data]
  (atom (-> {:test 0, :pass 0, :fail 0, :error 0}
            (merge (when *test-print-fn* {::test-print-fn *test-print-fn*}))
            ; corresponds to *testing-contexts* in clojure.test:
            ; a hierarchy of "testing" strings
            (assoc ::test-contexts ())
            (merge aux-data))))

(defn- init-test-environment
  []
  (doto (init-test-environment*
         {; corresponds to *testing-vars* in clojure.test: 
          ; a hierarchy of "vars" (actually, symbols naming top-levels) being tested
          ; not used w/ async test lifecycle at all
          ; TODO does the pervasive availability of test-name make this irrelevant?
          ; it's a stack, but I don't grok/remember the use case for it
          ::test-functions ()})
    (swap! assoc :async (init-test-environment* {}))))

;;; "Namespaces are one honking great idea -- let's do more of those!"
; atom mapping namespace symbols to maps of "var" name => test function
(def registered-tests (atom {}))
; atom mapping namespace symbols to top-level namespace-hook fns
(def registered-test-hooks (atom {}))
; atom mapping namespace symbols to collections of fixture HOFs
(def registered-fixtures (atom {}))

(defn register-test!
  [ns name fn]
  (swap! registered-tests update-in [ns] assoc name fn))

(defn register-test-ns-hook!
  [ns name]
  (swap! registered-test-hooks assoc ns name))

(defrecord TestContext [test-env test-name])

;;; UTILITIES FOR REPORTING FUNCTIONS

(defn- maybe-deref
  [x]
  (if (satisfies? cljs.core/IDeref x) @x x))

(defn testing-complete?
  [test-env]
  (let [{remaining ::remaining
         running ::running
         async :async} (maybe-deref test-env)]
    (and (empty? remaining)
         (empty? running)
         (or (nil? async)
             (testing-complete? async)))))

; exported for test runners
(defn ^:export on-async-progress
  "Registers a watcher on the :async testing (sub)environment provided by
[test-env]; when its key metrics (:test, :pass, :fail, :error) change,
[callback] will be called with [test-env].  The watcher will be removed when all
tests are complete.

If [test-env] is already complete, [callback] will be called with it as an
argument immediately, and no watcher will be registered."
  [test-env callback]
  (if (testing-complete? test-env)
    (js/setTimeout #(callback test-env) 1)
    (add-watch (:async (maybe-deref test-env))
              (gensym "on-progress")
              (fn [key ref old new]
                (let [[oldv newv] (map #(select-keys % [:test :pass :fail :error]) [old new])
                      complete? (testing-complete? new)]
                  (when (or complete? (not= oldv newv))
                    (callback (maybe-deref test-env)))
                  (when complete? (remove-watch ref key))))))
  test-env)

(defn ^:export on-testing-complete
  "Same as `on-async-progress`, but will only call [callback] when all tests are complete."
  [test-env callback]
  (on-async-progress test-env (fn [test-env]
                                (when (testing-complete? test-env)
                                  (callback test-env)))))

(defn testing-vars-str
  "Returns a string representation of the current test.  Renders names
  in the test environment's ::test-functions list, then the source file and line of
  current assertion."
  {:added "1.1"}
  [{:keys [file line test-env test-name] :as m}]
  (str
   (pr-str (or (seq (reverse (::test-functions @test-env)))
               (list test-name)))
   " (" file ":" line ")"))

(defn testing-contexts-str
  "Returns a string representation of the current test context as represented in
  the [test-env]'s ::test-contexts list. Joins strings in that list with
  spaces."
  {:added "1.1"}
  [test-env]
  (apply str (interpose " " (reverse (::test-contexts @test-env)))))

(defn inc-report-counter
  "Increments the named counter in the [test-env] atom."
  {:added "1.1"}
  [test-env name]
  (swap! test-env update-in [name] (fnil inc 0)))

;;; TEST RESULT REPORTING

(defmulti
  ^{:doc "Generic reporting function, may be overridden to plug in
   different report formats (e.g., TAP, JUnit).  Assertions such as
   'is' call 'report' to indicate results.  The argument given to
   'report' will be a map with a :type key.  See the documentation at
   the top of test_is.clj for more information on the types of
   arguments for 'report'."
     :dynamic true
     :added "1.1"}
  report :type)

; TODO this just doesn't work, at least not on the REPL
(defn- file-and-line 
  [error]
  {:file (.-fileName error) :line (.-lineNumber error)})

(defn do-report
  "Add file and line information to a test result and call report.
   If you are writing a custom assert-expr method, call this function
   to pass test results to report."
  {:added "1.2"}
  ([{:keys [test-env test-name] :as test-ctx} m]
     {:pre [(instance? TestContext test-ctx)]}
     (do-report (merge m test-ctx)))
  ([m]
     (report (case (:type m)
               :fail (merge (file-and-line (js/Error)) m)
               :error (merge (file-and-line (:actual m)) m) 
               m))))

(defmethod report :default [{:keys [test-env] :as m}]
  (with-test-out test-env (prn m)))

(defmethod report :pass [{:keys [test-env] :as m}]
  (with-test-out test-env (inc-report-counter test-env :pass)))

(defmethod report :fail [{:keys [test-env] :as m}]
  (with-test-out test-env
    (inc-report-counter test-env :fail)
    (println "\nFAIL in" (testing-vars-str m))
    (when (seq (::test-contexts @test-env))
      (println (testing-contexts-str test-env)))
    (when-let [message (:message m)] (println message))
    (println "expected:" (pr-str (:expected m)))
    (println "  actual:" (pr-str (:actual m)))))

(defmethod report :error [{:keys [test-env] :as m}]
  (with-test-out test-env
   (inc-report-counter test-env :error)
   (println "\nERROR in" (testing-vars-str m))
   (when (seq (::test-contexts @test-env))
      (println (testing-contexts-str test-env)))
   (when-let [message (:message m)] (println message))
   (println "expected:" (pr-str (:expected m)))
   (print "  actual: ")
   (let [actual (:actual m)]
     (if (instance? js/Error actual)
       (println (.-stack actual))
       (prn actual)))))

(defmethod report :multiple-async-done [{:keys [test-env] :as m}]
  (with-test-out test-env
    (inc-report-counter test-env :multiple-async-done)
    (println "\nWARNING in" (testing-vars-str m))
   (when (seq (::test-contexts @test-env))
      (println (testing-contexts-str test-env)))
   (when-let [message (:message m)] (println message))))

(defmethod report :summary [{:keys [test pass fail error] :as test-env}]
  (with-test-out test-env
   (println "\nRan" test "tests containing"
            (+ pass fail error) "assertions.")
   (if-let [^number pending-count
            (and (not (testing-complete? test-env))
                 (->> @(:async  test-env)
                      ((juxt ::remaining ::running))
                      (map count)
                      (apply +)))]
     (println "Waiting on" pending-count
              (str "asynchronous test"
                   (when (> pending-count 1) "s")
                   " to complete."))
     (println "Testing complete:" fail "failures," error "errors."))))

(defmethod report :begin-test-ns [{:keys [ns test-env async] :as m}]
  (with-test-out test-env
   (println "\nTesting" ns (if async "(async)" ""))))

;; Ignore these message types:
(defmethod report :end-test-ns [{:keys [test-env] :as m}])
(defmethod report :begin-test-var [{:keys [test-env] :as m}])
(defmethod report :end-test-var [{:keys [test-env] :as m}])



;;; REGISTERING FIXTURES

(defn register-fixtures!
  "Wrap test runs in a fixture function to perform setup and
  teardown. Using a fixture-type of :each wraps every test
  individually, while :once wraps the whole run in a single function."
  [ns-sym fixture-type & fixture-fns]
  (swap! registered-fixtures update-in [ns-sym fixture-type] (constantly fixture-fns)))

(defn- default-fixture
  "The default, empty, fixture function.  Just calls its argument."
  {:added "1.1"}
  [f]
  (f))

(defn compose-fixtures
  "Composes two fixture functions, creating a new fixture function
  that combines their behavior."
  {:added "1.1"}
  [f1 f2]
  (fn [g] (f1 (fn [] (f2 g)))))

(defn join-fixtures
  "Composes a collection of fixtures, in order.  Always returns a valid
  fixture function, even if the collection is empty."
  {:added "1.1"}
  [fixtures]
  (reduce compose-fixtures default-fixture fixtures))

;;; SUPPORTING ASYNC

(defn- async-test?
  [test-fn]
  (boolean (:async (meta test-fn))))

(defn- test-async-fn
  [async-test-env test-name test-fn]
  (do-report {:type :begin-test-var, :var test-fn
              :test-env async-test-env :test-name test-name})
  (inc-report-counter async-test-env :test)
  (test-fn (TestContext. async-test-env test-name)))

(defn- start-next-async-test
  [async-test-env]
  (let [next-test (atom (fn []))]
    (swap! async-test-env
           (fn [env]
             (if-let [[name testfn] (and (not (:stop env))
                                         (first (::remaining env)))]
               ; let the test env change before starting the test
               (do (reset! next-test testfn)
                   (let [ns (namespace name)]
                     (when-not (contains? (:namespaces (meta async-test-env)) ns)
                       (do-report {:type :begin-test-ns, :ns ns
                                   :test-env async-test-env :async true})
                       (alter-meta! async-test-env update-in [:namespaces]
                                    (fnil conj #{}) ns)))
                   (-> (update-in env [::remaining] dissoc name)
                       (update-in [::running] assoc name (js/Date.))))
               env)))
    ; need this extra fn because fns with metadata aren't actually JS fns...
    (js/setTimeout (fn [] (@next-test)) 1)
    async-test-env))

; TODO this is okay, but still leaves the junk in the :async (sub)environment
; (which can't be scrubbed until all async tests are done)
(defn- squelch-internals
  "Removes framework-internal bits from a test environment for more pleasant human viewing."
  [test-env]
  (doto test-env
    (swap! #(reduce (fn [env [k v]]
                      (if (= (namespace k) (namespace ::foo))
                        env
                        (assoc env k v)))
                    {}
                    %))))

(defn- finish-test-entry-point
  [entry-point? test-env]
  (if entry-point?
    (do (if (empty? (::remaining @(:async @test-env)))
          (swap! test-env dissoc :async)
          (start-next-async-test (:async @test-env)))
        @(squelch-internals test-env))
    test-env))

(defn- schedule-async-test
  [async-test-env test-name test-fn]
  (swap! async-test-env update-in [::remaining]
         (fnil assoc (sorted-map))
         test-name (with-meta #(test-async-fn async-test-env test-name test-fn)
                     {:name test-name}))
  async-test-env)

(defn done*
  ([{:keys [test-env test-name] :as test-ctx} error]
     {:pre [(instance? TestContext test-ctx)]}
     (do-report (do-report (merge {:type :error :message "Uncaught exception, not in assertion."
                                   :expected nil :actual error}
                                  test-ctx)))
     (done* test-ctx))
  ([{async-test-env :test-env :keys [test-name] :as test-ctx}]
     {:pre [(instance? TestContext test-ctx)]}
     (let [first-call? (atom false)]
       (swap! async-test-env
              (fn [env]
                (reset! first-call? (contains? (::running env) test-name))
                ; TODO might be interesting to report runtimes?
                (update-in env [::running] dissoc test-name)))
       (if @first-call?
         (do
           (do-report (merge {:type :end-test-var, :var test-name}
                             test-ctx))
           (if (testing-complete? async-test-env)
             (squelch-internals async-test-env)
             (start-next-async-test async-test-env)))
         (do-report (merge {:type :multiple-async-done
                            :message "`(done)` called multiple times to signal end-of-test"}
                           test-ctx)))

       async-test-env)))

(defn stop
  [async-test-env]
  (swap! async-test-env assoc :stop true))



;;; RUNNING TESTS: LOW-LEVEL FUNCTIONS


(defn test-function
  "If v has a function in its :test metadata, calls that function,
  conjing its name into the test environment's ::test-functions list.

  Note that this is the implementation of `test-var` in clojure.test,
  which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
  in the Clojure file for `test-var`."
  {:dynamic true, :added "1.1"}
  ([v] (test-function (init-test-environment) v))
  ([test-env v]
     (test-runner-entry-point test-env
      (assert (fn? v) "test-var must be passed the function to be tested (not a symbol naming it)")
      (let [{t :test test-name :name async? :async} (meta v)]
        (when t
          (if async?
            (schedule-async-test (:async @test-env) test-name t)
            (try
             (swap! test-env update-in [::test-functions] conj (or test-name v))
             (do-report {:type :begin-test-var :var v
                         :test-env test-env :test-name test-name})
             (inc-report-counter test-env :test)
             (try (t (TestContext. test-env test-name))
                  (catch js/Error e
                    (do-report {:type :error :message "Uncaught exception, not in assertion."
                                :test-env test-env :test-name test-name
                                :expected nil :actual e})))
             (do-report {:type :end-test-var :var v
                         :test-env test-env :test-name test-name})
             (finally
               (swap! test-env update-in [::test-functions] pop)))))))))



(defn test-all-vars
  "Calls test-var on every var interned in the namespace, with fixtures."
  {:added "1.1"}
  ([ns-sym] (test-all-vars (init-test-environment) ns-sym))
  ([test-env ns-sym]
     (test-runner-entry-point test-env
      (let [tests (filter #(:test (meta %)) (vals (get @registered-tests ns-sym)))]
        (let [once-fixture-fn (-> @registered-fixtures ns-sym :once join-fixtures)
              each-fixture-fn (-> @registered-fixtures ns-sym :each join-fixtures)]
          (once-fixture-fn
           (fn []
             (doseq [v (remove async-test? tests)]
               (each-fixture-fn (fn [] (test-function test-env v)))))))
        
        (reduce #(apply schedule-async-test % %2)
                (:async @test-env)
                (map (comp (juxt :name :test) meta)
                     (filter async-test? tests)))))))

(defn test-ns
  "If the namespace defines a function named test-ns-hook, calls that.
  Otherwise, calls test-all-vars on the namespace.  'ns' is a
  namespace object or a symbol.

  Internally binds *report-counters* to an atom initialized to
  *inital-report-counters*.  Returns the final, dereferenced state of
  *report-counters*."
  {:added "1.1"}
  ([ns-sym] (test-ns (init-test-environment) ns-sym))
  ([test-env ns-sym]
     (test-runner-entry-point test-env
      (do-report {:type :begin-test-ns, :ns ns-sym
                  :test-env test-env})
      ;; If the namespace has a test-ns-hook function, call that:
      (if-let [test-hook (get @registered-test-hooks ns-sym)]
        (test-hook test-env)
        ;; Otherwise, just test every var in the namespace.
        (test-all-vars test-env ns-sym))

      (do-report {:type :end-test-ns, :ns ns-sym, :test-env test-env}))))

;;; RUNNING TESTS: HIGH-LEVEL FUNCTIONS

(defn- test-summary
  [test-env]
  (let [test-env (maybe-deref test-env)]
    (do-report (assoc (merge-with + test-env (maybe-deref (:async test-env)))
                 :type :summary))))

(defn ^:export run-tests*
  "Runs all tests in the given namespaces; prints results.
  Defaults to current namespace if none given.  Returns a map
  summarizing test results."
  {:added "1.1"}
  [& namespaces]
  (let [[test-env & namespaces] (if (instance? cljs.core.Atom (first namespaces))
                                  namespaces
                                  (cons (init-test-environment) namespaces))]
    (test-runner-entry-point
     test-env
     (doseq [ns (distinct namespaces)] (test-ns test-env ns))
     (on-testing-complete test-env test-summary)
     (test-summary test-env))))

(defn ^:export run-all-tests
  "Runs all tests in all namespaces; prints results.
  Optional argument is a regular expression; only namespaces with
  names matching the regular expression (with re-matches) will be
  tested."
  {:added "1.1"}
  ([] (apply run-tests* (keys @registered-tests)))
  ([re] (apply run-tests* (filter #(re-matches re (name %)) (keys @registered-tests)))))

(defn ^:export successful?
  "Returns true if the given test summary indicates all tests
  were successful, false otherwise."
  {:added "1.1"}
  [test-env]
  (let [{:keys [fail error async]} (maybe-deref test-env)]
    (and (testing-complete? test-env)
         (zero? (or fail 0))
         (zero? (or error 0))
         (or (nil? async)
             (successful? async)))))

(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))
