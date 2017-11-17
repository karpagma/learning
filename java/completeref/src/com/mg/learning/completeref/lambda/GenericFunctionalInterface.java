package com.mg.learning.completeref.lambda;

interface SomeFunc<T> {
    T func(T t);
}

public class GenericFunctionalInterface {
    public static void main(String[] args) {
        try {
            SomeFunc<String> reverse = str -> {
               StringBuilder stringBuilder = new StringBuilder(str);
               stringBuilder.reverse();
               return stringBuilder.toString();
            };

            String reversed = reverse.func("madhan");
            System.out.println(reversed);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
