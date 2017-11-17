import {Component} from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    router: Router;

    constructor(routeParams: RouteParams, router: Router) {
        this.router = router;
        let id = +routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this.router.navigate(['Products']);
    }
}