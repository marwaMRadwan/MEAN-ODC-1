import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  title: string = "Angular"
  currentDate: Date = new Date()
  imgPath = "assets/images/images.jfif"
  inputType = "password"
  customClass = "text-danger"
  colNum = 3

  text = "Hello Angular"
  tag = "<u>Angular</u>"


  h1Text = "Lorem"

  getFullName() {
    return 'Nouran Ahmed Fayez'
  }

  getInputName(name: string) {
    return name
  }
  handleClick() {
    this.h1Text = "Angular"
  }

  handleInput(eve : any) {
    console.log(eve.target.value)
  }
  handleChange(element : any){
    console.log(element.value)
  }
}
