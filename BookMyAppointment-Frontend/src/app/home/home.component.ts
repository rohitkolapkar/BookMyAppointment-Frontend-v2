import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alreadyLoggedIn=false;
  constructor(private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  
  cSignUp(){
    if(this.authenticationService.isUserLoggedIn()){
      alert("You are already signed in. Please do signout and then try");
      // console.log("In signup button");
      // this.alreadyLoggedIn=true;
      
    }else{
      console.log("In signup button 222");
      this.router.navigate(["c/signup"]);
      //this.alreadyLoggedIn=false;
    }
    
  }
}
