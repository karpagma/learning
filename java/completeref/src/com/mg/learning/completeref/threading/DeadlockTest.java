package com.mg.learning.completeref.threading;

class Cone {

    synchronized void foo(Ctwo c2) {
        String name = Thread.currentThread().getName();
        System.out.println(name + " entered foo");

        try {
            Thread.sleep(1000);
        } catch(Exception e) {
            System.out.println("Cone interrupted");
        }

        System.out.println(name + " trying to call Ctwo::last");
        c2.last();
    }

    synchronized void last() {
        System.out.println("Cone::last");
    }

}

class Ctwo {

    synchronized void bar(Cone c1) {
        String name = Thread.currentThread().getName();
        System.out.println(name + " entered bar");

        try {
            Thread.sleep(1000);
        } catch(Exception e) {
            System.out.println("Ctwo interrupted");
        }

        System.out.println(name + " trying to call Cone::last");
        c1.last();
    }

    synchronized void last() {
        System.out.println("Ctwo::last");
    }
}

public class DeadlockTest {

    public static void main(String[] args) {
        try {
            Cone c1 = new Cone();
            Ctwo c2 = new Ctwo();

            new Thread(() -> {
                c1.foo(c2);
                System.out.println("after calling c1.foo");
            }, "thread1").start();

            new Thread(() -> {
                c2.bar(c1);
                System.out.println("after calling c2.bar");
            }, "thread2").start();

        } catch(Exception e) {
           e.printStackTrace();
        }
    }

}
