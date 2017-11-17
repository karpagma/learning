package com.mg.learning.completeref.generics;

interface MinMax<T extends Comparable<T>> {
    T min();
    T max();
}

class MyClass<T extends Comparable<T>> implements MinMax<T> {
    private T[] vals;

    MyClass(T[] vals) {
        this.vals = vals;
    }

    public T min() {
        T min = vals[0];

        for (int i=1; i<vals.length; i++) {
            if (vals[i].compareTo(min) < 0) {
                min = vals[i];
            }
        }

        return min;
    }

    public T max() {
        T max = vals[0];

        for (int i=1; i<vals.length; i++) {
            if (vals[i].compareTo(max) > 0) {
                max = vals[i];
            }
        }

        return max;
    }

}

public class GenericInterface {
    public static void main(String[] args) {
        try {
            MinMax<Integer> integerMinMax = new MyClass<>(new Integer[]{3, 4, 5, 1});
            System.out.println(integerMinMax.max());
            System.out.println(integerMinMax.min());

            MinMax<String> stringMinMax = new MyClass<>(new String[]{"madhan", "swarna", "shrishti", "shaashvat"});
            System.out.println(stringMinMax.min());
            System.out.println(stringMinMax.max());


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
