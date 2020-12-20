import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ServiceProviderService } from '../_services/service-provider.service';
import { Router } from '@angular/router';
import { ServiceProvider } from '../_models/ServiceProvider';
import { City } from '../_models/City';
import { ServiceCategory } from '../_models/ServiceCategory';

@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.component.html',
  styleUrls: ['./service-provider-signup.component.css']
})
export class ServiceProviderSignupComponent implements OnInit {

  userRole:string;
  serviceProvider : ServiceProvider=new ServiceProvider();

  cities:City[]=[];
  categories:ServiceCategory[]=[];

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
   
    //getting city list
    this.serviceProviderService.getAllCitites().subscribe(data=>{
      console.log(data);
      this.cities=data.responseListObject;
    });

    // getting category list
    this.serviceProviderService.getAllCategories().subscribe(data=>{
      this.categories=data.responseListObject;
    })

  }

  signUp() {
    this.authenticationService.serviceProviderSignUp(this.serviceProvider)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.router.navigate(["login"]);
  }

  filterCity(e) {
    let selectedCityId=e.target.value;
    let x:any=this.cities.filter(city => {
      return city.cityId == selectedCityId
    })
    //setting selected city to ServiceProvider Object
    this.serviceProvider.city.cityId = x[0].cityId;
    this.serviceProvider.city.cityName = x[0].cityName;
  }

  filterCategory(e) {
    let selectedCategoryId=e.target.value;
    let x:any=this.categories.filter(category => {
      return category.categoryId == selectedCategoryId
    })
    //setting selected category to ServiceProvider Object
    this.serviceProvider.serviceCategory.categoryId = x[0].categoryId;
    this.serviceProvider.serviceCategory.categoryName = x[0].categoryName;
    
  }

}
