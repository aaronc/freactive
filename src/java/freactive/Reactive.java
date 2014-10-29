package freactive;

import clojure.lang.*;

import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.Map;

public class Reactive extends ARef implements IReactiveRef {
    private final AtomicBoolean dirty = new AtomicBoolean(true);

    private final boolean lazy;

    protected final AtomicReference<Object> state = new AtomicReference<Object>(null);

    protected IFn func;

    private volatile IPersistentMap invalidationWatches = PersistentHashMap.EMPTY;

    public Reactive(IFn func) {
        this(func, true);
    }

    public Reactive(IFn func, boolean lazy) {
        this.func = func;
        this.lazy = lazy;
    }

    public final static Var REGISTER_DEP =
        Var.intern(Namespace.findOrCreate(Symbol.intern("freactive.core")),
                   Symbol.intern("*register-dep*"), null, false).setDynamic();
    
    public static void registerDep(Object ref) {
        Object v = REGISTER_DEP.deref();
        if(v != null) {
            ((RegisterDep)v).invoke(ref);
        }
    }

    @Override
    public IInvalidates addInvalidationWatch(Object key, IFn callback) {
        invalidationWatches = invalidationWatches.assoc(key, callback);
        return this;
    }

    @Override
    public IInvalidates removeInvalidationWatch(Object key) {
        invalidationWatches = invalidationWatches.without(key);
        return this;
    }

    //@Override
    public IPersistentMap getInvalidationWatches() {
        return invalidationWatches;
    }

    class RegisterDep extends AFn {
        public Object invoke(Object obj) {
            IInvalidates invalidates = (obj instanceof IInvalidates ? (IInvalidates)obj : null);
            if(invalidates != null) {
                invalidates.addInvalidationWatch(sully, sully);
            }
            else {
                IRef ref = (obj instanceof IRef ? (IRef) obj : null);
                if (ref != null)
                   ref.addWatch(sully, sully);
            }
            return null;
        }
    }

    void invalidateWatches()
    {
        Object cur = lazy ? state.get() : deref();
        notifyWatches(cur, cur);

        IPersistentMap ws = invalidationWatches;
        if(ws.count() > 0)
        {
            for(ISeq s = ws.seq(); s != null; s = s.next())
            {
                Map.Entry e = (Map.Entry) s.first();
                IFn fn = (IFn) e.getValue();
                if(fn != null)
                    fn.invoke(e.getKey(), this);
            }
        }
    }
    
    private final RegisterDep registerDep = this.new RegisterDep();

    class Sully extends AFn {
        public Object invoke(Object key, Object ref) {
            ((IInvalidates)ref).removeInvalidationWatch(key);
            if(dirty.compareAndSet(false, true)) {
                invalidateWatches();
            }
            return null;
        }


        public Object invoke(Object key, Object ref, Object oldVal, Object newVal) {
            ((IRef)ref).removeWatch(key);
            if(dirty.compareAndSet(false, true)) {
                invalidateWatches();
            }
            return null;
        }
    }
    
    private final Sully sully = this.new Sully();
    
    protected Object compute() {
        return func.invoke();
    }
    
    public Object deref() {
        registerDep(this);

        if(!dirty.get())
            return state.get();
        
        try {
            Var.pushThreadBindings(RT.map(REGISTER_DEP, registerDep));
            for(; ;) {
                dirty.set(false);
                Object v = state.get();
                Object newv = compute();
                if(state.compareAndSet(v, newv)) {
                    notifyWatches(v, newv);
                    return newv;
                }
            }
        }
        finally {
            Var.popThreadBindings();
        }
    }

    @Override
    public IFn getValidator() {
        return null;
    }

    @Override
    public void setValidator(IFn vf) {
        throw new UnsupportedOperationException();
    }
}
