package com.mg.learning.coreplatform.collections;

import java.util.ArrayList;

class MyClass {
    private String key;
    private String value;

    MyClass(String key, String value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public boolean equals(Object other) {
        if (!(other instanceof MyClass)) {
            return false;
        }

        MyClass otherObj = (MyClass) other;

        return this.key.equals(otherObj.key) &&
                this.value.equals(otherObj.value);
    }

    @Override
    public String toString() {
        return String.format("key: %s, value:%s", key, value);
    }
}

public class LambdaExpressionsTest {
    public static void main(String[] args) {
        ArrayList<MyClass> list = new ArrayList<>();
        list.add(new MyClass("name", "aws"));
        list.add(new MyClass("type", "public cloud"));

        list.removeIf(m -> m.equals(new MyClass("name", "aws")));

        for (MyClass myClass: list) {
            System.out.println(myClass);
        }
    }
}
