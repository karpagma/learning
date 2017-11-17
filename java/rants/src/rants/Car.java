package rants;

public class Car {
	private Engine engine;
	
	public Car(Engine engine) {
		this.engine = engine;
	}
	
	public int drive() {
		return this.engine.accelarate();
	}
}
