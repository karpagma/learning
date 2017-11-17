package com.mg.learning.completeref.enums;

enum Apple {
    Jonathan(10), GoldenDel(9), RedDel(8), Wiseapp(11);

    private int price;

    Apple(int price) {
        this.price = price;
    }

    int getPrice() {
        return this.price;
    }
}

public class HelloEnum {
    public static void main(String[] args) {
        try {

            //Apple ap;

            System.out.println("Wiseapp costs " + Apple.Wiseapp.getPrice());

            System.out.println("all apple costs");
            for (Apple apple: Apple.values()) {
                System.out.println(apple + " costs " + apple.getPrice());
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
