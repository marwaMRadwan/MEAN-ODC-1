import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  singlePost : any

  constructor(private activated : ActivatedRoute , private global : GlobalService){

    console.log(this.activated.snapshot.paramMap.get('postId'))
    let postId = this.activated.snapshot.paramMap.get('postId')
    this.global.getSinglePost(postId).subscribe(data=>{
      this.singlePost = data
    })
  }
}
