import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProviderService } from '../_services/service-provider.service';

@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css']
})
export class ServiceProviderListComponent implements OnInit {

  constructor(private router:Router,private serviceProviderService:ServiceProviderService) { }

  ngOnInit(): void {
  }

}
