import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery : any
  constructor(private activated : ActivatedRoute , private global : GlobalService){}
  ngOnInit(): void {
    // this.global.gallery().subscribe(res=>{
    //   this.gallery = res
    // })
    this.gallery = this.activated.snapshot.data['galleryContent']
  }

}
