package com.mg.learning.completeref.threading;

class NewThread1 extends Thread {

    public NewThread1() {
        super("Demo Thread");
    }

    @Override
    public void run() {
        try {
            for (int i=5; i>0; i--) {
                System.out.println("Child Thread: " + i);
                Thread.sleep(1000);
            }
        } catch(InterruptedException e) {
            System.out.println("Child interrupted");
        }
        System.out.println("Exiting child thread");
    }

}

public class ThreadTest {
    public static void main(String[] args) {
        Thread thread = new NewThread1();

        try {
            for (int i=6; i>0; i--) {
                System.out.println("Main Thread: " + i);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
        }
        System.out.println("Exiting main thread");
    }
}
