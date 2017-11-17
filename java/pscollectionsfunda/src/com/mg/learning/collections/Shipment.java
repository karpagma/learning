package com.mg.learning.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

public class Shipment implements Iterable<Product> {
	private static final int LIGHT_VAN_MAX_WEIGHT = 20;
	private static final int PRODUCT_NOT_PRESENT = -1;
	
	private List<Product> lightVanProducts;
    private List<Product> heavyVanProducts;

	
	private final List<Product> products = new ArrayList<>();
	
	public void add(Product product) {
		products.add(product);
	}
	
	public void replace(Product oldProduct, Product newProduct) {
		final int index = products.indexOf(oldProduct);
		if (index != PRODUCT_NOT_PRESENT) {
			products.set(index, newProduct);
		}
	}
	
	public void prepare() {
		/*products.sort((p1, p2) -> Integer.compare(p1.getWeight(), p2.getWeight()));
		int splitPoint = findSplitPoint();
		
		lightVanProducts = products.subList(0, splitPoint);
		heavyVanProducts = products.subList(splitPoint, products.size());*/
		
		this.lightVanProducts = products.stream()
					.filter(p -> p.getWeight() <= LIGHT_VAN_MAX_WEIGHT)
					.collect(Collectors.toList());
		
		this.heavyVanProducts = products.stream()
				.filter(p -> p.getWeight() > LIGHT_VAN_MAX_WEIGHT)
				.collect(Collectors.toList());
		
		System.out.println(this.heavyVanProducts);
	}
	
	private int findSplitPoint() {
		for (int i = 0; i < products.size(); i++) {
            final Product product = products.get(i);
            if (product.getWeight() > LIGHT_VAN_MAX_WEIGHT) {
                return i;
            }
        }

        return 0;
	}

	public List<Product> getLightVanProducts() {
		return this.lightVanProducts;
	}
	
	public List<Product> getHeavyVanProducts() {
		return this.heavyVanProducts;
	}
	
	@Override
	public Iterator<Product> iterator() {
		return products.iterator();
	}

}
