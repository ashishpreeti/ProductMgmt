import {Component} from "angular2/src/core/metadata";
import {ProductListComponent} from "./products/product-list.component";
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1></div>
                <pm-products></pm-products>`,
    directives: [ProductListComponent],
    providers: [ProductService] //register provider at app level so it can be injected anywhere
})

export class AppComponent {
    pageTitle: string = "Product Management Application"
}
