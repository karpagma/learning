import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from './product';

@Injectable()
export class ProductService {
    private url = 'api/products/products.json';
    private http : Http;

    constructor(http: Http) {
        this.http = http;
    }

    getProducts() : Observable<IProduct[]> {
        return this.http.get(this.url)
                .map(r => <IProduct[]>r.json())
                .do(data => console.log('All:' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error')
    }
}