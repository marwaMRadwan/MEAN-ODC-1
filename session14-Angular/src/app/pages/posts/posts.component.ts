import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {


  constructor(private global : GlobalService){
    this.global.getPosts().subscribe(res=>{
      console.log(res)
    })
  }
}
