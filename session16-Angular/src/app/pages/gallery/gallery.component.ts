import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  gallery:any
  loadingFlag = true

  constructor(private global:GlobalService){

    this.global.getGallery().subscribe(res=>{
      this.gallery = res
    }, ()=>{

    } , ()=>{
      this.loadingFlag = false
    })
  }



}
