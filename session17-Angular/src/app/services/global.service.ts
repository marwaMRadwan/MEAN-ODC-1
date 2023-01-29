import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get('https://dummyjson.com/posts')
  }

  getBlogs():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  login(obj:any):Observable<any>{
    return this.http.post(`http://matcheg.com/public/api/client/customer_login` , obj)
  }

  gallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
