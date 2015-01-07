package freactive;

import clojure.lang.IFn;

public interface ITransactableCollection {
    void transact(IFn f);
}
