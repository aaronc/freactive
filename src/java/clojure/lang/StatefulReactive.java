package clojure.lang;

public class StatefulReactive extends Reactive implements IReactive {
    
    public StatefulReactive(Object initialState, IFn func) {
        super(func);
        state.set(initialState);
    }

    protected Object compute() {
        return func.invoke(state.get());
    }
}
