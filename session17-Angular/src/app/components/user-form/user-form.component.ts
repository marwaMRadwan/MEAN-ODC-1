import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

@Output() sendUserData = new EventEmitter()

model={
  userName : '',
  userAge:''
}

handleSubmit(){
  // console.log(this.model)
  const obj = {
    userName : this.model.userName,
    userAge : this.model.userAge
  }
  this.sendUserData.emit(obj)
}
}
