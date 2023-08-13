import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerSignUp } from 'src/app/models/seller-sign-up';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLoginForm : boolean = false;

  constructor(private sellerService : SellerService, private router : Router){}

  ngOnInit() : void{
    this.sellerService.reloadSeller();
  }

  signUp(data : SellerSignUp) : void{
    this.sellerService.sellerSignUp(data);
  }
  logIn(data : SellerSignUp) : void{

  }

  toggleForm(){
    this.showLoginForm = !this.showLoginForm;
  }
}
