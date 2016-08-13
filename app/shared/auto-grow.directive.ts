import {Directive} from "angular2/src/core/metadata";
import {ElementRef} from "angular2/src/core/linker/element_ref";
@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef) {
    }

    onFocus() {
        this.el.nativeElement.size = 40;
    }

    onBlur() {
        this.el.nativeElement.size = 20;
    }

}