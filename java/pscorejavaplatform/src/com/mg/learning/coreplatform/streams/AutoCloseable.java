package com.mg.learning.coreplatform.streams;

import java.io.*;

public class AutoCloseable {
    public static void main(String[] args) {
        char[] buffer = new char[8];
        int length;
        try (Reader reader = new FileReader("file1.txt");
             Writer writer = new FileWriter("file2.txt")) {
            while ((length = reader.read(buffer)) >= 0) {
                System.out.println("\nlength: " + length);
                writer.write(buffer, 0, length);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
