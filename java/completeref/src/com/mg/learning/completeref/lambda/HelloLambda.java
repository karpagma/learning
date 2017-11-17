package com.mg.learning.completeref.lambda;

interface MyNumber {
    double getValue();
}

interface NumTest {
    boolean check(int i);
}

public class HelloLambda {
    public static void main(String[] args) {
        try {
            MyNumber num = () -> 23.4;
            System.out.println(num.getValue());

            NumTest numTest = i -> i % 2 == 0;

            System.out.println(numTest.check(20));
            System.out.println(numTest.check(21));

        } catch(Exception e) {
            e.printStackTrace();
        }

    }
}
