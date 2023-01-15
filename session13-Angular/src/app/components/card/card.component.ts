import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showFlag:boolean= false
  arr = [1, 4, 7]

  num = 1

  numArr=[0 ,1 , 2, 3, 4, 5]

  colorStyle = "green"
  borderStyle = 'border'
  borderStyleValue = '4px solid red'

  styleFlag = false


  borderClass = "border border-danger"
  bgClass = "bg-light"

  handleShow(){
    this.showFlag = true
  }
}
