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
}
