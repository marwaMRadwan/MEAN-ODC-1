import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any[] = []


  handleUser(ev : any){
    console.log(ev)
    this.users.push(ev)
  }
}
