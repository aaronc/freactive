package freactive;

import clojure.java.api.Clojure;
import clojure.lang.*;

import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

public class Cursor implements IReactiveAtom, ITransientMap, ITransientVector, IObservableCollection, ITransactableCollection, IHasCursors, IKeyedCursor {
    protected final IReactiveAtom source;
    private final Object cursorKey;
    private volatile Object curView;
    private volatile Object cur;
    private final CallbackSet invalidationWatches = new CallbackSet(this);
    private final CallbackSet watches = new CallbackSet(this);
    private final Atom cursors = new Atom(null);
    private final boolean lazy = false;
    private final AtomicBoolean dirty = new AtomicBoolean(true);
    private final IFn viewTransform;
    private final IFn updateTransform;
    private final CallbackSet subscribers = new CallbackSet(this);
    private final ThreadLocal<Object> txState = new ThreadLocal<Object>();
    private final ThreadLocal<IPersistentVector> txChanges = new ThreadLocal<IPersistentVector>();

    private static final IFn CORE_ASSOC = Clojure.var("clojure.core/assoc");
    private static final IFn CORE_GET = Clojure.var("clojure.core/get");

    public Cursor(final IReactiveAtom source, final Object key)
    {
        this(source, new AFn() {
            @Override
            public Object invoke(Object state) {
                return CORE_GET.invoke(state, key);
            }
        }, new AFn() {
            @Override
            public Object invoke(Object state, Object subState) {
                return CORE_ASSOC.invoke(state, key, subState);
            }
        }, key);
    }

    public Cursor(final IReactiveAtom source, final IFn viewTransform, final IFn updateTransform) {
        this(source, viewTransform, updateTransform, null);
    }

    public Cursor(final IReactiveAtom source, final IFn viewTransform, final IFn updateTransform,
                  Object key) {
        this.source = source;
        this.viewTransform = viewTransform;
        this.updateTransform = updateTransform;
        this.cursorKey = key;
        source.addInvalidationWatch(this, new AFn() {
            @Override
            public Object invoke(Object arg1, Object arg2) {
                if(lazy) {
                    if(dirty.compareAndSet(false, true)) {
                        invalidationWatches.invokeAll();
                    }
                } else {
                    cur = source.deref();
                    Object newView = viewTransform.invoke(cur);
                    if(!newView.equals(curView)) {
                        curView = newView;
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
                    watches.invokeAll(oldView, newView);
                }
                return null;
            }
        });
    }

    @Override
    public Object swap(final IFn f) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke(cur)));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object arg) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke(cur), arg));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object arg1, final Object arg2) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke (cur), arg1, arg2));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object x, final Object y, final ISeq args) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(
                        cur,
                        f.applyTo(
                                RT.listStar(viewTransform.invoke(cur), x, y, args)));
            }
        });
    }

    @Override
    public boolean compareAndSet(Object oldv, Object newv) {
        throw new UnsupportedOperationException("compareAndSet not supported for cursors");
    }

    @Override
    public Object reset(final Object newval) {
        return viewTransform.invoke(
                source.swap(new AFn() {
                    @Override
                    public Object invoke(Object cur) {
                        return updateTransform.invoke(cur, newval);
                    }
                })
        );

        //       return source.reset(updateTransform.invoke(newval));
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
        watches.add(key, iFn);
        return this;
    }

    @Override
    public IRef removeWatch(Object key) {
        watches.remove(key);
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
        subscribers.add(key, handler);
    }

    @Override
    public void unsubscribe(Object key) {
        subscribers.remove(key);
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
        return null;
    }

    @Override
    public Object cursorParent() {
        return source;
    }

    @Override
    public Object cursorKey() {
        return key;
    }
}
