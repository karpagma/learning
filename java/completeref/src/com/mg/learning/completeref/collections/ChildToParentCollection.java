package com.mg.learning.completeref.collections;

import java.util.ArrayList;
import java.util.List;

class Vehicle {
    String model;
    String make;

    Vehicle(String model, String make) {
        this.model = model;
        this.make = make;
    }

    String getModel() {
        return model;
    }

    String getMake() {
        return make;
    }
}

class Car extends Vehicle {
    Car(String make, String model) {
        super(make, model);
    }
}

public class ChildToParentCollection {
    public static void main(String[] args) {
        try {
            List<Vehicle> vehicles = new ArrayList<>();
            vehicles.add(new Car("Maruti", "800"));
            vehicles.add(new Car("Maruti", "801"));

            vehicles.removeIf(c -> c.getMake() == "801");

            for (Vehicle vehicle : vehicles) {
                System.out.println(vehicle.getMake());
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
