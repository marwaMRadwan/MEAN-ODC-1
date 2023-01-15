import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  currentDate= new Date()
  text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas sapiente, non ipsam sit iusto asperiore autem molestiae odio veniam."

  obj = {
    name : "Nouran" , 
    age : 28
  }

  temp = 70

  arr = [1, 2, 3, 4, 5, 6,7]

   mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   getMonth = new Date().getMonth()

  }
