package freactive;

import clojure.lang.*;

public interface IReactive {
    public final static Var REGISTER_DEP =
            Var.intern(Namespace.findOrCreate(Symbol.intern("freactive.core")),
                    Symbol.intern("*register-dep*"), null, false).setDynamic();

    public static void registerDep(Object ref) {
        Object v = REGISTER_DEP.deref();
        if(v != null) {
            ((IFn)v).invoke(ref, getBindingInfo(ref));
        }
    }

    public static void registerDep(Object ref, BindingInfo bindingInfo) {
        Object v = REGISTER_DEP.deref();
        if(v != null) {
            ((IFn)v).invoke(ref, bindingInfo);
        }
    }

    public class BindingInfo {
        private final IFn deref;
        private final IFn addWatch;
        private final IFn removeWatch;
        private final IFn clean;

        public IFn getDeref() {
            return deref;
        }

        public IFn getAddWatch() {
            return addWatch;
        }

        public IFn getRemoveWatch() {
            return removeWatch;
        }

        public IFn getClean() {
            return clean;
        }

        public BindingInfo(IFn deref, IFn addWatch, IFn removeWatch, IFn clean) {
            this.deref = deref;
            this.addWatch = addWatch;
            this.removeWatch = removeWatch;
            this.clean = clean;
        }
    }

    public static final IReactive.BindingInfo IRefBindingInfo =
            new BindingInfo(new AFn() {
                @Override
                public Object invoke(Object self) {
                    return ((IDeref) self).deref();
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key, Object f) {
                    return ((IRef) self).addWatch(key, (IFn)f);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key) {
                    return ((IRef) self).removeWatch(key);
                }
            }, null);

    public static final IReactive.BindingInfo IInvalidatesBindingInfo =
            new BindingInfo(new AFn() {
                @Override
                public Object invoke(Object self) {
                    return ((IDeref) self).deref();
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key, Object f) {
                    return ((IInvalidates) self).addInvalidationWatch(key, (IFn)f);
                }
            }, new AFn() {
                @Override
                public Object invoke(Object self, Object key) {
                    return ((IInvalidates) self).removeInvalidationWatch(key);
                }
            }, null);

    public static BindingInfo getBindingInfo(Object iref) {
        if(iref instanceof IReactive) {
            return ((IReactive)iref).getBindingInfo();
        } else if (iref instanceof IRef) {
            return IRefBindingInfo;
        } else if (iref instanceof IInvalidates) {
            return IInvalidatesBindingInfo;
        }
        throw new Error(String.format("Don't know how to create binding info for %s", iref.toString()));
    }

    BindingInfo getBindingInfo();
}
