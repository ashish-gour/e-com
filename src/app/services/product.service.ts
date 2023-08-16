import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProduct(product : object){
    this.http.post('http://localhost:3000/product',product).subscribe((response)=>{
      console.log(response);
    });
  }
}
