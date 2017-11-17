package com.mg.learning.completeref.javalang;

public class PrimitiveTest {
    static void takeInteger(Integer i) {
        i += 10;
    }

    static void takeInt(int i) {
        i += 10;
    }

    public static void main(String[] args) {
        try {
            Integer i = new Integer(20);
            takeInt(i);
            System.out.println(i);

            Float f = 20.2f;
            Float f1 = Float.sum(2, 3);
            System.out.println(f1);

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
