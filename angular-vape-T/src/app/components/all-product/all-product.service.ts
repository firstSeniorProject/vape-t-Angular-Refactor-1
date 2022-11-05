import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  private url='http://127.0.0.1:3000/product/'
  constructor(
    private httpClient: HttpClient
  ) {}
getAllProduct() {
return this.httpClient.get(this.url);
}
}
