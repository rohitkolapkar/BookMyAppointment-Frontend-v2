import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Role } from '../_models/role';

//Author: SANCHIT SINGHAL
//Description: Performs Routing for invalid user
//Created On: 08/05/2020

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router, private authSerivce: AuthenticationService) { }

  // Routes to error page if user is not logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
  if(this.authSerivce.isUserLoggedIn()) {
    //retriving userRole from session variable
    let userRole=this.authSerivce.getUserRole();

    if((route.data.roles.toString()).includes(userRole)){
      return true;
    }
    else{
      if(userRole===Role.Admin.toString())
        this.router.navigate(['a/home']);
      else if(userRole===Role.Consumer.toString())
        this.router.navigate(['c/home']);
      else
        this.router.navigate(['sp/home']);
      return false;
    }
  }
  return false;
  }
}
