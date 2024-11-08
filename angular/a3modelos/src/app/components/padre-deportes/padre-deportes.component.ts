import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: string[];
  public fav!: string;

  constructor(){
    this.deportes = ["Kuroro no basket", "Haykiuu", "Free", "Dan dan dan"];
  }

  selectFavPadre(event: any): void{
    console.log("Dato " + event);
    this.fav = event;
  }
}
