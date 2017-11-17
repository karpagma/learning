package com.mg.learning.completeref.classes;

class Box {
    private int height, weight, width;

    Box(int height, int weight, int width) {
        this.height = height;
        this.weight = weight;
        this.width = width;
    }

    Box() {
        this(0, 0, 0);
    }

    int vol() {
        return this.height * this.weight * this.width;
    }

    float scaledVol(int scale, float factor) {
        return this.vol() * scale * factor;
    }
}

public class Constructor {
    public static void main(String[] args) {
        Box box = new Box();
        System.out.println(box.vol());

        System.out.println(box.scaledVol(10, 2.5f));
    }
}
