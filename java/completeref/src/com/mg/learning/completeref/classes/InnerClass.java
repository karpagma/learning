package com.mg.learning.completeref.classes;

class Outer {
    private int outerx = 100;

    void test() {
        Inner inner = new Inner();
        inner.display();
    }

    class Inner {
        void display() {
            System.out.println("display: outerx = " + outerx);
        }
    }
}

public class InnerClass {
    public static void main(String[] args) {
        try {
            Outer outer = new Outer();
            outer.test();
        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
}
