import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  data:any[]=[]
  pageTitle =''
  constructor(private activated:ActivatedRoute , private globalService : GlobalService){

  }
  ngOnInit(): void {
    this.activated.data.subscribe(data=>{
      console.log(data['type'])
      if(data['type'] == 'posts'){
        this.pageTitle = 'Posts'
        this.handlePost()
      }
      else if(data['type'] == 'blogs' ){
        this.pageTitle= 'Blogs'
        this.handleBlogs()
      }
    })
  }

  handlePost(){
    this.globalService.getPosts().subscribe(res=>{
      this.data = res.posts
    })
  }

  handleBlogs(){
    this.globalService.getBlogs().subscribe(res=>{
      this.data = res
    })
  }



}
