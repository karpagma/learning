package com.mg.learning.completeref.threading;

class Store {
    synchronized void get() {
        try {
            System.out.println("b4 waiting");
            this.wait();
            System.out.println("after waiting");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    synchronized void put() {
        System.out.println("b4 notify");
        this.notify();
        System.out.println("after notify");
    }
}

class NotifyTest {
    public static void main(String[] args) {
        try {
            Store store = new Store();

            new Thread(() -> {
                store.get();
            }).start();

            Thread.sleep(1000);

            new Thread(() -> {
                store.put();
            }).start();

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}

