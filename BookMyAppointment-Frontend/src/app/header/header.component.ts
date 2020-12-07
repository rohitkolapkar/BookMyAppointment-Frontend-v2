import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string;

  constructor(public nav:AuthenticationService) { }

  ngOnInit(): void {

    if(this.nav.isUserLoggedIn){
      let role=sessionStorage.getItem("userRole");
      this.userName=sessionStorage.getItem("userName");
      if(role==="consumer"){
        this.nav.setConsumer();
      }else if(role==="serviceProvider"){
        this.nav.setServiceProvider();
      }else if(role==="admin"){
        this.nav.setAdmin();
      }  
      else{
        this.nav.setVisitor();
      } 
    }
  }

  logout(){
    this.nav.logOut();
  }
  
  

}

// console.log("=====================start========");
// console.log("Visitor: "+this.nav.visitor);
// console.log("consumer: "+this.nav.consumer);
// console.log("serviceProvider: "+this.nav.serviceProvider);
// console.log("admin: "+this.nav.admin);
// console.log("=====================END========");