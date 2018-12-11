import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  roxcode:string='';
  license:string='';
  email:string='';
  contact:string='';
  quntity:string='';

  foods: Food[] = [
   
    {value: '5', viewValue: '5'},
    {value: '10', viewValue: '10'},
    {value: '15', viewValue: '15'}
  ];


  onAddPost(){
    alert('Your License Has been Updated')
    // this.router.navigate(['/cross-verify']);
  }

    constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'company' : [null, Validators.required],
      'roxcode' : [null, Validators.required],
      'license' : [null, Validators.required],
      'email' : [null, Validators.required],
      'contact' : [null, Validators.required],
      'quntity': [null, Validators.required]

    });
  }
  onFormSubmit(form:NgForm) {
    console.log("Hi..")
    console.log(form)
    this.api.postEuser(form)
     .subscribe(res => {
          let id = res['_id'];
          // this.router.navigate(['/Dashbord', id]);
        }, (err) => {
          console.log('Error in user-create Component');
        });
  }

}
