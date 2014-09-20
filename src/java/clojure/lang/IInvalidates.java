package clojure.lang;

public interface IInvalidates {
    IInvalidates addInvalidationWatch(Object key, IFn callback);
    IInvalidates removeInvalidationWatch(Object key);
}
