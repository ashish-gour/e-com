import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProduct(product : Product){
    return this.http.post('http://localhost:3000/products',product);
  }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  editProduct(product : Product){
    return this.http.put(`http://localhost:3000/products/${product.id}`,product);
  }
}
