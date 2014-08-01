using clojure.lang;

namespace freactive
{
    public class ReactiveAtom : Atom
    {
        public ReactiveAtom(object state) : base(state)
        {
        }

        public ReactiveAtom(object state, IPersistentMap meta) : base(state, meta)
        {
        }

        public override object deref()
        {
            Reactive.registerDep(this);
            return base.deref();
        }
    }
}