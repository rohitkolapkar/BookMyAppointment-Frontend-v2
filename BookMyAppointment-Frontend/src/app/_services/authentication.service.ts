import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Consumer } from '../_models/consumer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  
  private baseUrl='http://localhost:8080/api/v1/consumer';
  signUp(consumer: Consumer): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, consumer);
  }

}
