package clojure.lang;

import java.util.Map;

public class CallbackSet {
    private Atom callbacks = new Atom(PersistentHashMap.EMPTY);

    public CallbackSet(Object thisRef) {
        this.thisRef = thisRef;
    }

    public Object getThisRef() {
        return thisRef;
    }

    public void setThisRef(Object thisRef) {
        this.thisRef = thisRef;
    }

    private Object thisRef;

    private final IFn assocFn = new AFn() {
            @Override
            public Object invoke(Object cur, Object key, Object callback) {
                return ((IPersistentMap)cur).assoc(key, callback);
            }
        };

    private final IFn withoutFn = new AFn() {
        @Override
        public Object invoke(Object cur, Object key) {
            return ((IPersistentMap)cur).without(key);
        }
    };

    public void add(final Object key, final IFn callback)
    {
        callbacks.swap(assocFn, key, callback);
    }

    public void remove(Object key)
    {
        callbacks.swap(withoutFn, key);
    }

    public void invokeAll()
    {
        IPersistentMap cbs = (IPersistentMap)callbacks.deref();
        invokeAll(cbs);
    }

    private void invokeAll(IPersistentMap cbs) {
        if(cbs.count() > 0)
        {
            for(ISeq s = cbs.seq(); s != null; s = s.next())
            {
                Map.Entry e = (Map.Entry) s.first();
                IFn fn = (IFn) e.getValue();
                if(fn != null)
                    fn.invoke(e.getKey(), thisRef);
            }
        }
    }

    public void invokeAll(Object arg1)
    {
        IPersistentMap cbs = (IPersistentMap)callbacks.deref();
        invokeAll(cbs, arg1);
    }

    private void invokeAll(IPersistentMap cbs, Object arg1) {
        if(cbs.count() > 0)
        {
            for(ISeq s = cbs.seq(); s != null; s = s.next())
            {
                Map.Entry e = (Map.Entry) s.first();
                IFn fn = (IFn) e.getValue();
                if(fn != null)
                    fn.invoke(e.getKey(), thisRef, arg1);
            }
        }
    }

    public void invokeAll(Object arg1, Object arg2)
    {
        IPersistentMap cbs = (IPersistentMap)callbacks.deref();
        invokeAll(cbs, arg1, arg2);
    }

    private void invokeAll(IPersistentMap cbs, Object arg1, Object arg2) {
        if(cbs.count() > 0)
        {
            for(ISeq s = cbs.seq(); s != null; s = s.next())
            {
                Map.Entry e = (Map.Entry) s.first();
                IFn fn = (IFn) e.getValue();
                if(fn != null)
                    fn.invoke(e.getKey(), thisRef, arg1, arg2);
            }
        }
    }

    private IPersistentMap takeAll()
    {
        for(;;) {
            Object cur = callbacks.deref();
            if(callbacks.compareAndSet(cur, PersistentHashMap.EMPTY))
                return (IPersistentMap)cur;
        }
    }

    public void invokeAndRemoveAll() {
        invokeAll(takeAll());
    }

    public void invokeAndRemoveAll(Object arg1) {
        invokeAll(takeAll(), arg1);
    }

    public void invokeAndRemoveAll(Object arg1, Object arg2) {
        invokeAll(takeAll(), arg1, arg2);
    }

    public IPersistentMap getCallbacks() {
        return (IPersistentMap)callbacks.deref();
    }
}
