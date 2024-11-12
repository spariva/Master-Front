import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  public departamento: Departamento;

  constructor(private _service: ServiceDepartamentos, private _activeRoute: ActivatedRoute, private _router: Router) {
    this.departamento = new Departamento(0, "", "");
  }

  ngOnInit(): void { 
      this._activeRoute.params.subscribe((params: Params)=>{
        let id = params["id"];

        this._service.findDepartamento(id).subscribe(response=>{
          this.departamento = response;
        })
      })
  }

  updateDepartamento(){
    this._service.updateDepartamento(this.departamento).subscribe(response=>{
      console.log(this.departamento);
      this._router.navigate(["/"]);
    })
  }
}
