/**
 * Created by ashishpatil on 12/08/2016.
 */
import {Component} from "angular2/src/core/metadata";
import {IProduct} from "./Product";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ProductFilterPipe} from "./product-filter.pipe";
import {AutoGrowDirective} from "../utils/auto-grow.directive";
@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [AutoGrowDirective]
})

export class ProductListComponent implements OnInit {
    ngOnInit(): any {
        console.log("We initialised the Product List");
    }
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}