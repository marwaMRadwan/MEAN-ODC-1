import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent  {
  count = 20
  // constructor(){
  //   console.log('constructor')
  // }
  // ngOnInit(): void {
  //   console.log('on init')
  // }
  // ngOnChanges(){
  //   console.log('on changes')
  // }
  // ngDoCheck(){
  //   console.log('Do check')
  // }
  // ngAfterContentInit(){
  //   console.log('ng after content init')
  // }
  // ngAfterContentChecked(){
  //   console.log('ng after content checked')
  // }
  // ngAfterViewInit(){
  //   console.log('ng after view init')
  // }
  // ngAfterViewChecked(){
  //   console.log('ng after view checked ')
  // }
  // ngOnDestroy(){
  //   console.log('on Destroy')
  // }


  handleCount(){
    this.count++
  }

}
