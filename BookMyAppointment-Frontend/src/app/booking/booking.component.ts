import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Appointment } from '../_models/Appointment';
import { BookingService } from '../_services/booking.service';
import { ServiceProviderService } from '../_services/service-provider.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  spId: number;
  consumerId:number;
  appointmentObj:Appointment=new Appointment();
  servicesResult:any[]=[];
  constructor(private router:Router,
    private route: ActivatedRoute,
    private serviceProviderService:ServiceProviderService,
    private bookingService:BookingService) { }

  ngOnInit(): void {
    this.spId = +this.route.snapshot.queryParamMap.get('spid');
    this.consumerId=+sessionStorage.getItem("consumerId");
    this.serviceProviderService.getAllServices(this.spId)
    .subscribe(
      data=>{
        console.log(data.responseListObject);
        this.servicesResult=data.responseListObject;
      },
    error=>console.log(error)
    );
  }

  filterService(e) {
    let selectedServiceId=e.target.value;
    let x:any=this.servicesResult.filter(service => {
      return service.serviceId == selectedServiceId
    })
    //setting selected category to ServiceProvider Object
    this.appointmentObj.service.serviceId = x[0].serviceId;
    //this.serviceProvider.serviceCategory.categoryName = x[0].categoryName;
    
  }
  book(){
    this.appointmentObj.consumer.id=this.consumerId;
    this.appointmentObj.serviceProvider.spId=this.spId;
    console.log("Appointment obj");
    console.log(this.appointmentObj);
    this.bookingService.bookAnAppointment(this.appointmentObj)
    .subscribe(
      data=>{
        console.log(data);
      },
    error=>console.log(error)
    );
  }

}
