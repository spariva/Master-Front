import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  public departamento!: Departamento;

  constructor(private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) =>{
      let id = params['id'];
      let nombre = params['nombre'];
      let localidad = params['localidad'];
      this.departamento = new Departamento(id, nombre, localidad);
    })
  }
}
