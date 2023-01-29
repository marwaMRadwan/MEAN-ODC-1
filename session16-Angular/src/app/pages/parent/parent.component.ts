import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

count = 100

  increment(){
    this.count++
  }

  decrement(){
    this.count--
  }

}
