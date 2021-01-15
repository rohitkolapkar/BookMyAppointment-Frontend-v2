import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Appointment } from '../_models/Appointment';
import { BookingService } from '../_services/booking.service';
import { ServiceProviderService } from '../_services/service-provider.service';
import { add } from 'timelite/time';


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
  serviceDuration:string;
  servicePrice:number;

  startDateTemp:string;
  startTimeTemp:string;
  
  hideButton:Boolean;
  bookingWarning:Boolean;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private serviceProviderService:ServiceProviderService,
    private bookingService:BookingService) { }

  ngOnInit(): void {
    this.bookingWarning = false;
    this.hideButton=false;
    this.serviceDuration="00:00:00";
    this.servicePrice=0;

    this.spId = +this.route.snapshot.queryParamMap.get('spid');
    this.consumerId=+sessionStorage.getItem("consumerId");
    this.serviceProviderService.getAllServices(this.spId)
    .subscribe(
      data=>{
        //printing services we received
        //console.log(data.responseListObject);
        this.servicesResult=data.responseListObject;
      },
    error=>console.log(error)
    );
  }

  filterService(e) {
    this.hideButton=false;
    this.bookingWarning = false;
    let selectedServiceId=e.target.value;
    let x:any=this.servicesResult.filter(service => {
      return service.serviceId == selectedServiceId
    })
    //setting selected service to appointmentObj Object
    this.appointmentObj.service.serviceId = x[0].serviceId;
    
    //setting service details to show on html page
    this.serviceDuration=x[0].serviceDuration;
    this.servicePrice=x[0].servicePrice;
    
  }
  setDate(e){
    this.hideButton=false;
    this.bookingWarning = false;
    let selectedDate=e.target.value;
    this.startDateTemp = new DatePipe('en-US').transform(selectedDate, 'dd/MM/yyyy');
    
  }
  setTime(e){
    this.hideButton=false;
    this.bookingWarning = false;
    let selectedTime=e.target.value;
    selectedTime+=":00";
    this.startTimeTemp=selectedTime;
  }

  //check if time slot exist or not
  check(){

    this.appointmentObj.consumer.id=this.consumerId;
    this.appointmentObj.serviceProvider.spId=this.spId;
    //formatting start date time
    this.appointmentObj.startDateTime=this.startDateTemp+" "+this.startTimeTemp;
    //add selected time and serviceDuration
    let addedTime=add([this.serviceDuration,this.startTimeTemp]);
    let finalTime=addedTime[0]+":"+addedTime[1]+":"+addedTime[2];
  
    //formating end date time
    this.appointmentObj.endDateTime=this.startDateTemp+" "+finalTime;


    // console.log("Appointment obj");
    // console.log(this.appointmentObj);
    this.bookingService.checkAnAppointment(this.appointmentObj)
    .subscribe(
      data=>{
        if(data.status=="success"){
          this.hideButton=true;
          this.bookingWarning = false;
        }
        else{
          this.bookingWarning = true;
          this.hideButton=false;
        }
      },
    error=>console.log(error)
    );
  }

  //book appointment is Time Slot available
  book(){
    this.bookingService.bookAnAppointment(this.appointmentObj)
    .subscribe(
      data=>{
        
        this.router.navigate(["c/appointments"]);
      },
    error=>console.log(error)
    );
  }

}
