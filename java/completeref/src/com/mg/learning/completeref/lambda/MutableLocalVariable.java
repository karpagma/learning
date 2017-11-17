package com.mg.learning.completeref.lambda;

interface MyFunc {
    int func(int i);
}

public class MutableLocalVariable {
    public static void main(String[] args) {
        try {
            int num = 10;

            MyFunc func = i -> {
                int ret = i + num;
                return ret;
            };

            System.out.println(func.func(num));
            System.out.println(num);

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
