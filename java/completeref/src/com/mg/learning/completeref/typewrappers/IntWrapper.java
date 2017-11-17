package com.mg.learning.completeref.typewrappers;

public class IntWrapper {
    public static void main(String[] args) {
        try {
            Integer iobj = new Integer(100);
            System.out.println(iobj + 2);

            int ret = iobj;
            ret++;
            System.out.println(iobj);
            iobj = ret;
            System.out.println(iobj);
        } catch(Exception e) {
            e.printStackTrace();
        }

    }
}
