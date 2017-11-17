package com.mg.learning.completeref.javalang;

public class RuntimeTest {
    public static void main(String[] args) {
        try {
            long freeMemory =  Runtime.getRuntime().freeMemory();
            long totalMemory =  Runtime.getRuntime().totalMemory();

            System.out.println(freeMemory / (1024 * 1024) + " MB");
            System.out.println(totalMemory / (1024 * 1024) + " MB");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
