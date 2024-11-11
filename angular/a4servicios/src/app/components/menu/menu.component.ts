import { Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public funciones!: string[];
  public selectFuncion!: string;

  constructor(private _service: ServicePlantillas){}

  ngOnInit(): void {
      this._service.getFunciones().subscribe(response=>{
        this.funciones = response;
      })
  }
}
