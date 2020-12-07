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
  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.loginService.authenticate(this.user).subscribe(
      data=>{
        console.log(data);
        if(data.status==="success"){
          
          this.user.email=data.responseObject.email;
          this.user.role=data.responseObject.role;
          this.user.name=data.responseObject.name;
          this.user.active=data.responseObject.active;

          if(this.user.active===true){
            this.invalidLogin=false;
            this.redirect();
          }

        }else{
          //console.log("Invalid Login Credentials..");
          this.invalidLogin = true;
        
        }
        
      },error=>{
        console.log("Invalid Login Credentials..");
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
      if(this.user.role === 'consumer') {
        sessionStorage.setItem('userRole', 'consumer');
        this.invalidLogin = false;
        this.router.navigate(["c/home"]).then(()=> {
          window.location.reload();
        });
      }
      else if(this.user.role === 'serviceProvider') {
        sessionStorage.setItem('userRole', 'serviceProvider');
        this.invalidLogin = false;
        this.router.navigate(["home"]).then(()=> {
          window.location.reload();
        });
      }
    }

}
