import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counter : any 
  constructor(){
    console.log('constructor')
    console.log(this.counter)
  }
  ngOnInit(): void {
    console.log('on init')
  }
  ngOnChanges(e:any){
    console.log('on changes')
    console.log(e)
  }
  ngDoCheck(){
    console.log('Do check')
  }
  ngAfterContentInit(){
    console.log('ng after content init')
  }
  ngAfterContentChecked(){
    console.log('ng after content checked')
  }
  ngAfterViewInit(){
    console.log('ng after view init')
  }
  ngAfterViewChecked(){
    console.log('ng after view checked ')
  }
  ngOnDestroy(){
    console.log('on Destroy')
  }
}
