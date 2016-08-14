/**
 * Created by ashishpatil on 12/08/2016.
 */
import {Component} from "angular2/src/core/metadata";
import {IProduct} from "./product";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ProductFilterPipe} from "./product-filter.pipe";
import {AutoGrowDirective} from "../shared/auto-grow.directive";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [AutoGrowDirective, StarComponent]
})

export class ProductListComponent implements OnInit {


    pageTitle: string = "Product List";
    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;


    constructor(private _productService : ProductService) {
    }

    ngOnInit(): any {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            )
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message : string) : void {
        console.log("star rating was clicked!");
        this.pageTitle = 'Product List' + message;
    }

}