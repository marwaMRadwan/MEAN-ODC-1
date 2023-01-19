import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl = "http://techsexperts.site/public/api"
  constructor(private http : HttpClient) { }

  login(obj:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/client/customer_login` , obj) 
  }

  getPosts():Observable<any>{
    let header = new HttpHeaders().set('content-type', 'application/json')
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts' , {'headers':header})
  }
}
