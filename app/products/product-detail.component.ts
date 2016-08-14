import {Component} from "angular2/src/core/metadata";
import {RouteParams} from "angular2/src/router/instruction";

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageHeading: string = "Product Details";

    constructor(private _routeParams: RouteParams) {
        console.log("id is "+ _routeParams.get('id'));
    }

}