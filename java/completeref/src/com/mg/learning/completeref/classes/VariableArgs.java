package com.mg.learning.completeref.classes;

public class VariableArgs {
    static void vatest(int ... v) {
        for (int i: v) {
            System.out.println(i);
        }
    }

    public static void main(String[] args) {
        VariableArgs.vatest(1);
        VariableArgs.vatest(1, 2, 3);
    }
}
