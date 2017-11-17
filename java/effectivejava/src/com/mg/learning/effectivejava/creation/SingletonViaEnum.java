package com.mg.learning.effectivejava.creation;

enum Elvis {
    INSTANCE;

    public void hello() {
        System.out.println("Hello, singleton via enum");
    }
}

public class SingletonViaEnum {
    public static void main(String[] args) {
        try {
            Elvis elvis = Elvis.INSTANCE;
            elvis.hello();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
