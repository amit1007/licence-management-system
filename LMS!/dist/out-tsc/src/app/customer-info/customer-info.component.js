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
var router_1 = require("@angular/router");
// export interface Food {
//   value: string;
//   viewValue: string;
// }
var CustomerInfoComponent = /** @class */ (function () {
    // foods: Food[] = [
    //   {value: '5', viewValue: '5'},
    //   {value: '10', viewValue: '10'},
    //   {value: '15', viewValue: '15'}
    // ];
    function CustomerInfoComponent(router) {
        this.router = router;
    }
    CustomerInfoComponent.prototype.onAddPost = function () {
        alert('Check Your Register Email');
        this.router.navigate(['/cross-verify']);
    };
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-info',
            templateUrl: './customer-info.component.html',
            styleUrls: ['./customer-info.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());
exports.CustomerInfoComponent = CustomerInfoComponent;
//# sourceMappingURL=customer-info.component.js.map