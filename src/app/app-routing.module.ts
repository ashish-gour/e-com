import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'seller-auth', component : SellerAuthComponent},
  {path : 'seller-home', component : SellerHomeComponent, canActivate : [sellerAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
