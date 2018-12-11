"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrossVerifyComponent = /** @class */ (function () {
    function CrossVerifyComponent() {
    }
    CrossVerifyComponent.prototype.onAddPost = function () {
        alert('Now Your Valid User');
    };
    CrossVerifyComponent.prototype.ngOnInit = function () {
    };
    CrossVerifyComponent = __decorate([
        core_1.Component({
            selector: 'app-cross-verify',
            templateUrl: './cross-verify.component.html',
            styleUrls: ['./cross-verify.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CrossVerifyComponent);
    return CrossVerifyComponent;
}());
exports.CrossVerifyComponent = CrossVerifyComponent;
//# sourceMappingURL=cross-verify.component.js.map