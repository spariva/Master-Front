import { Component } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  public departamento: Departamento = new Departamento(0, "a", "b");

  constructor(private _service: ServiceDepartamentos, private _router: Router){}

  insertDepartamento(): void { 
    //*let auxDepartamento = new Departamento(this.departamento.idDepartamento, this.departamento.nombre, this.departamento.localidad)
    this._service.createDepartamento(this.departamento).subscribe(response=>{
      this._router.navigate(["/"]);
    })
  }
}
