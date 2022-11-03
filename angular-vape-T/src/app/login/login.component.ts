import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { ConfigService } from './signup.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  emailvalue!: string
  
  constructor(private router: Router, 
              private http: HttpClient,
             // private service:ConfigService,
              private formBuilder:FormBuilder,){ }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //name:[''],
      email:[''],
      password:[''],
    })
  }

  login(){

    console.log(this.loginForm.value)
    this.http.post<any>("http://localhost:3000/api/users/login", this.loginForm.value)
    .subscribe(res => {
      alert("Login Up Success");
      this.loginForm.reset();
      this.router.navigate(['/']);
  }, err => {alert("Error: Something went wrong " + err.message)})
  }
}


