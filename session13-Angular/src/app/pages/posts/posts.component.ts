import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any

  constructor(private global : GlobalService){
    this.global.getPosts().subscribe((data)=>{
      this.posts = data
    })
  }

  ngOnInit(): void {
   
  }

}
