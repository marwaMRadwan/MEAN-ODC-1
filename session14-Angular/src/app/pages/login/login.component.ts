import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model : Login ={
   email:'' ,
   password:''
  }
  errorFlag = false
  errorMsg = ''
  constructor(private global: GlobalService){}

  handleSubmit(form : NgForm){
    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
      }, (e)=>{
        console.log(e)
        this.errorFlag = true
        this.errorMsg = e.error.message
      }, ()=>{

      })
    }
  }
}
