package freactive;

import clojure.lang.ILookup;

// Not sure if this interface is really a good idea without having full
// collection change notifications
public interface IReactiveLookup extends IReactiveRef, ILookup {
}
