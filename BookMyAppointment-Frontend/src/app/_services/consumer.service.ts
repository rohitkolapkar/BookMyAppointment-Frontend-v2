import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private baseUrl='http://localhost:8080/api/v1/consumer';
  constructor(private http: HttpClient) { }
  
  
  createConsumer(consumer: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, consumer);
  }

  updateConsumer(consumer: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateConsumer/`, consumer);
  }

  deleteConsumer(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteConsumer/${id}`,{ responseType: 'text'});
  }

  getConsumer(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/searchConsumer/${userId}`);
  }

  getConsumerList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/consumers`)
  }

}
