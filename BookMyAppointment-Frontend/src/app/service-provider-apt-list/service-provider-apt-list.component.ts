import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../_services/booking.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-service-provider-apt-list',
  templateUrl: './service-provider-apt-list.component.html',
  styleUrls: ['./service-provider-apt-list.component.css']
})
export class ServiceProviderAptListComponent implements OnInit {
  //pagination config
  config: any;

  spId:number;
  appointmentsResult:any[]=[];
  startDateTime:string;
  endDateTime:string;
  constructor(private router:Router,
    private bookingService:BookingService) { }

  ngOnInit(): void {
    //pagination config initialisation
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.appointmentsResult.length
    };

    // //get all appointments 
    // this.spId=+sessionStorage.getItem("spId");
    // this.bookingService.getAllAppointmentsBySpId(this.spId)
    // .subscribe(
    //   data=>{
    //     //console.log(data.responseListObject);
    //     this.appointmentsResult=data.responseListObject;
    //   },
    // error=>console.log(error)
    // );

  }

  //pagination event
  pageChanged(event){
  this.config.currentPage = event;
  }

  setStartDate(e){
    
    let selectedDate=e.target.value;
    let temp = new DatePipe('en-US').transform(selectedDate, 'dd/MM/yyyy');
    this.startDateTime=temp+" "+"00:00:00";
    console.log(this.startDateTime);
  }
  setEndDate(e){
    
    let selectedDate=e.target.value;
    let temp = new DatePipe('en-US').transform(selectedDate, 'dd/MM/yyyy');
    this.endDateTime=temp+" "+"23:59:00";
    console.log(this.endDateTime);
  }

  search(){

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

  showall(){
    //get all appointments 
    this.spId=+sessionStorage.getItem("spId");
    this.bookingService.getAllAppointmentsBySpId(this.spId)
    .subscribe(
      data=>{
        //console.log(data.responseListObject);
        this.appointmentsResult=data.responseListObject;
      },
    error=>console.log(error)
    );
  }

}
