import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {MatSelectModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, } from "@angular/material";

import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';




import {ValidateService} from '../app/services/validate.service'
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CrossVerifyComponent } from './cross-verify/cross-verify.component';
import { PaidLicenseComponent } from './paid-license/paid-license.component';
import { PaidLicenseVerifyComponent } from './paid-license-verify/paid-license-verify.component';
import { RenewComponent } from './renew/renew.component';
import { EUserLicenseComponent } from './euser-license/euser-license.component';


import { RegisterComponent } from './register/register.component';
import { LADetailsComponent } from './ladetails/ladetails.component';
import { FreeUsersComponent } from './free-users/free-users.component';
import { LicenseReportComponent } from './license-report/license-report.component';



const appRoutes: Routes = [
  {path: '',redirectTo: '/rmchome',pathMatch: 'full'},
  {path: 'Dashbord',component: MyDashboardComponent,data: { title: 'License Dashbord' }},
  {path: 'Register',component: RegisterComponent,data: { title: 'License Dashbord' }},
  {path: 'login',component: LoginComponent,data: { title: 'License login ' }},
  {path: 'customer',component: CustomerInfoComponent,data: { title: 'License customer ' }},
  {path: 'cross-verify',component: CrossVerifyComponent,data: { title: 'License cross-verify ' }},
  {path: 'paid-license-verify',component: PaidLicenseVerifyComponent,data: { title: 'License paid-license-verify' }},
  {path: 'PaidLicense',component: PaidLicenseComponent,data: { title: 'License  PaidLicense' }},
  {path: 'Renew',component: RenewComponent,data: { title: 'License  ' }},
  {path: 'euserLicense',component: EUserLicenseComponent,data: { title: 'License  ' }},
  {path: 'license-report/:id',component: LicenseReportComponent,data: { title: 'License report ' }},
  {path:'LADetails',component: LADetailsComponent,data:{title:'LADetails'}},
  {path:'freeusers',component: FreeUsersComponent,data:{title:'freeusers'}},
  // {path: 'intent-details/:id',component: IntentDetailComponent,data: { title: 'Book Details' }},
  // {path: 'intent-create',component: IntentCreateComponent,data: { title: 'Create Book' }},
  // {path: 'intent-edit/:id',component: IntentEditComponent,data: { title: 'Edit Book' }},
  {path: '',redirectTo: '/books',pathMatch: 'full' },


];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyNavComponent,
    MyDashboardComponent,  
    LoginComponent, 
    CustomerInfoComponent,
    CrossVerifyComponent,
    PaidLicenseComponent,
    PaidLicenseVerifyComponent,
    RenewComponent,
    EUserLicenseComponent,
    RegisterComponent,
    LADetailsComponent,
    FreeUsersComponent,
    LicenseReportComponent,
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule
  ],
  providers: [
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
