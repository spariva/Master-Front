import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menutablacomponent',
  templateUrl: './menutablacomponent.component.html',
  styleUrl: './menutablacomponent.component.css'
})
export class MenutablacomponentComponent {
  public numeros: number[] = [];
  public aux!: number[];


  constructor(private _router: Router){

  }

  generarNumeros(){
    this.aux = [];

    for (let i = 0; i < 10; i++) {
      this.aux.push(Math.floor(Math.random() * 100) + 1);
    }
    this.numeros = this.aux;
  }

}
