import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl = "http://matcheg.com/public/api"
  isLogIn = false
  constructor(private http : HttpClient) { }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , obj)
  }

  posts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  Singleposts(id:any):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

  updateImage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/update-profile-image` , obj)
  }
}
