package com.mg.learning.completeref.generics;

class MyGenClass<T, V> {
    T t;
    V v;

    void setT(T t) {
        this.t = t;
    }

    void set(V v) {
        this.v = v;
    }
}

public class AmbiguityError {
}
