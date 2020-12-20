import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';



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

}
