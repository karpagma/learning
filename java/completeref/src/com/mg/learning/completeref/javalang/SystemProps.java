package com.mg.learning.completeref.javalang;

public class SystemProps {
    public static void main(String[] args) {
        try {
            String os = System.getProperty("os.name");
            System.out.println(os);

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
