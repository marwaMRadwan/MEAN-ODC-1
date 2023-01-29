import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSubmit = false
  loginData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })

  userData = {
    email: 'nouran@example.com',
    password : '11111111',
    firstName:'nouran',
  }

  constructor(private global : GlobalService){

    this.loginData.patchValue(this.userData)
    // this.loginData.setValue(this.userData)
  }

  handleSubmit(){
    this.isSubmit = true
    this.global.login(this.loginData.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token' , res.data.token)
    })
  }

  canExit():boolean{
    if(this.isSubmit == false && this.loginData.dirty){
      // alert('Please save your Changes')
     const confirmData =  confirm('changes')
     console.log(confirmData)
      return false
    }
    return true
  }
}
