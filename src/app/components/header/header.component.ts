import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  DEFAULT = 'default';
  SELLER = 'seller';
  menuType : string = '';
  sellerName = 'Dummy User';

  constructor(private route : Router){}
    ngOnInit() : void{
      this.route.events.subscribe((val : any)=>{
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            this.menuType = this.SELLER;
            let seller = localStorage.getItem('seller');
            if(seller){
              this.sellerName = (JSON.parse(seller))[0].name;
            }
          }
          else{
            this.menuType = this.DEFAULT;
          }
        }
      })
    }

    logout() : void{
      localStorage.removeItem("seller");
    }
}
