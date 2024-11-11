import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillacomplex',
  templateUrl: './plantillacomplex.component.html',
  styleUrl: './plantillacomplex.component.css'
})

export class PlantillaComplex implements OnInit {
  @ViewChild("selectfuncion") selectfuncion!: ElementRef;
  public empleados: Array<Plantilla>;
  public funciones!: Array<string>;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service: ServicePlantillas) {
    this.empleados = new Array<Plantilla>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    let aux = new Array<string>();
    for (var option of this.selectfuncion.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
      this.empleados = response;
    })
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    })
  }
}