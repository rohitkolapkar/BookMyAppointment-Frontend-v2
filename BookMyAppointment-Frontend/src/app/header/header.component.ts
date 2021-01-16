import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string;
  consumer:boolean;
  serviceProvider:boolean;
  admin:boolean;
  visitor:boolean;
  _subscription: Subscription;
  _subscription2: Subscription;
  userRole:string;

  constructor(private router:Router,public nav:AuthenticationService) {
    this._subscription = nav.userChange.subscribe((value) => { 
      if(value==="consumer"){
        this.consumer = true; 
        this.serviceProvider=false;
        this.admin=false;
        this.visitor=false;
      }else if(value==="serviceProvider"){
        this.consumer = false; 
        this.serviceProvider=true;
        this.admin=false;
        this.visitor=false;
      }else if(value==="admin"){
        this.consumer = false; 
        this.serviceProvider=false;
        this.admin=true;
        this.visitor=false;
      }else{
        this.consumer=false;
        this.serviceProvider=false;
        this.admin=false;
        this.visitor=true;
      }
      
    });
    this._subscription2 = nav.userNameChange.subscribe((value) => {
      this.userName=value;
    });

   }

  ngOnInit(): void {
    if(this.nav.isUserLoggedIn()){
      this.nav.setUserName(sessionStorage.getItem("userName"));
      this.userRole=sessionStorage.getItem("userRole");
      if(this.userRole==="consumer")
        this.nav.setConsumer();
      else if(this.userRole==="serviceProvider")
        this.nav.setServiceProvider()
      else
        this.nav.setAdmin();
    }else{
      this.nav.setVisitor();
    }

  }

  //common routes
  appHome(){
    this.router.navigate(["home"]);
  }
  login(){
    this.router.navigate(["login"]);
  }
  logout(){
    this.nav.logOut();
    this.router.navigate(["home"]);
  }
  userSettings(){
    this.router.navigate(["settings"]);
  }



  //admin routes
  aHome(){
    this.router.navigate(["a/home"]);
  }
  consumersList(){
    this.router.navigate(["a/consumers"]);
  }
  serviceProvicersList(){
    this.router.navigate(["a/serviceProviders"]);
  }



  //consumer routes
  cSignUp(){
    this.router.navigate(["c/signup"]);
  }
  cHome(){
    this.router.navigate(["c/home"]);
  }
  cProfile(){

  }
  cAppointments(){
    this.router.navigate(["c/appointments"]);
  }
 

  //service provider routers
  spSignUp(){
    this.router.navigate(["sp/signup"]);
  }
  spServices(){
    this.router.navigate(["sp/services"]);
  }
  spTodaysAppt(){
    this.router.navigate(["sp/todaysAppt"]);
  }
  spAllAppt(){
    this.router.navigate(["sp/allAppt"]);
  }


  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
     this._subscription2.unsubscribe();
   }
  
  

}

// console.log("=====================start========");
// console.log("Visitor: "+this.nav.visitor);
// console.log("consumer: "+this.nav.consumer);
// console.log("serviceProvider: "+this.nav.serviceProvider);
// console.log("admin: "+this.nav.admin);
// console.log("=====================END========");