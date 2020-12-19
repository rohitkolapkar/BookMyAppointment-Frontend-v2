import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceProvider } from '../_models/ServiceProvider';


@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  cityList:Subject<any> = new Subject<any>();

  constructor(private httpClient:HttpClient) { }

    //apiUrl:'http://localhost:8080/api/v1'
  private apiUrl=environment.apiUrl;
  getAllCities(serviceProvider: ServiceProvider){
    this.httpClient.get(`${this.apiUrl}/city`).
    subscribe(data=>{this.cityList.next(data);},
    err=>{console.log(err)});
  }
}
