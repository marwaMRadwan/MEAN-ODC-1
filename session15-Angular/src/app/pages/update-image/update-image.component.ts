import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent {

  image : any

  constructor(private global:GlobalService){}

  model={
    firstName : 'Nouran',
    lastName : 'Ahmed',
  }
  handleChange(eve:any){
    console.log(eve)
    this.image = eve.target.files[0]
  }

  handleSubmit(){
    let formData = new FormData()
    formData.append('image' , this.image)
    // formData.append('firstName' , this.model.firstName )
    // formData.append('lastName' , this.model.lastName )

    this.global.updateImage(formData).subscribe(res=>{
      console.log(res)
    })

  }
}
