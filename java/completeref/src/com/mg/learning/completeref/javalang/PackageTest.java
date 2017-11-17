package com.mg.learning.completeref.javalang;

public class PackageTest {
    public static void main(String[] args) {
        try {
            Package[] packages = Package.getPackages();
            for (Package pack : packages) {
                System.out.println(pack.getName());
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
