package freactive;

public interface IHasCursors {
    IKeyedCursor getKeyedCursor(Object key);
}
