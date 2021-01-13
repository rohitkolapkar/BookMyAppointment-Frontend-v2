import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../_models/ServiceProvider';
import { Router } from '@angular/router';
import { Service } from '../_models/Service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  service : Service=new Service();
  servicesResult:any[]=[];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.service.spId=+sessionStorage.getItem("userId");
    console.log(this.service);
  }

}
