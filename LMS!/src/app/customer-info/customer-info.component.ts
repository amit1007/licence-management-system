import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

// export interface Food {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  roxcode:string='';
  license:string='';
  email:string='';
  contact:string='';

  // foods: Food[] = [
  //   {value: '5', viewValue: '5'},
  //   {value: '10', viewValue: '10'},
  //   {value: '15', viewValue: '15'}
  // ];
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
    this.api.postFreeuser(form)
     .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/cross-verify']);
        }, (err) => {
          console.log('Error in user-create Component');
        });
  }


}
