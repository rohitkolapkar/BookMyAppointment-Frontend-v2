import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Consumer } from '../_models/consumer';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { ServiceProvider } from '../_models/ServiceProvider';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:string;
  userChange: Subject<string> = new Subject<string>();
  userName:string;
  userNameChange:Subject<string> = new Subject<string>();
  
  constructor(private httpClient:HttpClient) { 
    
  }
  //apiUrl:'http://localhost:8080/api/v1'
  private apiUrl=environment.apiUrl;
  consumerSignUp(consumer: Consumer): Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}/consumer`, consumer);
  }

  serviceProviderSignUp(serviceProvider: ServiceProvider): Observable<Object>{
    console.log("In service layer ")
    console.log(serviceProvider)
    return this.httpClient.post(`${this.apiUrl}/serviceProvider`, serviceProvider);
  }

  authenticate(user:User):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/authenticateUser`,user);
  }

    // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let userId = sessionStorage.getItem('userId');
    return !(userId === null);
  }

  getUserRole():string{
    let userRole = sessionStorage.getItem('userRole');
    return userRole;
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userRole');
    this.setVisitor();
  }
  setUserName(name:string){
    this.userName=name;
    this.userNameChange.next(this.userName);
  }

  setVisitor(){
    this.user="visitor";
    this.userName="";
    this.userChange.next(this.user);
    this.userNameChange.next(this.userName);
  }
  setConsumer(){
  this.user="consumer";
  this.userChange.next(this.user);
  }
  setServiceProvider(){
  this.user="serviceProvider";
  this.userChange.next(this.user);
  }
  setAdmin(){
  this.user="admin";
  this.userChange.next(this.user);
  }

}
