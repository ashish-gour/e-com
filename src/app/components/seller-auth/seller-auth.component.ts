import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { SellerSignUp } from 'src/app/models/seller-sign-up';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLoginForm : boolean = false;
  authErrorMessage = '';
  validationMessage = '';

  constructor(private sellerService : SellerService, private router : Router){}

  ngOnInit() : void{
    this.sellerService.reloadSeller();
  }

  signUp(data : SellerSignUp) : void{
    if(data && data.email && data.name && data.password){
      this.sellerService.sellerSignUp(data);
    }
    else{
      this.validationMessage = 'Email or Name or Password should not be empty!';
    }
  }
  logIn(data : Login) : void{
    let result = this.sellerService.userLogin(data);
    if(!result){
      this.authErrorMessage = 'Email or Password is incorroct!';
    }
    else{
      this.authErrorMessage ='';
    }
  }

  toggleForm(){
    this.showLoginForm = !this.showLoginForm;
  }
}
