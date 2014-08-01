using System;
using clojure.lang;

namespace freactive
{
    public class Reactive : ARef
    {
        private readonly AtomicBoolean dirty = new AtomicBoolean(true);

        protected readonly AtomicReference<object> state = new AtomicReference<object>(null);

        protected IFn func;

        public Reactive(IFn func)
        {
            this.func = func;
            sully = new Sully(this);
            registerDepInst = new RegisterDep(this);
        }

        public static readonly Var REGISTER_DEP = Var.intern(Namespace.findOrCreate(Symbol.intern("freactive.core")),
                                                             Symbol.intern("*register-dep*"), null, false).setDynamic();

        public static void registerDep(IRef aref)
        {
            var v = REGISTER_DEP.deref();
            if(v != null)
            {
                ((RegisterDep)v).register(aref);
            }
        }

        class RegisterDep : AFn
        {
            private readonly Reactive parent;

            public RegisterDep(Reactive parent)
            {
                this.parent = parent;
            }

            public void register(IRef aref)
            {
                aref.addWatch(parent.sully, parent.sully);
            }

            public override object invoke(object obj)
            {
                var aref = obj as IRef;
                if (aref == null) return null;
                register(aref);
                return null;
            }
        }

        private readonly RegisterDep registerDepInst;

        class Sully : AFn
        {
            private readonly Reactive parent;

            public Sully(Reactive parent)
            {
                this.parent = parent;
            }

            public override object invoke(object key, object aref, object oldVal, object newVal)
            {
                ((IRef) aref).removeWatch(key);
                if(parent.dirty.compareAndSet(false, true))
                {
                    var cur = parent.state.Get();
                    parent.NotifyWatches(cur, cur);
                }
                return null;
            }
        }

        private readonly Sully sully;

        protected object compute()
        {
            return func.invoke();
        }

        public override object deref()
        {
            registerDep(this);

            if(!dirty.get())
                return state.Get();

            try
            {
                Var.pushThreadBindings(RT.map(REGISTER_DEP, registerDepInst));
                for(;;)
                {
                    dirty.set(false);
                    var v = state.Get();
                    var newv = compute();
                    Validate(newv);
                    if(state.CompareAndSet(v, newv))
                    {
                        NotifyWatches(v, newv);
                        return newv;
                    }
                }
            }
            finally
            {
                Var.popThreadBindings();
            }
        }
    }
}