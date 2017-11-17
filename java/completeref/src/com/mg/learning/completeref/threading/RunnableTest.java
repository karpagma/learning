package com.mg.learning.completeref.threading;

class NewThread implements Runnable {

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

public class RunnableTest {
    public static void main(String[] args) {
        Runnable runnable = new NewThread();
        Thread thread = new Thread(runnable, "Demo thread");
        thread.start();

        try {
            for (int i=6; i>0; i--) {
                System.out.println("Main Thread: " + i);
                Thread.sleep(1000);
            }

        } catch(InterruptedException e) {
            System.out.println("Main thread interrupted");
        }
        System.out.println("Main thread exiting");
    }
}
