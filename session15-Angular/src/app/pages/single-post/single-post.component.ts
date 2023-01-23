import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost: any
  latestPosts: any[] = []

  constructor(private activated: ActivatedRoute, private global: GlobalService) {

  }
  ngOnInit(): void {
    // let id = this.activated.snapshot.paramMap.get('id')
    // let id = this.activated.snapshot.params['id']
    // console.log(id)



    this.activated.paramMap.subscribe(res => {
      console.log(res.get('id'))
      let postID = res.get('id')
      this.getPost(postID)
     })

    this.global.posts().subscribe(res => {
      this.latestPosts = res
    })

  }

  getPost(id:any){
    this.global.Singleposts(id).subscribe(res => {
      console.log(res)
      this.singlePost = res
    })
  }
}
