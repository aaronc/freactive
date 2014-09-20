/**
 *   Copyright (c) Rich Hickey. All rights reserved.
 *   The use and distribution terms for this software are covered by the
 *   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
 *   which can be found in the file epl-v10.html at the root of this distribution.
 *   By using this software in any fashion, you are agreeing to be bound by
 * 	 the terms of this license.
 *   You must not remove this notice, or any other, from this software.
 **/

/* rich Jan 1, 2009 */

/* modified from clojure.lang.Java on Jul 10, 2014 by aaronc
   I implemented this in clojure.lang because it is hard to 
   subclass ARef because validate has package protection
*/

package clojure.lang;

import java.util.concurrent.atomic.AtomicReference;

public class ReactiveAtom extends ARef implements IReactiveAtom {

final AtomicReference state;
    
public ReactiveAtom(Object state){
	this.state = new AtomicReference(state);
}

public ReactiveAtom(Object state, IPersistentMap meta){
	super(meta);
	this.state = new AtomicReference(state);
}

public Object deref(){
    Reactive.registerDep(this);
	return state.get();
}

public Object swap(IFn f) {
	for(; ;)
		{
		Object v = deref();
		Object newv = f.invoke(v);
		validate(newv);
		if(state.compareAndSet(v, newv))
			{
			notifyWatches(v, newv);
			return newv;
			}
		}
}

public Object swap(IFn f, Object arg) {
	for(; ;)
		{
		Object v = deref();
		Object newv = f.invoke(v, arg);
		validate(newv);
		if(state.compareAndSet(v, newv))
			{
			notifyWatches(v, newv);
			return newv;
			}
		}
}

public Object swap(IFn f, Object arg1, Object arg2) {
	for(; ;)
		{
		Object v = deref();
		Object newv = f.invoke(v, arg1, arg2);
		validate(newv);
		if(state.compareAndSet(v, newv))
			{
			notifyWatches(v, newv);
			return newv;
			}
		}
}

public Object swap(IFn f, Object x, Object y, ISeq args) {
	for(; ;)
		{
		Object v = deref();
		Object newv = f.applyTo(RT.listStar(v, x, y, args));
		validate(newv);
		if(state.compareAndSet(v, newv))
			{
			notifyWatches(v, newv);
			return newv;
			}
		}
}

public boolean compareAndSet(Object oldv, Object newv){
	validate(newv);
	boolean ret = state.compareAndSet(oldv, newv);
	if(ret)
		notifyWatches(oldv, newv);
	return ret;
}

public Object reset(Object newval){
	Object oldval = state.get();
	validate(newval);
	state.set(newval);
	notifyWatches(oldval, newval);
	return newval;
}
    
public void notifyWatches(Object oldVal, Object newVal){
        if(oldVal != newVal)
                super.notifyWatches(oldVal, newVal);
}

@Override
public IInvalidates addInvalidationWatch(Object key, IFn callback) {
    addWatch(key, new AFn() {
        @Override
        public Object invoke(Object key, Object ref, Object oldV, Object newV) {
            return callback.invoke(key, ref);
        }
    });
    return this;
}

@Override
public IInvalidates removeInvalidationWatch(Object key) {
    removeWatch(key);
    return this;
}

//@Override
public IPersistentMap getInvalidationWatches() {
    return getWatches();
}
}
