package freactive;

import clojure.java.api.Clojure;
import clojure.lang.*;

import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

public class Cursor implements IReactiveAtom, ITransientMap, ITransientVector, IObservableCollection, ITransactableCollection, IHasCursors, IKeyedCursor {
    private static final IReactive.BindingInfo EagerBindingInfo =
            new BindingInfo(new AFn() {
                @Override
                public Object invoke(Object self) {
                    return ((ReactiveExpression) self).rawDeref();
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key, Object f) {
                    return ((IRef) self).addWatch(key, (IFn) f);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key) {
                    return ((IRef) self).removeWatch(key);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self) {
                    ((Cursor)self).clean();
                    return null;
                }
            });

    protected final IReactiveAtom source;
    private final Object cursorKey;
    private volatile Object curView;
    private volatile Object cur;
    private CallbackSet invalidationWatches;
    private CallbackSet watches;
    private CallbackSet subscribers;
    private Atom cursors;
    private final boolean lazy = false;
    private final AtomicBoolean dirty = new AtomicBoolean(true);
    private final IFn viewTransform;
    private final IFn swapper;
    private final ThreadLocal<Object> txState = new ThreadLocal<Object>();
    private final ThreadLocal<IPersistentVector> txChanges = new ThreadLocal<IPersistentVector>();

    private static final IFn CORE_GET = Clojure.var("clojure.core/get");

    public Cursor(final Cursor source, final Object key)
    {
        this(source, null, new AFn() {
            @Override
            public Object invoke(Object state) {
                return CORE_GET.invoke(state, key);
            }
        }, new AFn() {
                @Override
                public Object invoke(Object fn) {
                    return source.update(key, (IFn)fn);
                }
        }, key);
    }

    public Cursor(final IReactiveAtom source, final IFn viewTransform, final IFn updateTranform) {
        this(source, null,
                viewTransform, new AFn() {
                    @Override
                    public Object invoke(Object fn) {
                        return viewTransform.invoke(source.swap(updateTranform, fn));
                    }
                }, null);
    }

    public Cursor(final IReactiveAtom source, BindingInfo bindingInfo, final IFn viewTransform, final IFn swapper, Object key) {
        this.source = source;
        this.viewTransform = viewTransform;
        this.swapper = swapper;
        this.cursorKey = key;
        bindingInfo.getAddWatch().invoke(source, this,
                new AFn() {
                    @Override
                    public Object invoke() {
                        return super.invoke();
                    }
                }
        );
        source.addInvalidationWatch(this, new AFn() {
            @Override
            public Object invoke(Object arg1, Object arg2) {
                if(lazy) {
                    if(dirty.compareAndSet(false, true)) {
                        if(invalidationWatches != null)
                            invalidationWatches.invokeAll();
                    }
                } else {
                    cur = source.deref();
                    Object newView = viewTransform.invoke(cur);
                    if(!newView.equals(curView)) {
                        curView = newView;
                        if(invalidationWatches != null)
                            invalidationWatches.invokeAll();
                    }
                }
                return null;
            }
        });
        source.addWatch(this, new AFn() {
            @Override
            public Object invoke(Object k, Object r, Object o, Object n) {
                cur = n;
                Object newView = viewTransform.invoke(cur);
                if(!newView.equals(curView)) {
                    Object oldView = curView;
                    curView = newView;
                    if(watches != null)
                        watches.invokeAll(oldView, newView);
                }
                return null;
            }
        });
    }

    @Override
    public Object swap(final IFn f) {
        return swapper.invoke(f);
    }

    @Override
    public Object swap(final IFn f, final Object arg) {
        return swapper.invoke(
                new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        return f.invoke(state, arg);
                    }
                }
        );
    }

    @Override
    public Object swap(final IFn f, final Object arg1, final Object arg2) {
        return swapper.invoke(
                new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        return f.invoke(state, arg1, arg2);
                    }
                }
        );
    }

    @Override
    public Object swap(final IFn f, final Object x, final Object y, final ISeq args) {
        return swapper.invoke(
                new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        return f.applyTo(RT.listStar(state, x, y, args));
                    }
                }
        );
    }

    @Override
    public boolean compareAndSet(Object oldv, Object newv) {
        throw new UnsupportedOperationException("compareAndSet not supported for cursors");
    }

    @Override
    public Object reset(final Object newval) {
        return swapper.invoke(
                new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        return newval;
                    }
                }
        );
    }

    @Override
    public IInvalidates addInvalidationWatch(Object key, IFn callback) {
        source.addInvalidationWatch(key, callback);
        return this;
    }

    @Override
    public IInvalidates removeInvalidationWatch(Object key) {
        source.removeInvalidationWatch(key);
        return this;
    }

    @Override
    public void setValidator(IFn iFn) {
        throw new UnsupportedOperationException();
    }

    @Override
    public IFn getValidator() {
        throw new UnsupportedOperationException();
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
    public Object deref() {
        if(dirty.get())
            curView = viewTransform.invoke(source.deref());
        return curView;
    }

    @Override
    public ITransientMap assoc(final Object k, final Object v) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                txState.set(((Associative) txState.get()).assoc(k, v));
                txChanges.set(txChanges.get().cons(PersistentVector.create(k, v)));
                return null;
            }
        });
        return this;
    }

    @Override
    public ITransientMap without(final Object k) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                txState.set(((IPersistentMap)txState.get()).without(k));
                txChanges.set(txChanges.get().cons(PersistentVector.create(k)));
                return null;
            }
        });
        return this;
    }

    @Override
    public ITransientCollection conj(final Object o) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                Object state = txState.get();
                if(state instanceof IPersistentMap)
                    conjMap(o);
                else {
                    IPersistentCollection coll = (IPersistentCollection)state;
                    int i = coll.count();
                    txState.set(coll.cons(o));
                    txChanges.set(txChanges.get().cons(PersistentVector.create(i, o)));
                }
                return null;
            }
        });
        return this;
    }

    private void conjMap(Object o) {
        if(o instanceof Map.Entry)
        {
            consMapEntry((Map.Entry) o);
            return;
        }
        else if(o instanceof IPersistentVector)
        {
            IPersistentVector v = (IPersistentVector) o;
            if(v.count() != 2)
                throw new IllegalArgumentException("Vector arg to map conj must be a pair");
            Object key = v.nth(0);
            Object value = v.nth(1);
            txState.set(((IPersistentMap)txState.get()).assoc(key, value));
            txChanges.set(txChanges.get().cons(PersistentVector.create(key, value)));
            return;
        }
        for(ISeq es = RT.seq(o); es != null; es = es.next())
        {
            consMapEntry((Map.Entry)es.first());
        }
    }

    private void consMapEntry(Map.Entry e) {
        Object key = e.getKey();
        Object value = e.getValue();
        txState.set(((Associative)txState.get()).assoc(key, value));
        txChanges.set(txChanges.get().cons(PersistentVector.create(key, value)));
    }

    @Override
    public IPersistentMap persistent() {
        return (IPersistentMap)deref();
    }

    @Override
    public int count() {
        return ((Counted)deref()).count();
    }

    @Override
    public void subscribe(Object key, IFn handler) {
        if(subscribers == null) subscribers = new CallbackSet(this);
        subscribers.add(key, handler);
    }

    @Override
    public void unsubscribe(Object key) {
        if(subscribers != null) subscribers.remove(key);
    }

    @Override
    public IKeyedCursor entityCursor(Object entityKey) {
        return null;
    }

    @Override
    public Object update(final Object key, final IFn f) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                Associative curState = (Associative)txState.get();
                Object curVal = curState.valAt(key);
                Object newVal = f.invoke(curVal);
                txState.set(curState.assoc(key, newVal));
                txChanges.set(txChanges.get().cons(PersistentVector.create(key, newVal)));
                return null;
            }
        });
        return this;
    }

    @Override
    public Object valAt(Object key) {
        return ((ILookup)deref()).valAt(key);
    }

    @Override
    public Object valAt(Object key, Object notFound) {
        return ((ILookup)deref()).valAt(key, notFound);
    }

    @Override
    public void transact(final IFn f) {
        if(txChanges.get() != null)
            f.invoke();
        else {
            try {
                txChanges.set(PersistentVector.EMPTY);
                swap(new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        txState.set(state);
                        txChanges.set(PersistentVector.EMPTY);
                        f.invoke();
                        return txState.get();
                    }
                });
                subscribers.invokeAll(txChanges.get());
            }
            finally {
                txState.set(null);
                txChanges.set(null);
            }
        }
    }

    @Override
    public ITransientVector assocN(int i, Object o) {
        return null;
    }

    @Override
    public ITransientVector pop() {
        return null;
    }

    @Override
    public Object nth(int i) {
        return null;
    }

    @Override
    public Object nth(int i, Object o) {
        return null;
    }

    @Override
    public IKeyedCursor getKeyedCursor(Object key) {
        if(cursors == null) cursors = new Atom(PersistentHashMap.EMPTY);
        Cursor cur = (Cursor) ((IPersistentMap)cursors.deref()).valAt(key);
        if(cur != null) return cur;
        cur = new Cursor(this, key);
        final Cursor finalCur = cur;
        cursors.swap(new AFn() {
            @Override
            public Object invoke(Object state) {
                return ((IPersistentMap)state).assoc(key, finalCur);
            }
        });
        return cur;
    }

    @Override
    public Object cursorParent() {
        return source;
    }

    @Override
    public Object cursorKey() {
        return cursorKey;
    }

    @Override
    public BindingInfo getBindingInfo() {
        return null;
    }

    public void clean() {
        if((watches == null || watches.empty()) &&
           (invalidationWatches == null || invalidationWatches.empty()) &&
           (subscribers == null || subscribers.empty()) &&
           (cursors == null || ((Counted)cursors.deref()).count() == 0)) {
            for(; ;) {
                // TODO clean
            }
        }
    }
}
