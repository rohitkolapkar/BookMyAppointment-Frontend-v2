import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Consumer } from '../_models/consumer';
import { User } from '../_models/user';

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
  
  private baseUrl='http://localhost:8080/api/v1/consumer';
  consumerSignUp(consumer: Consumer): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, consumer);
  }

  authenticate(user:User):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/api/v1/authenticateUser',user);
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
