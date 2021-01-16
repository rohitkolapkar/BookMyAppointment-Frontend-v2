import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../_services/booking.service';


@Component({
  selector: 'app-consumer-appointment-list',
  templateUrl: './consumer-appointment-list.component.html',
  styleUrls: ['./consumer-appointment-list.component.css']
})
export class ConsumerAppointmentListComponent implements OnInit {
  //pagination config
  config: any;

  consumerId:number;
  appointmentsResult:any[]=[];
  constructor(private router:Router,
    private bookingService:BookingService) { }

  ngOnInit(): void {
    //pagination config initialisation
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.appointmentsResult.length
    };

    //get all appointments 
    this.consumerId=+sessionStorage.getItem("consumerId");
    this.bookingService.getAllAppointments(this.consumerId)
    .subscribe(
      data=>{
        //console.log(data.responseListObject);
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
