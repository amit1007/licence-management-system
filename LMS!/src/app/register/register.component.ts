import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';



// import { AlertService, UserService } from '../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  firstname:string='';
  lastname:string='';
  company:string='';
  roxcode:string='';

  constructor(
    private router: Router, private api: ApiService, private formBuilder: FormBuilder
    
   ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'company' : [null, Validators.required],
      'roxcode' : [null, Validators.required]
    });
}
}
