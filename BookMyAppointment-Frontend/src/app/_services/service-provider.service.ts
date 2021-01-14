import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../_models/Service';



@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  

  constructor(private httpClient:HttpClient) { }

    //apiUrl:'http://localhost:8080/api/v1'
  private apiUrl=environment.apiUrl;
  
  getAllCitites(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/city`);
  }
  getAllCategories():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/category`);
  }


  getAllServices(spId):Observable<any>{
    //console.log(spId);
    return this.httpClient.get(`${this.apiUrl}/services/search?spId=${spId}`);
  }

  addService(service:Service):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/services`,service);
  }

}
