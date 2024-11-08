import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css'
})
export class PersonasapiComponent implements OnInit{
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
      this._service.getPersonas().subscribe(response=>{
        this.personas = response;
      })
  }
}
