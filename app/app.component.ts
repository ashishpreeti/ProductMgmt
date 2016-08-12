import {Component} from "angular2/src/core/metadata";
import {ProductListComponent} from "./products/product-list.component";

@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1></div>
                <pm-products></pm-products>`,
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = "Product Management Application"
}
