import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

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

@Component({
  selector: 'app-euser-license',
  templateUrl: './euser-license.component.html',
  styleUrls: ['./euser-license.component.css']
})
export class EUserLicenseComponent {
  
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  roxcode:string='';
  license:string='';
  email:string='';
  contact:number;


 

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  onAddPost(){
    alert('Check Your Register Email')
    // this.router.navigate(['/cross-verify']);
  }
  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'company' : [null, Validators.required],
      'roxcode' : [null, Validators.required],
      'license' : [null, Validators.required],
      'email' : [null, Validators.required],
      'contact' : [null, Validators.required]

    });
  }
  onFormSubmit(form:NgForm) {
    console.log("Hi..")
    console.log(form)
    this.api.postEuser(form)
     .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/cross-verify']);
        }, (err) => {
          console.log('Error in user-create Component');
        });
  }

 
}  

