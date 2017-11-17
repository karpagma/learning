package com.mg.learning.effectivejava.objectmethods;

import java.awt.*;

class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        /*if (!(o instanceof Point)) {
            return false;
        }*/
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Point other = (Point) o;
        return x == other.x && y == other.y;
    }
}

class ColorPoint extends Point {
    private final Color color;

    public ColorPoint(int x, int y, Color color) {
        super(x, y);
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Point)) {
            return false;
        }

        if (!(o instanceof ColorPoint)) {
            return o.equals(this);
        }

        return super.equals(o) &&
                ((ColorPoint) o).color == color;
    }
}

public class EqualsTransitivityViolation {
    public static void main(String[] args) {
        /*Point p1 = new Point(2, 3 );
        ColorPoint p2 = new ColorPoint(2, 3, Color.RED);

        System.out.println(p1.equals(p2));
        System.out.println(p2.equals(p1));*/

        ColorPoint p1 = new ColorPoint(1, 2, Color.RED);
        Point p2 = new Point(1, 2);
        ColorPoint p3 = new ColorPoint(1, 2, Color.BLUE);

        System.out.println(p1.equals(p2));
        System.out.println(p2.equals(p3));
        System.out.println(p1.equals(p3));
    }
}
