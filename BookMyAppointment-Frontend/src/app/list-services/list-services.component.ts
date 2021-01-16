import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../_models/Service';
import { ServiceProviderService } from '../_services/service-provider.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {
  //pagination config
  config: any;
  

  spId:number;
  service : Service=new Service();
  servicesResult:any[]=[];
  
  constructor(private router:Router,
    private serviceProviderService:ServiceProviderService) { }

  ngOnInit(): void {

    //calling function to get all services
    this.getAllServices();
    //pagination config initialisation
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.servicesResult.length
    };

  }


  //pagination event
  pageChanged(event){
    this.config.currentPage = event;
  }
  add(){
    this.service.serviceProvider.spId=+sessionStorage.getItem("spId");
    //console.log(this.service);

    this.serviceProviderService.addService(this.service)
    .subscribe(
      data=>{
        //calling function to get all services
        this.getAllServices();
        //console.log(data.responseListObject);
      },
    error=>console.log(error)
    );

    
    

  }

  getAllServices(){
    this.spId=+sessionStorage.getItem("spId");
    this.serviceProviderService.getAllServices(this.spId)
    .subscribe(
      data=>{
        //console.log(data.responseListObject);
        this.servicesResult=data.responseListObject;
      },
    error=>console.log(error)
    );
  }

}
