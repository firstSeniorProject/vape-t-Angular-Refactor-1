import { Component, OnInit } from '@angular/core';
import { AllProductService } from './all-product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  posts:any

  constructor(private service:AllProductService) { }

  ngOnInit() {
    this.service.getAllProduct()
    .subscribe(response=>{
      console.log(response);
      
      this.posts=response
    
  
    })
  }

}
