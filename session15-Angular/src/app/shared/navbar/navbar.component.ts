import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public global:GlobalService){
    if(localStorage.getItem('token')) this.global.isLogIn = true
    console.log(this.global.isLogIn)
  }

  handleLogOut(){
    localStorage.removeItem('token')
    this.global.isLogIn = false
  }

}
