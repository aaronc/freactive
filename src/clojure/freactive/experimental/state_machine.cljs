(ns freactive.experimental.state-machine)

(deftype StateMachine [state state-transitions allowed-states default-accept
                       watches]
  Object
  (equiv [this other]
    (-equiv this other))

  IReactive
  (-raw-deref [_] state)

  cljs.core/IEquiv
  (-equiv [o other] (identical? o other))

  cljs.core/IDeref
  (-deref [this]
    (when-let [invalidate *invalidate-rx*]
      (-add-watch this invalidate invalidate)
      (when *trace-capture* (*trace-capture* this)))
    state)

  IMeta
  (-meta [_] meta)

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<StateMachine: ")
    (pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f))
    this)
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog/getUid this))

  IReset
  (-reset! [this new-state]
    (let [old-state state]
      (when-not (keyword-identical? new-state old-state)
        (set! (.-state this) new-state)
        (-notify-watches this old-state new-state)))
    state))

(defn- test-transition
  ([transition]
   (cond
     (or (nil? transition)
         (undefined? transition)) nil
     (identical? transition true) true
     (identical? transition false) false
     :default (transition)))
  ([transition arg]
   (cond
     (or (nil? transition)
         (undefined? transition)) nil
     (identical? transition true) true
     (identical? transition false) false
     :default (transition arg))))

(defn- test-from-to [transitions from to]
  (test-transition
    (get transitions
         (keyword (str "from-" (name from)
                       "-to-" (name to))))))

(defn- test-from [transitions from to]
  (test-transition
    (get transitions
         (keyword (str "from-" (name from))))
    to))

(defn- test-to [transitions from to]
  (test-transition
    (get transitions
         (keyword (str "to-" (name to))))
    from))

(defn transition!
  "Attempts to transition the state-machine to the requested-state. Returns
  the state of the machine after the request has been made."
  [state-machine requested-state]
  (let [cur-state (.-state state-machine)]
    (if-not (keyword-identical? cur-state requested-state)
      (let [transitions (.-state-transitions state-machine)
            allowed-states (.-allowed-states state-machine)]
        (if
          (and
            (if allowed-states
              (allowed-states requested-state)
              true)
            (let [from-to (test-from-to transitions cur-state requested-state)]
              (if-not (nil? from-to)
                from-to
                (let [from (test-from transitions cur-state requested-state)]
                  (if-not (nil? from)
                    (when from
                      (let [to (test-to transitions cur-state requested-state)]
                        (if-not (nil? to)
                          to
                          (.-default-accept state-machine))))
                    (let [to (test-to transitions cur-state requested-state)]
                      (if-not (nil? to)
                        to
                        (.-default-accept state-machine))))))))

          (do
            (set! (.-state state-machine) requested-state)
            (-notify-watches state-machine cur-state requested-state)
            ;(println "from" cur-state "to" requested-state)
            requested-state)
          cur-state))
      cur-state)))

(defn state-machine
  "Takes an initial-state and a map of state-transitions.

  A state transition is named by a keyword that can be prefixed with either
  :from- and to-. A convenience :from-state1-to-state2 form is
  also allowed.

  :from- and :to- transitions are used as tests to check if a requested
  transiton is allowed and should either be a function taking a single parameter
  representing the requested state (for :from- transitions) or the current state
  (for :to- transitions) - or - a boolean value representing an unconditional
  accept/reject for that transition. In order for a :from- or :to- transition
  to succeed it must return a truthy value. If the matching transition
  function is not found the :default-accept policy will be used. Convienence
  :from-state1-to-state2 will take priority over :from- and :to- transitions
  and take a 0-arity function or a boolean value.

  For example, if the current state is :off and the state
  requested is :on, The state machine will attempt to first to find a
  transition named :from-off. If that succeeds it will look for a :to-on
  transition. If that succeeds, the new state will be :on.

  A set of allowed-states can also be defined and any other states will be
  rejected.
  "
  [initial-state state-transitions
   & {:keys [default-accept allowed-states]
      :or  {default-accept true}}]
  (assert (keyword? initial-state) "state must be keyword")
  (when allowed-states
    (assert (set? allowed-states) "allowed-states must be a set")
    (assert (allowed-states initial-state) "initial-state must be in allowed states"))
  (StateMachine. initial-state state-transitions allowed-states default-accept nil))


(def s0 (state-machine :x {:from-x-to-y false}))
(transition! s0 :y)
