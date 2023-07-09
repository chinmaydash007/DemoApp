import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter:number=0

  constructor() {}

  descriptionText="This is random Description" 

  increaseCounter(){
    this.counter=this.counter+1
  }

}
