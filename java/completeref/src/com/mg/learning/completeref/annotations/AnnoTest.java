package com.mg.learning.completeref.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
    String str();
    int val();
}

public class AnnoTest {
    @MyAnno(str="some string", val=100)
    public static void myMethod() throws NoSuchMethodException {
        AnnoTest annoTest = new AnnoTest();
        Class<?> c = annoTest.getClass();
        Method m = c.getMethod("myMethod");
        MyAnno anno = m.getAnnotation(MyAnno.class);

        System.out.println(anno.str() + ", " + anno.val());
    }

    public static void main(String[] args) {
        try {
            System.out.println("in main...");
            AnnoTest.myMethod();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
