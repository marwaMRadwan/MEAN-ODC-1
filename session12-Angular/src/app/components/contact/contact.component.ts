import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  inputVal:any

  handleInput(eve:any){
    // console.log(this.inputVal)
    console.log(eve)
  }
}
