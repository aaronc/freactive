package freactive;

import clojure.lang.*;

import java.util.Map;

public class EntityCursorMap {
    class EntityCursor implements IReactiveAtom, IKeyedCursor {
        private final Object entityKey;
        private Object entityValue;
        private CallbackSet watches;
        private CallbackSet invalidationWatches;

        private EntityCursor(Object entityKey, Object entityValue)
        {
            this.entityKey = entityKey;
            this.entityValue = entityValue;
        }

        private void update(Object newValue)
        {
            Object oldValue = entityValue;
            entityValue = newValue;
            if(watches != null)
                watches.invokeAll(oldValue, newValue);
            if(invalidationWatches != null)
                invalidationWatches.invokeAll();
        }

        @Override
        public Object cursorParent() {
            return coll;
        }

        @Override
        public Object cursorKey() {
            return entityKey;
        }

        @Override
        public Object swap(IFn f) {
            coll.update(entityKey, f);
            return deref();
        }

        @Override
        public Object swap(IFn f, Object arg) {
            coll.update(entityKey, new AFn() {
                @Override
                public Object invoke(Object o) {
                    return f.invoke(o, arg);
                }
            });
            return deref();
        }

        @Override
        public Object swap(IFn f, Object arg1, Object arg2) {
            coll.update(entityKey, new AFn() {
                @Override
                public Object invoke(Object o) {
                    return f.invoke(o, arg1, arg2);
                }
            });
            return deref();
        }

        @Override
        public Object swap(IFn f, Object x, Object y, ISeq args) {
            coll.update(entityKey, new AFn() {
                @Override
                public Object invoke(Object o) {
                    return f.applyTo(RT.listStar(x, y, args));
                }
            });
            return deref();
        }

        @Override
        public boolean compareAndSet(Object oldv, Object newv) {
            throw new UnsupportedOperationException("compareAndSet not supported for entity cursors");
        }

        @Override
        public Object reset(Object newval) {
            coll.update(entityKey, new AFn() {
                @Override
                public Object invoke(Object arg1) {
                    return newval;
               }
            });
            return deref();
        }

        @Override
        public IInvalidates addInvalidationWatch(Object key, IFn callback) {
            if(invalidationWatches == null)
                invalidationWatches = new CallbackSet(this);
            invalidationWatches.add(key, callback);
            return this;
        }

        @Override
        public IInvalidates removeInvalidationWatch(Object key) {
            if(invalidationWatches != null)
                invalidationWatches.remove(key);
            return this;
        }

        @Override
        public void setValidator(IFn vf) {
            throw new UnsupportedOperationException();
        }

        @Override
        public IFn getValidator() {
            return null;
        }

        @Override
        public IPersistentMap getWatches() {
            if(watches != null)
                return watches.getCallbacks();
            return null;
        }

        @Override
        public IRef addWatch(Object key, IFn callback) {
            if(watches == null)
                watches = new CallbackSet(this);
            watches.add(key, callback);
            return this;
        }

        @Override
        public IRef removeWatch(Object key) {
            if(watches != null)
                watches.remove(key);
            return this;
        }

        @Override
        public Object deref() {
            return entityValue;
        }

        @Override
        public BindingInfo getBindingInfo() {
            return null;
        }
    }

    private final IObservableCollection coll;

    private final Atom cursorMap = new Atom(PersistentHashMap.EMPTY);

    public EntityCursorMap(IObservableCollection coll) {
        this.coll = coll;
        coll.subscribe(this, new AFn() {
            @Override
            public Object invoke(Object key, Object coll, Object changes) {
                for(ISeq cs = RT.seq(changes); cs != null; cs = cs.next())
                {
                    Object first = cs.first();
                    if(first instanceof Map.Entry)
                    {
                        Map.Entry me = (Map.Entry)first;
                        final Object k = me.getKey();
                        Object v = me.getValue();
                        Object cursor = ((IPersistentMap)cursorMap.deref()).valAt(k);
                        if(cursor != null)
                        {
                            ((EntityCursor)cursor).update(v);
                            if(v == null)
                                cursorMap.swap(new AFn() {
                                    @Override
                                    public Object invoke(Object state) {
                                        return ((IPersistentMap)state).without(k);
                                    }
                                });
                        }
                        else {
                            if(v != null)
                            {
                                final EntityCursor newCursor = new EntityCursor(k, v);
                                cursorMap.swap(new AFn() {
                                    @Override
                                    public Object invoke(Object state) {
                                        return ((IPersistentMap)state).assoc(k, newCursor);
                                    }
                                });
                            }
                        }
                    }
                }
                return null;
            }
        });
    }

    public IKeyedCursor getEntityCursor(Object key) {
        Object cursor = ((IPersistentMap)cursorMap.deref()).valAt(key);
        if(cursor != null)
            return (IKeyedCursor)cursor;
        else return null;
    }
}
