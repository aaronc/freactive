package freactive;

import clojure.java.api.Clojure;
import clojure.lang.AFn;
import clojure.lang.IFn;
import clojure.lang.ILookup;

public class KeyedCursor extends ReactiveCursor implements IKeyedCursor {
    private static IFn CORE_GET = Clojure.var("clojure.core/get");
    private static IFn CORE_ASSOC = Clojure.var("clojure.core/assoc");
    private final Object key;

    public KeyedCursor(IReactiveAtom source, Object key) {
        super(source,
                new AFn() {
                    @Override
                    public Object invoke(Object state) {
                        return CORE_GET.invoke(state, key);
                    }
                },
                new AFn() {
                    @Override
                    public Object invoke(Object state, Object subState) {
                        return CORE_ASSOC.invoke(state, key, subState);
                    }
                }
        );
        this.key = key;
    }

    @Override
    public Object cursorParent() {
        return source;
    }

    @Override
    public Object cursorKey() {
        return key;
    }
}
