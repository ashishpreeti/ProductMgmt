import {Component} from "angular2/src/core/metadata";

@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1></div>`
})

export class AppComponent {
    pageTitle: string = "Product Management Application"
}
