import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../_models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //apiUrl:'http://localhost:8080/api/v1'
  private apiUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  bookAnAppointment(appointmentObj:Appointment): Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/appointment`,appointmentObj);
  }
  
  checkAnAppointment(appointmentObj:Appointment): Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/appointment/check`,appointmentObj);
  }

  //getAllAppointments by consumerId
  getAllAppointments(consumerId):Observable<any>{
    //console.log(consumerId);
    return this.httpClient.get(`${this.apiUrl}/appointment/getAppointmentsByconsumerId?consumerId=${consumerId}`);
  }

  //getAllAppointments by spId
  getAllAppointmentsBySpId(spId):Observable<any>{
    //console.log(spId);
    return this.httpClient.get(`${this.apiUrl}/appointment/getAppointmentsBySpId?spId=${spId}`);
  }

    //getAppointments by spId and selected dates
    getAppointmentsBySpIdDates(spId,startDateTime,endDateTime):Observable<any>{
      //console.log(spId);
      return this.httpClient.get(`${this.apiUrl}/appointment/getAppointmentsBySpIdDates?spId=${spId}&s=${startDateTime}&e=${endDateTime}`);
    }

}
