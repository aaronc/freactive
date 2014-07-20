package clojure.lang;

import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

public class Reactive extends ARef implements IReactive {
    private final AtomicBoolean dirty = new AtomicBoolean(true);
    protected final AtomicReference currentValue = new AtomicReference(null);
    protected IFn func;
    private final HashMap<ARef, Boolean> deps = new HashMap<ARef, Boolean>();
    private boolean simple = false;
    private boolean depsRegistered = false;

    class RegisterDep extends AFn {
        public Object invoke(Object obj) {
            ARef aref = (obj instanceof ARef ? (ARef)obj : null);
            if(aref == null) return null;
            if(!deps.containsKey(aref)) {
                deps.put(aref, true);
                aref.addWatch(sully, sully);
            }
            return null;
        }
    }
    
    private final RegisterDep registerDep = this.new RegisterDep();

    public final static Var REGISTER_DEP =
        Var.intern(Namespace.findOrCreate(Symbol.intern("freactive.core")),
                   Symbol.intern("*register-dep*"), null, false).setDynamic();
    
    public static void registerDep(IRef ref) {
        Object v = REGISTER_DEP.deref();
        if(v != null) {
            ((IFn)v).invoke(ref);
        }
    }
    
    class Sully extends AFn {
        public Object invoke(Object key, Object ref, Object oldVal, Object newVal) {
            if(dirty.compareAndSet(false, true)) {
                Object cur = currentValue.get();
                notifyWatches(cur, cur);
            }
            return null;
        }
    }
    
    private final Sully sully = this.new Sully();

    
    
    public Reactive(IFn func) {
        this.func = func;
    }
    
    protected Object compute() {
        return func.invoke();
    }
    
    public Object deref() {
        registerDep(this);

        if(!dirty.get())
            return currentValue.get();

        synchronized(this) {
            if(!dirty.get())
                return currentValue.get();
            
            Object newVal;

            if(simple && depsRegistered) {
                try {
                    Var.pushThreadBindings(RT.map(REGISTER_DEP, null));
                    dirty.set(false);
                    newVal = compute();
                }
                finally {
                    Var.popThreadBindings();
                }
                validate(newVal);
                currentValue.set(newVal);
                return newVal;
            }
                
            try {
                Var.pushThreadBindings(RT.map(REGISTER_DEP, registerDep));
                dirty.set(false);
                newVal = compute();
            }
            finally {
                Var.popThreadBindings();
            }
            validate(newVal);
            currentValue.set(newVal);
            
            Iterator<Map.Entry<ARef, Boolean>> it = deps.entrySet().iterator();
            while(it.hasNext()) {
                Map.Entry<ARef, Boolean> entry = it.next();
                if(!entry.getValue()) {
                    entry.getKey().removeWatch(sully);
                    it.remove();
                } else {
                    entry.setValue(false);
                }
            }
            return newVal;
        }
    }
    
    public boolean getSimple() { return simple; }

    public void setSimple(boolean val) { simple = val; }
    
    public void setDeps(Seqable val) {
        for(ISeq s = val.seq(); s != null; s = s.next())
            registerDep.invoke(s.first());
        depsRegistered = true;
    }
}
