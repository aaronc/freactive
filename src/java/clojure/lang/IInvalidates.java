package clojure.lang;

public interface IInvalidates extends IDeref {
    IInvalidates addInvalidationWatch(Object key, IFn callback);
    IInvalidates removeInvalidationWatch(Object key);
    IPersistentMap getInvalidationWatches();
}
