package freactive;

import clojure.lang.IFn;
import clojure.lang.ISeq;

public interface IObservableCollection {
    void subscribe(Object key, IFn handler);
    void unsubscribe(Object key);
    IEntityCursor entityCursor(Object entityKey);
    Object update(Object key, IFn f);
}
