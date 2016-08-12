/**
 * Created by ashishpatil on 12/08/2016.
 */
import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = "Product List"
}