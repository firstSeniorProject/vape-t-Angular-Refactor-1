import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class ConfigService {


 // public signupForm !: FormGroup;

  constructor(private http: HttpClient) { }


}
