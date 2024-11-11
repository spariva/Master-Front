import { Component } from '@angular/core';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  public departamento!: Departamento;
}
