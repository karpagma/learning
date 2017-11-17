package com.mg.learning.coreplatform.collections;

import java.util.ArrayList;

public class ArrayListTest {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("madhan");
        names.add("swarna");
        System.out.println(names.size());

        for (String name:names) {
            System.out.println(name);
        }
    }
}
