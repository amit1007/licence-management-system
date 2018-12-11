"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var navbar_component_1 = require("./navbar/navbar.component");
var layout_1 = require("@angular/cdk/layout");
var my_nav_component_1 = require("./my-nav/my-nav.component");
var my_dashboard_component_1 = require("./my-dashboard/my-dashboard.component");
var validate_service_1 = require("../app/services/validate.service");
var auth_service_1 = require("./services/auth.service");
var login_component_1 = require("./login/login.component");
var customer_info_component_1 = require("./customer-info/customer-info.component");
var cross_verify_component_1 = require("./cross-verify/cross-verify.component");
var paid_license_component_1 = require("./paid-license/paid-license.component");
var paid_license_verify_component_1 = require("./paid-license-verify/paid-license-verify.component");
var renew_component_1 = require("./renew/renew.component");
var euser_license_component_1 = require("./euser-license/euser-license.component");
var register_component_1 = require("./register/register.component");
var ladetails_component_1 = require("./ladetails/ladetails.component");
var free_users_component_1 = require("./free-users/free-users.component");
var subuser_component_1 = require("./subuser/subuser.component");
var appRoutes = [
    { path: '', redirectTo: '/rmchome', pathMatch: 'full' },
    // {path: 'rmchome',component: RMCHomeComponent,data: { title: 'RMC Home' }}, 
    // {path: 'QlikUserList',component: QlikUserMasterComponent,data: { title: 'Qlik User List' }},
    // {path: 'QlikUserCreate',component: QlikUserCreateComponent,data: { title: 'Create Qlik User' }},
    // {path: 'QlikUserDetails/:id',component: QlikUserDetailsComponent,data: { title: 'Qlik User Details' }},
    // {path: 'QlikUserEdit/:id',component: QlikUserEditComponent,data: { title: 'Edit Qlik User Details' }},
    // {path: 'QlikUserNew',component: QlikUserDetailsNewComponent,data: { title: 'Qlik User' }},
    // {path: 'Register',component: RegisterComponent,data: { title: 'Register' }},
    // {path: 'Intent',component: IntentComponent,data: { title: 'Intent' }},
    { path: 'Dashbord', component: my_dashboard_component_1.MyDashboardComponent, data: { title: 'License Dashbord' } },
    { path: 'Register', component: register_component_1.RegisterComponent, data: { title: 'License Dashbord' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: 'License login ' } },
    { path: 'customer', component: customer_info_component_1.CustomerInfoComponent, data: { title: 'License customer ' } },
    { path: 'cross-verify', component: cross_verify_component_1.CrossVerifyComponent, data: { title: 'License cross-verify ' } },
    { path: 'paid-license-verify', component: paid_license_verify_component_1.PaidLicenseVerifyComponent, data: { title: 'License paid-license-verify' } },
    { path: 'PaidLicense', component: paid_license_component_1.PaidLicenseComponent, data: { title: 'License  PaidLicense' } },
    { path: 'Renew', component: renew_component_1.RenewComponent, data: { title: 'License  ' } },
    { path: 'euserLicense', component: euser_license_component_1.EUserLicenseComponent, data: { title: 'License  ' } },
    { path: 'subuser', component: subuser_component_1.SubuserComponent, data: { title: 'License  ' } },
    { path: 'LADetails', component: ladetails_component_1.LADetailsComponent, data: { title: 'LADetails' } },
    { path: 'freeusers', component: free_users_component_1.FreeUsersComponent, data: { title: 'freeusers' } },
    // {path: 'intent-details/:id',component: IntentDetailComponent,data: { title: 'Book Details' }},
    // {path: 'intent-create',component: IntentCreateComponent,data: { title: 'Create Book' }},
    // {path: 'intent-edit/:id',component: IntentEditComponent,data: { title: 'Edit Book' }},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                my_nav_component_1.MyNavComponent,
                my_dashboard_component_1.MyDashboardComponent,
                login_component_1.LoginComponent,
                customer_info_component_1.CustomerInfoComponent,
                cross_verify_component_1.CrossVerifyComponent,
                paid_license_component_1.PaidLicenseComponent,
                paid_license_verify_component_1.PaidLicenseVerifyComponent,
                renew_component_1.RenewComponent,
                euser_license_component_1.EUserLicenseComponent,
                register_component_1.RegisterComponent,
                ladetails_component_1.LADetailsComponent,
                free_users_component_1.FreeUsersComponent,
                subuser_component_1.SubuserComponent,
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatTableModule,
                material_1.MatProgressBarModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatFormFieldModule,
                layout_1.LayoutModule,
                material_1.MatToolbarModule,
                material_1.MatSidenavModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatMenuModule
            ],
            providers: [
                validate_service_1.ValidateService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map