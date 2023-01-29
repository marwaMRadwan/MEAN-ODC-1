import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private activated : ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.activated.snapshot.queryParamMap)

    this.activated.queryParamMap.subscribe(res=>{
      console.log(res.get('category'))
      console.log(res.get('idCategory'))
      
    })
  }
}
