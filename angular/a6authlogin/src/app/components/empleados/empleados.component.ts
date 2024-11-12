import { Component, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service.login';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Empleado[];

  constructor(private _service: ServiceLogin,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }
}
