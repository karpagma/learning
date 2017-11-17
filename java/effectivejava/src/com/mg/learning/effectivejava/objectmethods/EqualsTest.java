package com.mg.learning.effectivejava.objectmethods;

import java.util.Arrays;
import java.util.List;

public class EqualsTest {
    public static void main(String[] args) {
        try {
            List<String> names = Arrays.asList("madhan");
            List<String> names2 = Arrays.asList("Madhan");

            System.out.println(names.equals(names2));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
