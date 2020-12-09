import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User={"id": 0, "name":"", "password":"", "mobile": "", "email":"", "active": null, "role":""};
  invalidLogin = false;
  userBlocked = false;
  userRole:string;
  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
    if(this.loginService.isUserLoggedIn()){
      this.userRole=sessionStorage.getItem("userRole");
      if(this.userRole==="consumer")
        this.router.navigate(["c/home"]);
      else if(this.userRole==="serviceProvider")
        this.router.navigate(["sp/home"]);
      else
        this.router.navigate(["a/home"]);
    }
  }

  checkLogin(){
    this.loginService.authenticate(this.user).subscribe(
      data=>{
        console.log(data);
        if(data.status==="success"){
          //we are ignoring password and mobile number
          this.user.id=data.responseObject.id;
          this.user.email=data.responseObject.email;
          this.user.role=data.responseObject.role;
          this.user.name=data.responseObject.name;
          this.user.active=data.responseObject.active;

          if(this.user.active===true){
            this.invalidLogin=false;
            this.redirect();
          }
          else{
            this.userBlocked = true;
          }

        }else{
          this.invalidLogin = true;
        }
        
      },error=>{
        this.invalidLogin = true;
        console.log(error)
      }
    );
  }
    // Redirect based on the user role
    redirect() {

      sessionStorage.setItem('userId', String(this.user.id));
      sessionStorage.setItem('userEmail', String(this.user.email));
      sessionStorage.setItem('userName',String(this.user.name));
       //setting userName property in Authentication service
       this.loginService.setUserName(this.user.name);
      if(this.user.role === 'consumer') {
        sessionStorage.setItem('userRole', 'consumer');
        //calling setConsumer method in Authentication service
        this.loginService.setConsumer();
        this.invalidLogin = false;
        this.router.navigate(["c/home"]);
      }
      else if(this.user.role === 'serviceProvider') {
        sessionStorage.setItem('userRole', 'serviceProvider');
        this.loginService.setServiceProvider();
        this.invalidLogin = false;
        this.router.navigate(["sp/home"]);
      }else{
        sessionStorage.setItem('userRole', 'admin');
        this.loginService.setAdmin();
        this.invalidLogin = false;
        this.router.navigate(["a/home"]);
      }
    }

}
