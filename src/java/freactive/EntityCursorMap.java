package freactive;

import clojure.lang.*;

public class EntityCursorMap {
    class EntityCursor implements IReactiveAtom, IEntityCursor {
        private final Object entityKey;

        EntityCursor(Object entityKey)
        {
            this.entityKey = entityKey;
        }

        @Override
        public Object entityKey() {
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
            return null;
        }

        @Override
        public IInvalidates removeInvalidationWatch(Object key) {
            return null;
        }

        @Override
        public void setValidator(IFn vf) {

        }

        @Override
        public IFn getValidator() {
            return null;
        }

        @Override
        public IPersistentMap getWatches() {
            return null;
        }

        @Override
        public IRef addWatch(Object key, IFn callback) {
            return null;
        }

        @Override
        public IRef removeWatch(Object key) {
            return null;
        }

        @Override
        public Object deref() {
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
                return null;
            }
        });
    }

    public IEntityCursor getEntityCursor(Object key) {
        Object cursor = ((IPersistentMap)cursorMap.deref()).valAt(key);
        if(cursor != null)
            return (IEntityCursor)cursor;
        return null;
    }
}
