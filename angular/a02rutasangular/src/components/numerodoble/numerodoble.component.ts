import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit {
  //*numero de aquí abajo no tiene que ver con el param
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
    //? subscribe es como una promise tipo then

    this._activeRoute.params.subscribe((params: Params)=> {
      //?params['parametro nombre'] y aquí al ser opcional el parámetro hago un if

      if(params['numero'] != null){
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    })
  }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  redirect(num: number):void {
    this._router.navigate(["/numerodoble", num]);
  }

}
