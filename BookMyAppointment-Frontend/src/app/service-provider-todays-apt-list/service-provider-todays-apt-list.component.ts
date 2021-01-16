import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../_services/booking.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-service-provider-todays-apt-list',
  templateUrl: './service-provider-todays-apt-list.component.html',
  styleUrls: ['./service-provider-todays-apt-list.component.css'],
  providers: [DatePipe]
})
export class ServiceProviderTodaysAptListComponent implements OnInit {

  //pagination config
  config: any;
  
  //today's date
  myDate = new Date();

  spId:number;
  appointmentsResult:any[]=[];
  startDateTime:string;
  endDateTime:string;
  constructor(private router:Router,
    private bookingService:BookingService,
    private datePipe: DatePipe) {
      
     }

  ngOnInit(): void {
    //date testing
    let latest_date = this.datePipe.transform(this.myDate, 'dd/MM/yyyy');
    this.startDateTime=latest_date+" "+"00:00:00";
    this.endDateTime=latest_date+" "+"23:59:00";

    console.log(this.startDateTime);
    console.log(this.endDateTime);

    //pagination config initialisation
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.appointmentsResult.length
    };

    //get all appointments 
    this.spId=+sessionStorage.getItem("spId");
    this.bookingService.getAppointmentsBySpIdDates(this.spId,this.startDateTime,this.endDateTime)
    .subscribe(
      data=>{
        console.log(data.responseListObject);
        this.appointmentsResult=data.responseListObject;
      },
    error=>console.log(error)
    );
  }
  
  //pagination event
  pageChanged(event){
  this.config.currentPage = event;
  }

}
