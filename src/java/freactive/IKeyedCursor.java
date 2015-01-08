package freactive;

public interface IKeyedCursor extends IReactiveAtom {
    Object cursorParent();
    Object cursorKey();
}
