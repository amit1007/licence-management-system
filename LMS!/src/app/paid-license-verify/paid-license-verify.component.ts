import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paid-license-verify',
  templateUrl: './paid-license-verify.component.html',
  styleUrls: ['./paid-license-verify.component.css']
})
export class PaidLicenseVerifyComponent implements OnInit {
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  onAddPost(){
    alert('Now Your Valid User')
  }


  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'company' : [null, Validators.required]
    })
    
  }
  onFormSubmit(form:NgForm) {
    console.log("Hi..")
    console.log(form)
    this.api.getMainuser(from)
     .subscribe(res => {
          let id = res['_id'];
          // this.router.navigate(['/paid-license-verify']);
        }, (err) => {
          console.log('Error in user-create Component');
        });

}
