import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cross-verify',
  templateUrl: './cross-verify.component.html',
  styleUrls: ['./cross-verify.component.css']
})
export class CrossVerifyComponent implements OnInit {
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
}
