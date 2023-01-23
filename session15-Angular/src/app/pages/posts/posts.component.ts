import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] =[]
  constructor(private global:GlobalService){
    this.global.posts().subscribe(data=>{
      console.log(data)
      this.posts = data
    })
  }
}
