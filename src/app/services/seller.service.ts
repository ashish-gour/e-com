import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SellerSignUp } from '../models/seller-sign-up';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http : HttpClient, private router : Router) { }

  sellerSignUp(data : SellerSignUp){
    this.http.post('http://localhost:3000/seller',data, {observe : 'response'}).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    });
  }

  reloadSeller()
  {
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  async userLogin(data : Login) : Promise<boolean>{
    let isLoggedIn = false
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe : 'response'}).subscribe((result : any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        isLoggedIn = true;
      }
      else{
        console.warn("Access Denied!");
      }
    });
    return isLoggedIn;
  }
}
