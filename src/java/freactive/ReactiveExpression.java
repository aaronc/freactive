package freactive;

import clojure.lang.*;

import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.Map;

public class ReactiveExpression implements IReactiveRef {
    static final IReactive.BindingInfo LazyBindingInfo =
            new BindingInfo(new AFn() {
                @Override
                public Object invoke(Object self) {
                    return ((ReactiveExpression) self).rawDeref();
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key, Object f) {
                    return ((IInvalidates) self).addInvalidationWatch(key, (IFn) f);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key) {
                    return ((IInvalidates) self).removeInvalidationWatch(key);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self) {
                    ((ReactiveExpression)self).clean();
                    return null;
                }
            });

    public static final IReactive.BindingInfo EagerBindingInfo =
            new BindingInfo(new AFn() {
                @Override
                public Object invoke(Object self) {
                    return ((ReactiveExpression) self).rawDeref();
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key, Object f) {
                    return ((IRef) self).addWatch(key, (IFn)f);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key) {
                    return ((IRef) self).removeWatch(key);
                }
            }, null);

    protected final AtomicReference<Object> state = new AtomicReference<Object>(null);
    protected IFn func;
    private final AtomicBoolean dirty = new AtomicBoolean(true);
    private final boolean lazy;
    private CallbackSet invalidationWatches;
    private CallbackSet watches;
    private final Atom deps = new Atom(PersistentHashMap.EMPTY);

    public ReactiveExpression(IFn func) {
        this(func, true);
    }

    public ReactiveExpression(IFn func, boolean lazy) {
        this.func = func;
        this.lazy = lazy;
    }

    @Override
    public IInvalidates addInvalidationWatch(Object key, IFn callback) {
        if(invalidationWatches == null) invalidationWatches = new CallbackSet(this);
        invalidationWatches.add(key, callback);
        return this;
    }

    @Override
    public IInvalidates removeInvalidationWatch(Object key) {
        if(invalidationWatches != null) invalidationWatches.remove(key);
        return this;
    }

    @Override
    public IPersistentMap getWatches() {
        return watches.getCallbacks();
    }

    @Override
    public IRef addWatch(Object key, IFn iFn) {
        if(watches == null) watches = new CallbackSet(this);
        watches.add(key, iFn);
        return this;
    }

    @Override
    public IRef removeWatch(Object key) {
        if(watches != null) watches.remove(key);
        return this;
    }

    @Override
    public BindingInfo getBindingInfo() {
        if(lazy) return LazyBindingInfo;
        else return EagerBindingInfo;
    }

    class RegisterDep extends AFn {
        public Object invoke(Object dep, Object binfo) {
            deps.swap(new AFn() {
                @Override
                public Object invoke(Object state) {
                    return ((IPersistentMap)state).assoc(dep, binfo);
                }
            });

            BindingInfo bindingInfo = (BindingInfo)binfo;
            IFn addWatch = bindingInfo.getAddWatch();
            IFn removeWatch = bindingInfo.getRemoveWatch();

            addWatch.invoke(dep, this, new AFn() {
                @Override
                public Object invoke() {
                    removeWatch.invoke(dep, this);
                    deps.swap(new AFn() {
                        @Override
                        public Object invoke(Object state) {
                            return ((IPersistentMap) state).without(dep);
                        }
                    });
                    invalidate();
                    return null;
                }

                @Override
                public Object invoke(Object arg1) {
                    return invoke();
                }

                @Override
                public Object invoke(Object arg1, Object arg2) {
                    return invoke();
                }

                @Override
                public Object invoke(Object arg1, Object arg2, Object arg3) {
                    return invoke();
                }

                @Override
                public Object invoke(Object arg1, Object arg2, Object arg3, Object arg4) {
                    return invoke();
                }
            });
            return null;
        }
    }

    private final RegisterDep registerDep = this.new RegisterDep();

    private void invalidate() {
        if(dirty.compareAndSet(false, true)) {
            if(watches != null && !watches.empty()) {
                compute();
            } else {
                invalidationWatches.invokeAll();
            }
        }
    }

    protected Object compute() {
        for(; ;) {
            dirty.set(false);
            Object v = state.get();
            Object newv = func.invoke();
            if(state.compareAndSet(v, newv)) {
                if(v != newv) {
                    watches.invokeAll(v, newv);
                    invalidationWatches.invokeAll();
                }
                return newv;
            }
        }
    }

    public Object rawDeref() {
        if(!dirty.get())
            return state.get();

        try {
            Var.pushThreadBindings(RT.map(REGISTER_DEP, registerDep));
            return compute();
        }
        finally {
            Var.popThreadBindings();
        }
    }
    
    public Object deref() {
        IReactive.registerDep(this, getBindingInfo());
        return rawDeref();
    }

    @Override
    public IFn getValidator() {
        return null;
    }

    @Override
    public void setValidator(IFn vf) {
        throw new UnsupportedOperationException();
    }

    public void clean() {
        if((watches == null || watches.empty()) &&
           (invalidationWatches == null || invalidationWatches.empty())) {
            for(; ;) {
                Object depsMap = deps.deref();
                if(deps.compareAndSet(depsMap, PersistentHashMap.EMPTY)) {
                    for(ISeq es = RT.seq(depsMap); es != null; es = es.next())
                    {
                        Map.Entry e = (Map.Entry)es.first();
                        BindingInfo bindingInfo = (BindingInfo)e.getValue();
                        Object dep = e.getKey();
                        bindingInfo.getRemoveWatch().invoke(dep , this);
                        IFn clean = bindingInfo.getClean();
                        if(clean != null)
                            clean.invoke(dep);
                    }
                    invalidate();
                }
            }
        }
    }
}
