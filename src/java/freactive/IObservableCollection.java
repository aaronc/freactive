package freactive;

import clojure.lang.IFn;

public interface IObservableCollection {
    void subscribe(Object key, IFn handler);
    void unsubscribe(Object key);
    IKeyedCursor entityCursor(Object entityKey);
    Object update(Object key, IFn f);
}
