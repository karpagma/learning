package com.mg.learning.completeref.generics;


class Gen<T> {
    private T t;

    Gen(T t) {
        this.t = t;
    }

    T getOb() {
        return this.t;
    }

    void showType() {
        System.out.println("Type of T is " + t.getClass().getName());
    }
}

public class HelloGenerics {
    public static void main(String[] args) {
        try {
            Gen<Integer> gint = new Gen<>(10);
            System.out.println(gint.getOb());
            gint.showType();

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
