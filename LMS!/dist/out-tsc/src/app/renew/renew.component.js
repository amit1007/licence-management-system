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
var RenewComponent = /** @class */ (function () {
    function RenewComponent() {
        this.foods = [
            { value: '5', viewValue: '5' },
            { value: '10', viewValue: '10' },
            { value: '15', viewValue: '15' }
        ];
    }
    RenewComponent.prototype.onAddPost = function () {
        alert('Your License Has been Updated');
        // this.router.navigate(['/cross-verify']);
    };
    RenewComponent.prototype.ngOnInit = function () {
    };
    RenewComponent = __decorate([
        core_1.Component({
            selector: 'app-renew',
            templateUrl: './renew.component.html',
            styleUrls: ['./renew.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RenewComponent);
    return RenewComponent;
}());
exports.RenewComponent = RenewComponent;
//# sourceMappingURL=renew.component.js.map