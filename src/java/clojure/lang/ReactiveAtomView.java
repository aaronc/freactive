package clojure.lang;

import java.util.concurrent.atomic.AtomicBoolean;

public class ReactiveAtomView implements IReactiveAtom {
    private final IReactiveAtom source;
    private volatile Object curView;
    private volatile Object cur;
    private final CallbackSet invalidationWatches = new CallbackSet(this);
    private final CallbackSet watches = new CallbackSet(this);
    private final boolean lazy = false;
    private final AtomicBoolean dirty = new AtomicBoolean(true);
    private final IFn viewTransform;
    private final IFn updateTransform;

    public ReactiveAtomView(final IReactiveAtom source, final IFn viewTransform,
                            final IFn updateTransform) {
        this.source = source;
        this.viewTransform = viewTransform;
        this.updateTransform = updateTransform;
        source.addInvalidationWatch(this, new AFn() {
            @Override
            public Object invoke(Object arg1, Object arg2) {
                if(lazy) {
                    if(dirty.compareAndSet(false, true)) {
                        invalidationWatches.invokeAll();
                    }
                } else {
                    cur = source.deref();
                    Object newView = viewTransform.invoke(cur);
                    if(!newView.equals(curView)) {
                        curView = newView;
                        invalidationWatches.invokeAll();
                    }
                }
                return null;
            }
        });
        source.addWatch(this, new AFn() {
            @Override
            public Object invoke(Object k, Object r, Object o, Object n) {
                cur = n;
                Object newView = viewTransform.invoke(cur);
                if(!newView.equals(curView)) {
                    Object oldView = curView;
                    curView = newView;
                    watches.invokeAll(oldView, newView);
                }
                return null;
            }
        });
    }

    @Override
    public Object swap(final IFn f) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke(cur)));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object arg) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke(cur), arg));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object arg1, final Object arg2) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(cur,
                        f.invoke(viewTransform.invoke (cur), arg1, arg2));
            }
        });
    }

    @Override
    public Object swap(final IFn f, final Object x, final Object y, final ISeq args) {
        return source.swap(new AFn() {
            @Override
            public Object invoke(Object cur) {
                return updateTransform.invoke(
                        cur,
                        f.applyTo(
                                RT.listStar(viewTransform.invoke(cur), x, y, args)));
            }
        });
    }

    @Override
    public boolean compareAndSet(Object oldv, Object newv) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Object reset(final Object newval) {
        return viewTransform.invoke(
                source.swap(new AFn() {
                    @Override
                    public Object invoke(Object cur) {
                        return updateTransform.invoke(cur, newval);
                    }
                })
        );

 //       return source.reset(updateTransform.invoke(newval));
    }

    @Override
    public IInvalidates addInvalidationWatch(Object key, IFn callback) {
        source.addInvalidationWatch(key, callback);
        return this;
    }

    @Override
    public IInvalidates removeInvalidationWatch(Object key) {
        source.removeInvalidationWatch(key);
        return this;
    }

    @Override
    public void setValidator(IFn iFn) {
        throw new UnsupportedOperationException();
    }

    @Override
    public IFn getValidator() {
        throw new UnsupportedOperationException();
    }

    @Override
    public IPersistentMap getWatches() {
        return watches.getCallbacks();
    }

    @Override
    public IRef addWatch(Object key, IFn iFn) {
        watches.add(key, iFn);
        return this;
    }

    @Override
    public IRef removeWatch(Object key) {
        watches.remove(key);
        return this;
    }

    @Override
    public Object deref() {
        if(dirty.get())
            curView = viewTransform.invoke(source.deref());
        return curView;
    }
}
