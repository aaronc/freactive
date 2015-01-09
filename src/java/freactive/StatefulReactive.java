package freactive;

import clojure.lang.IFn;

public class StatefulReactive extends ReactiveExpression implements IInvalidates {
    
    public StatefulReactive(Object initialState, IFn func) {
        super(func, false);
        state.set(initialState);
    }

    protected Object compute() {
        return func.invoke(state.get());
    }
}
