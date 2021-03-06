System.register(["angular2/src/core/metadata", "angular2/src/core/linker/element_ref"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var metadata_1, element_ref_1;
    var AutoGrowDirective;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (element_ref_1_1) {
                element_ref_1 = element_ref_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el) {
                    this.el = el;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    this.el.nativeElement.size = 40;
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.el.nativeElement.size = 20;
                };
                AutoGrowDirective = __decorate([
                    metadata_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [element_ref_1.ElementRef])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map