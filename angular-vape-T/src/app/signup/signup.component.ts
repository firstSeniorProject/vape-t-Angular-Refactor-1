import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { ConfigService } from './signup.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  emailvalue!: string
  
  constructor(private router: Router, 
              private http: HttpClient,
             // private service:ConfigService,
              private formBuilder:FormBuilder,)
    { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
    })
  }

  signUp(){

    console.log(this.signupForm.value)
    this.http.post<any>("http://localhost:3000/api/users/", this.signupForm.value)
    .subscribe(res => {
      alert("Sign Up Success");
      this.signupForm.reset();
      this.router.navigate(['login']);
  }, err => {alert("Error: Something went wrong " + err.message)})
  }
}
