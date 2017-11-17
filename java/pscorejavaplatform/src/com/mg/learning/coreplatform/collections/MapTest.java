package com.mg.learning.coreplatform.collections;

import java.util.HashMap;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

public class MapTest {
    public static void main(String[] args) {
        Map<String, Integer> names = new HashMap<>();
        names.put("madhan", 42);
        names.put("swarna", 39);
        names.put("madhan", 43);

        names.forEach((k, v) -> System.out.println(k + "|" + v));

        SortedMap<String, Integer> names1 = new TreeMap<>();
        names1.put("madhan", 42);
        names1.put("swarna", 39);
        names1.put("madhan", 43);

        names1.forEach((k, v) -> System.out.println(k + "|" + v));

    }
}
