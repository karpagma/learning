package com.mg.learning.completeref.javalang;

class COne implements Cloneable {
    String name;
    int age;

    COne(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void shout() {
        System.out.println(name + " is shouting at his age of " + age);
    }

    protected COne clone() throws CloneNotSupportedException {
        return (COne) super.clone();
    }

    protected void finalize() {
        System.out.println("i am finalized... bye - " + this.hashCode());
    }
}

public class ObjectMethods {
    public static void main(String[] args) {
        try {
            COne c1 = new COne("madhan", 42);
            c1.shout();

            for (int i=0; i<10; i++) {
                COne c2 = c1.clone();
                c2.shout();
                System.gc();
            }

            while (true) {
                Thread.sleep(1000);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
