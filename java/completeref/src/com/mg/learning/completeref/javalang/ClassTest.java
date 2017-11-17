package com.mg.learning.completeref.javalang;

import java.lang.reflect.Method;

class X {
    int a;
    float b;

    void say() {

    }
}

public class ClassTest {
    public static void main(String[] args) {
        try {
            X x = new X();
            Class<?> cls= x.getClass();

            Method[] methods = cls.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
