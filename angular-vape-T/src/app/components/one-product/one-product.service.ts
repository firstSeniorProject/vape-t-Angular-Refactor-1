import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OneProductService {
private url='http://127.0.0.1:3000/product/'
  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get(this.url)

  }



}
