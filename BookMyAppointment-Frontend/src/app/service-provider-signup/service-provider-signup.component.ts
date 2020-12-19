import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ServiceProviderService } from '../_services/service-provider.service';
import { Router } from '@angular/router';
import { ServiceProvider } from '../_models/ServiceProvider';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.component.html',
  styleUrls: ['./service-provider-signup.component.css']
})
export class ServiceProviderSignupComponent implements OnInit {

  userRole:string;
  _cityListSubscription : Subscription;
  ServiceProvider : ServiceProvider={"spId" : null,"spName":"","businessName":"","businessAddress":"",
                    "spEmail":"","spPhone":"","spPassword":"",
                    city:{"cityId":null,cityName:""},
                   // businessHours:[{"businessHourId":null,"closeTime":"","day":null,"openTime":"","open":null}],
                   //services:[{"serviceId":null,"serviceName":"","servicePrice":null,"serviceDuration":""}], 
                   serviceCategory:{"categoryId":null,"categoryName":""}
                  };
    
  constructor(
    private router:Router,
    private authenticationService:AuthenticationService,
    private serviceProviderService:ServiceProviderService) { }

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      this.userRole=sessionStorage.getItem("userRole");
      if(this.userRole==="consumer")
        this.router.navigate(["c/home"]);
      else if(this.userRole==="serviceProvider")
        this.router.navigate(["sp/home"]);
      else
        this.router.navigate(["a/home"]);
    }
    this._cityListSubscription = this.serviceProviderService.cityList.subscribe((value) =>{
      this.ServiceProvider.city = value;
    });

  }

  signUp() {
    console.log("Test" + this.ServiceProvider);
    this.authenticationService.serviceProviderSignUp(this.ServiceProvider)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.router.navigate(["login"]);
  }

}
