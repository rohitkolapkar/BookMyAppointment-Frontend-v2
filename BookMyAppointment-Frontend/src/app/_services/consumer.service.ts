import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../_models/City';
import { ServiceCategory } from '../_models/ServiceCategory';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  

    //apiUrl:'http://localhost:8080/api/v1'
    private apiUrl=environment.apiUrl;

    constructor(private httpClient:HttpClient) { }

  serviceProviderSearch(cityId,categoryId): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/serviceProvider/search?cityId=${cityId}&categoryId=${categoryId}`);
  }
  
}
