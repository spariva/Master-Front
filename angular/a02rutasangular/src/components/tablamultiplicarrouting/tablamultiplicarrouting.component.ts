import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent implements OnInit{
  public numero!: number;
  public results!: number[];
  public aux !: number[];

  constructor(private _activeRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      this._activeRoute.params.subscribe((params: Params)=>{
        this.numero = parseInt(params['numero'])
      })

      this.multiplicar();
  }

  multiplicar(){
    this.aux = [];

    for(let i = 1; i < 10; i++){
      this.aux.push(i * this.numero);
    }

    this.results = this.aux;
  }
}
