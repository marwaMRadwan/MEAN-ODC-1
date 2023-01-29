import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

model={
  category:''
}
constructor(private router : Router){}

  handleSubmit(){
    if(this.model.category.startsWith("sp")){
      this.model.category = "sport"
      this.router.navigate(['category'] , {queryParams:{'category' : this.model.category , idCategory : 1}})
      // this.router.navigateByUrl()
    }
  }
}
