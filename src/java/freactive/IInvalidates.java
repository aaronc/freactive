package freactive;

import clojure.lang.IFn;

public interface IInvalidates {
    IInvalidates addInvalidationWatch(Object key, IFn callback);
    IInvalidates removeInvalidationWatch(Object key);
}
