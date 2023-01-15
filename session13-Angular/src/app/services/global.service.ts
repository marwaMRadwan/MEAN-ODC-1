import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  navFlag : boolean = true
 
  constructor(private http : HttpClient) { }

  // https://jsonplaceholder.typicode.com/posts?_limit=5


  getPosts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  }

  getSinglePost(postId:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
