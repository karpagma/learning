package com.mg.learning.completeref.threading;

class Q {
    int n;
    private boolean valueset = false;

    synchronized int get() {
        while (!valueset) {
            try {
                wait();
            } catch(InterruptedException e) {
                System.out.println("InterruptedException caught");
            }
        }

        System.out.println("Got: " + n);
        valueset = false;
        notify();
        return n;
    }

    synchronized void put(int n) {
        while (valueset) {
            try {
                wait();
            } catch(InterruptedException e) {
                System.out.println("InterruptedException caught");
            }
        }

        this.n = n;
        valueset = true;
        System.out.println("Put: " + n);
        notify();
    }
}

class Producer implements Runnable {
    Q q;

    Producer(Q q) {
        this.q = q;
        new Thread(this, "Producer").start();
    }

    @Override
    public void run() {
        int i = 0;

        while (true) {
            q.put(i++);
        }
    }
}

class Consumer implements Runnable {
    Q q;

    Consumer(Q q) {
        this.q = q;
        new Thread(this, "Consumer").start();
    }

    @Override
    public void run() {
        while (true) {
            q.get();
        }
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        try {
            Q q = new Q();
            new Producer(q);
            new Consumer(q);

            System.out.println("Press ctrl-c to stop");

        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
}

