import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'my-app',
    template: `<div><h1>{{myName}}</h1></div>`

})

export class MyComponent {
    myName : string = 'My name is Ash'
}
