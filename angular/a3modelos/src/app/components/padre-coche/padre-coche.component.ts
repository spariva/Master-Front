import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coche',
  templateUrl: './padre-coche.component.html',
  styleUrl: './padre-coche.component.css'
})
export class PadreCocheComponent {
  public coches: Coche[];

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 25, false),
      new Coche("Mate", "Camión", 0, 50, false),
      new Coche("Rayo", "McQueen", 0, 75, false),
    ]
  }
}
