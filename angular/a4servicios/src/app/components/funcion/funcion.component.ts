import { Component, DoCheck, OnInit } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrl: './funcion.component.css'
})
export class FuncionComponent implements OnInit {
  public empleados!: Plantilla[];
  public funcion!: string;

  constructor(private _service: ServicePlantillas, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.funcion = params['f'];

      this._service.getFuncion(this.funcion).subscribe(response => {
        this.empleados = response;
      })
    })
  }

  // ngDoCheck(): void {
  //   // if (this._activeRoute.params.subscribe((params:Params )))
  //   this._activeRoute.params.subscribe((params: Params) => {
  //     this.funcion = params['f'];
  //   })

  //   this._service.getFuncion(this.funcion).subscribe(response => {
  //     this.empleados = response;
  //   })
  // }
}

