package com.mg.learning.coreplatform.streams;

import java.lang.AutoCloseable;

class AutoCloseableImpl implements AutoCloseable {
    @Override
    public void close() throws Exception {
        System.out.println("close");
    }
}

public class MyAutoCloseable {
    public static void main(String[] args) {
        try (AutoCloseableImpl autoCloseable = new AutoCloseableImpl()) {


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

