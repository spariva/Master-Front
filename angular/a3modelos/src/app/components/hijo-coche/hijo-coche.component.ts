import { Component, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche',
  templateUrl: './hijo-coche.component.html',
  styleUrl: './hijo-coche.component.css'
})
export class HijoCocheComponent {
  @Input() car!: Coche;
  public mensaje: string;

  constructor() {
    this.mensaje = "";
  }

  comprobarEstado(): boolean {
    if (this.car.estado) {
      this.mensaje = "El coche está encendido";
      return true;
    } else {
      this.mensaje = "El coche está apagado";
      return false;
    }
  }

  encenderCoche(): void{
    this.car.estado =  !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado()){
      this.car.velocidad += this.car.aceleracion;
    }else{
      this.mensaje = "El coche está apagado";
    }
  }
}
