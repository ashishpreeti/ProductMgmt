///<reference path="../node_modules/angular2/src/router/route_config/route_config_impl.d.ts"/>
import {Component} from "angular2/src/core/metadata";
import {ProductListComponent} from "./products/product-list.component";
import {ProductService} from "./products/product.service";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from "angular2/src/router/router_providers";
import {ProductDetailComponent} from "./products/product-detail.component";
import {RouteConfig} from "angular2/src/router/route_config/route_config_decorator";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {WelcomeComponent} from "./home/welcome.component";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <nav class="nav navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Products']">Product List</a></li>
                    </ul>
                </div>
            </nav>      
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {path : '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path : '/product', name: 'Products', component: ProductListComponent},
    {path : '/product/:id', name: 'ProductDetail', component: ProductDetailComponent},
])

export class AppComponent {
    pageTitle: string = "Product Management Application"
}
