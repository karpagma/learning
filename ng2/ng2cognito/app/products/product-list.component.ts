import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[] = [];
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit(): void {
        this.productService.getProducts()
                            .subscribe(
                                products => this.products = products,
                                error => alert(error) 
                            );
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    } 

    onRatingClicked(message: string, product: IProduct) {
        product.starRating >= 5 ? product.starRating-- : product.starRating++;
    }
}