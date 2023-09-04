import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.css']
})
export class SellerEditProductComponent {
  editProductMessage :string | undefined;
  product : any;
  constructor(private productService : ProductService, private route: ActivatedRoute,private router : Router){
    let navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      this.product = navigation?.extras.state['data'];
      console.log("Edit : ",this.product?.p_name)
    }
  }
  editProduct(product : Product) : void {
    this.productService.editProduct(product).subscribe((result : any)=>{
      console.log("Id : ", product.id);
      if(result)
      {
        this.editProductMessage = 'Product edited successfully!';
        setTimeout(()=> this.editProductMessage = undefined, 5000);
      }
    });
  }
}
