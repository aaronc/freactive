package freactive;

import clojure.lang.*;

import java.util.Map;

public class ObservableMap implements ITransientMap, IObservableCollection, ITransactableCollection {
    private final IReactiveAtom atom;
    private final CallbackSet subscribers = new CallbackSet(this);

    public ObservableMap(IReactiveAtom atom) {
        this.atom = atom;
        atom.addWatch(this, new AFn() {
            @Override
            public Object invoke(Object key, Object ref, Object oldv, Object newv) {
                // this handles the case for when the atom was changed somewhere else
                if(key != this) {
                    subscribers.invokeAll(newv);
                }
                return null;
            }
        });
    }

    @Override
    public ITransientMap assoc(Object k, Object v) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                txState.set(txState.get().assoc(k, v));
                txChanges.set(txChanges.get().cons(PersistentVector.create(k, v)));
                return null;
            }
        });
        return this;
    }

    @Override
    public ITransientMap without(Object k) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                txState.set(txState.get().without(k));
                txChanges.set(txChanges.get().cons(PersistentVector.create(k)));
                return null;
            }
        });
        return this;
    }

    @Override
    public ITransientCollection conj(Object o) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                if(o instanceof Map.Entry)
                {
                    consMapEntry((Map.Entry) o);
                    return null;
                }
                else if(o instanceof IPersistentVector)
                {
                    IPersistentVector v = (IPersistentVector) o;
                    if(v.count() != 2)
                        throw new IllegalArgumentException("Vector arg to map conj must be a pair");
                    Object key = v.nth(0);
                    Object value = v.nth(1);
                    txState.set(txState.get().assoc(key, value));
                    txChanges.set(txChanges.get().cons(PersistentVector.create(key, value)));
                    return null;
                }
                for(ISeq es = RT.seq(o); es != null; es = es.next())
                {
                    consMapEntry((Map.Entry)es.first());
                }
                return null;
            }
        });
        return this;
    }

    private void consMapEntry(Map.Entry e) {
        Object key = e.getKey();
        Object value = e.getValue();
        txState.set(txState.get().assoc(key, value));
        txChanges.set(txChanges.get().cons(PersistentVector.create(key, value)));
    }

    @Override
    public IPersistentMap persistent() {
        return (IPersistentMap) atom.deref();
    }

    @Override
    public int count() {
        return ((Counted)atom.deref()).count();
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
    public IEntityCursor entityCursor(Object entityKey) {
        return null;
    }

    @Override
    public Object update(Object key, IFn f) {
        transact(new AFn() {
            @Override
            public Object invoke() {
                IPersistentMap curState = txState.get();
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
        return ((ILookup)atom.deref()).valAt(key);
    }

    @Override
    public Object valAt(Object key, Object notFound) {
        return ((ILookup)atom.deref()).valAt(key, notFound);
    }

    private final ThreadLocal<IPersistentMap> txState = new ThreadLocal<>();
    private final ThreadLocal<IPersistentVector> txChanges = new ThreadLocal<>();

    @Override
    public void transact(IFn f) {
        if(txChanges.get() != null)
            f.invoke();
        else {
            try {
                txChanges.set(PersistentVector.EMPTY);
                atom.swap(new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        txState.set((IPersistentMap)state);
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
}
