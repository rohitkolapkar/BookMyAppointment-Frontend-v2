import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../_models/City';
import { ServiceCategory } from '../_models/ServiceCategory';
import { ConsumerService } from '../_services/consumer.service';
import { ServiceProviderService } from '../_services/service-provider.service';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {
  
  cities:City[]=[];
  categories:ServiceCategory[]=[];
  serviceProvidersResult:any[]=[];

  selectedCity:City=new City();;
  selectedCategory:ServiceCategory=new ServiceCategory();

  constructor(private router:Router,
    private serviceProviderService:ServiceProviderService,
    private consumerService:ConsumerService) { }

  ngOnInit(): void {

    //getting city list
    this.serviceProviderService.getAllCitites().subscribe(data=>{
      this.cities=data.responseListObject;
    });

    // getting category list
    this.serviceProviderService.getAllCategories().subscribe(data=>{
      this.categories=data.responseListObject;
    })

  }

  filterCity(e) {
    let selectedCityId=e.target.value;
    let x:any=this.cities.filter(city => {
      return city.cityId == selectedCityId
    })
    //setting selected city to ServiceProvider Object
    this.selectedCity.cityId = x[0].cityId;
    this.selectedCity.cityName = x[0].cityName;
  }

  filterCategory(e) {
    let selectedCategoryId=e.target.value;
    let x:any=this.categories.filter(category => {
      return category.categoryId == selectedCategoryId
    })
    //setting selected category to ServiceProvider Object
    this.selectedCategory.categoryId = x[0].categoryId;
    this.selectedCategory.categoryName = x[0].categoryName;
    
  }

  search() {
    
    this.consumerService.serviceProviderSearch(this.selectedCity.cityId,this.selectedCategory.categoryId)
    .subscribe(
      data=>{
        console.log(data.responseListObject);
        this.serviceProvidersResult=data.responseListObject;
      },
    error=>console.log(error)
    );

    //this.router.navigate(["login"]);
  }

  book(spId:number){
    console.log(spId);
    this.router.navigate(['c/book'], { queryParams: { spid: spId } });
  }



}
