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
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var api_service_1 = require("../api.service");
var router_1 = require("@angular/router");
// export interface Quntity {
//   value: string;
//   viewValue: string;
// }
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
var EUserLicenseComponent = /** @class */ (function () {
    function EUserLicenseComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.firstname = '';
        this.lastname = '';
        this.company = '';
        this.roxcode = '';
        this.license = '';
        this.email = '';
        this.contact = '';
    }
    EUserLicenseComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            'firstname': [null, forms_1.Validators.required],
            'lastname': [null, forms_1.Validators.required],
            'company': [null, forms_1.Validators.required],
            'roxcode': [null, forms_1.Validators.required],
            'license': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.required],
            'contact': [null, forms_1.Validators.required]
        });
    };
    EUserLicenseComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log("Hi..");
        console.log(form);
        this.api.postEuser(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/login', id]);
        }, function (err) {
            console.log('Error in user-create Component');
        });
    };
    EUserLicenseComponent = __decorate([
        core_1.Component({
            selector: 'app-euser-license',
            templateUrl: './euser-license.component.html',
            styleUrls: ['./euser-license.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, api_service_1.ApiService, forms_2.FormBuilder])
    ], EUserLicenseComponent);
    return EUserLicenseComponent;
}());
exports.EUserLicenseComponent = EUserLicenseComponent;
//# sourceMappingURL=euser-license.component.js.map