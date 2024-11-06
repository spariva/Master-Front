import { Component } from '@angular/core';

@Component({
  selector: 'app-a5tablamultiplicar',
  templateUrl: './a5tablamultiplicar.component.html',
  styleUrl: './a5tablamultiplicar.component.css'
})
export class A5tablamultiplicarComponent {
  public num: number = 0;
  public numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
  public results: number[] = [];

  constructor(){

  }

  multiplicar(){
    this.results = [];
    for (let i = 0; i < 10; i++) {
      this.results.push(this.num * i);
    }
  }


}
