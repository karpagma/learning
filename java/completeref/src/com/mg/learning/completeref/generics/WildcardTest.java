package com.mg.learning.completeref.generics;

class Stats<T extends Number> {

    private T[] nums;

    Stats(T[] t) {
        nums = t;
    }

    double average() {
        double sum = 0.0;

        for (int i=0; i<nums.length; i++) {
            sum += nums[i].doubleValue();
        }

        return sum;
    }

    boolean sameAvg(Stats<?> ob) {
        if (this.average() == ob.average()) {
            return true;
        }

        return false;
    }

}

public class WildcardTest {
    public static void main(String[] args) {
        try {
            Integer[] ints = {1, 2, 3, 4, 5};
            Stats<Integer> intStats = new Stats<>(ints);
            System.out.println(intStats.average());

            Double[] doubles = {1.1, 2.2, 3.3, 4.4, 5.5};
            Stats<Double> doubleStats = new Stats<>(doubles);
            System.out.println(doubleStats.average());

            boolean result = intStats.sameAvg(doubleStats);
            System.out.println(result);



        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
