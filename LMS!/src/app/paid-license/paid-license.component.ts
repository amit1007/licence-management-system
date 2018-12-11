import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router'

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-paid-license',
  templateUrl: './paid-license.component.html',
  styleUrls: ['./paid-license.component.css']
})
export class PaidLicenseComponent implements OnInit {
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  roxcode:string='';
  license:string='';
  email:string='';
  contact:number;
  quntity:number;

  foods: Food[] = [
   
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '15', viewValue: '15'}
  ];
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  onAddPost(){
    alert('Check Your Register Email')
    // this.router.navigate(['/paid-license-verify']);
  }

  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'company' : [null, Validators.required],
      'roxcode' : '',
      'license' : '',
      'email' : [null, Validators.required],
      'contact' : [null, Validators.required],
      'quntity':[null,Validators.required]

    });
  }
  onFormSubmit(form:NgForm) {
    console.log("Hi..")
    console.log(form)
    this.api.postMainuser(form)
     .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/paid-license-verify']);
        }, (err) => {
          console.log('Error in user-create Component');
        });
  }}
