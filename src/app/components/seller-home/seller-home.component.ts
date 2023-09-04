import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  products : Product[] | undefined;

  constructor(private productService : ProductService,private route : Router){}

  ngOnInit() : void{
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe((products : Product[])=>{
      this.products = products;
      console.log(this.products);
    });
  }
  editProduct(product : Product){
    console.log("Edit Product : ",product);
    // Use NavigationExtras to pass data to the child component
    const navigationExtras: NavigationExtras = {
      state: { data: product },
    };
    this.route.navigate(['seller-edit-product'],navigationExtras);
  }
}
