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
var forms_1 = require("@angular/forms");
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var PaidLicenseComponent = /** @class */ (function () {
    function PaidLicenseComponent(router) {
        this.router = router;
        this.foods = [
            { value: '5', viewValue: '5' },
            { value: '10', viewValue: '10' },
            { value: '15', viewValue: '15' }
        ];
        this.emailFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    PaidLicenseComponent.prototype.onAddPost = function () {
        alert('Check Your Register Email');
        this.router.navigate(['/paid-license-verify']);
    };
    PaidLicenseComponent.prototype.ngOnInit = function () {
    };
    PaidLicenseComponent = __decorate([
        core_1.Component({
            selector: 'app-paid-license',
            templateUrl: './paid-license.component.html',
            styleUrls: ['./paid-license.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], PaidLicenseComponent);
    return PaidLicenseComponent;
}());
exports.PaidLicenseComponent = PaidLicenseComponent;
//# sourceMappingURL=paid-license.component.js.map