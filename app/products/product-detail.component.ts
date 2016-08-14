import {Component} from "angular2/src/core/metadata";
import {RouteParams} from "angular2/src/router/instruction";
import {Router} from "angular2/src/router/router";

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageHeading: string = "Product Details";

    constructor(private _routeParams: RouteParams,
                private _router: Router) {
        console.log("id is "+ _routeParams.get('id'));
        let id = ":" + _routeParams.get('id');
        this.pageHeading +=  id;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}