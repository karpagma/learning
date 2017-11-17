package com.mg.learning.effectivejava.creation;


class Parent {

    @SuppressWarnings("unused")
    private final Object guardian = new Object() {
        @Override
        protected void finalize() {
            doFinalize();
        }
    };

    private void doFinalize() {
        System.out.println("Finalize of parent class");
    }

}

class Child extends Parent {

    @Override
    protected void finalize() {
        System.out.println("Finalize from child class");
    }

}

public class FinalizerGuardian {
    private static void doIt() {
        Child c = new Child();
        System.out.println(c);
    }

    public static void main(String[] args) {
        try {
            doIt();
            System.gc();
            Thread.sleep(5000);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
