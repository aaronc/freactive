package clojure.lang;

import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

public class Reactive2 extends ARef implements IReactive {
    private final AtomicBoolean dirty = new AtomicBoolean(true);

    protected final AtomicReference state = new AtomicReference(null);

    protected IFn func;

    public Reactive2(IFn func) {
        this.func = func;
    }

    public final static Var REGISTER_DEP =
        Var.intern(Namespace.findOrCreate(Symbol.intern("freactive.core")),
                   Symbol.intern("*register-dep*"), null, false).setDynamic();
    
    public static void registerDep(IRef ref) {
        Object v = REGISTER_DEP.deref();
        if(v != null) {
            ((RegisterDep)v).register(ref);
        }
    }
    
    class RegisterDep extends AFn {
        public void register(IRef ref) {
            ref.addWatch(sully, sully);
        }
        
        public Object invoke(Object obj) {
            IRef ref = (obj instanceof IRef ? (IRef)obj : null);
            if(ref == null) return null;
            register(ref);
            return null;
        }
    }
    
    private final RegisterDep registerDep = this.new RegisterDep();

    class Sully extends AFn {
        public Object invoke(Object key, Object ref, Object oldVal, Object newVal) {
            ((ARef)ref).removeWatch(key);
            if(dirty.compareAndSet(false, true)) {
                Object cur = state.get();
                notifyWatches(cur, cur);
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
                validate(newv);
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
}
