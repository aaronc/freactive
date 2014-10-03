package clojure.lang;

public interface IAtom extends IRef {
    Object swap(IFn f);

    Object swap(IFn f, Object arg);

    Object swap(IFn f, Object arg1, Object arg2);

    Object swap(IFn f, Object x, Object y, ISeq args);

    boolean compareAndSet(Object oldv, Object newv);

    Object reset(Object newval);
}
