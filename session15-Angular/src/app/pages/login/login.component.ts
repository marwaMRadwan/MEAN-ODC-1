import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl("" ,
     [Validators.required , Validators.email]), //Validators.minLength(12)
    password: new FormControl('' , [Validators.required],) //Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{8,}')]
    // address: new FormGroup({
    //   city:new FormControl(),
    //   street : new FormControl()
    // })

  })

  // address={
  //   city:'',
  //   street:''
  // }

  isSubmit : boolean = false

  constructor(private global:GlobalService , private router : Router ){}

  get userEmail(){return this.loginForm.get('email')}
  get userPassword(){return this.loginForm.get('password')}

  // get address(){return this.loginForm.get('address')}

  get userData(){return this.loginForm.controls}

  handleLogin(){
    console.log(this.loginForm)
    this.isSubmit = true

    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
        this.global.isLogIn = true
        // this.router.navigateByUrl("test/login")
        // test/login
        this.router.navigate(['test' , 'login'])

      },(e)=>{

      },()=>{

      })
    }
  }

}
