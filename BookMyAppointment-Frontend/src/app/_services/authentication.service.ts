import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Consumer } from '../_models/consumer';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  consumer:boolean;
  serviceProvider:boolean;
  admin:boolean;
  visitor:boolean;
  constructor(private httpClient:HttpClient) { 
    this.consumer=false;
    this.serviceProvider=false;
    this.admin=false;
    this.visitor=true;
  }
  
  private baseUrl='http://localhost:8080/api/v1/consumer';
  consumerSignUp(consumer: Consumer): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, consumer);
  }

  authenticate(user:User) {
    return this.httpClient.post<any>('http://localhost:8080/api/v1/authenticateUser',user);
  }

    // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('userId')
    return !(user === null)
  }
  
    // Removes user session(logout)
    logOut() {
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userEmail');
      sessionStorage.removeItem('userRole');
    }
    setVisitor(){
      this.consumer=false;
      this.serviceProvider=false;
      this.admin=false;
      this.visitor=true;
     }
     setConsumer(){
      this.consumer=true;
      this.serviceProvider=false;
      this.admin=false;
      this.visitor=false;
     }
     setServiceProvider(){
      this.consumer=false;
      this.serviceProvider=true;
      this.admin=false;
      this.visitor=false;
     }
     setAdmin(){
      this.consumer=false;
      this.serviceProvider=false;
      this.admin=true;
      this.visitor=false;
     }

}
