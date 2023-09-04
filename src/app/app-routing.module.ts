import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerEditProductComponent } from './components/seller-edit-product/seller-edit-product.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'seller-auth', component : SellerAuthComponent},
  {path : 'seller-home', component : SellerHomeComponent, canActivate : [sellerAuthGuard]},
  {path : 'seller-add-product', component : SellerAddProductComponent, canActivate : [sellerAuthGuard]},
  {path : 'seller-edit-product', component : SellerEditProductComponent, canActivate : [sellerAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
