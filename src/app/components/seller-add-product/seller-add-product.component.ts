import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage :string | undefined;
  constructor(private productService : ProductService){}
  addNewProduct(product : Product) : void {
    this.productService.addProduct(product).subscribe((result : any)=>{
      if(result)
      {
        this.addProductMessage = 'Product added successfully!';
        setTimeout(()=> this.addProductMessage = undefined, 5000);
      }
    });
  }
}
