import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  templateUrl: './hijo-deporte.component.html',
  styleUrl: './hijo-deporte.component.css'
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() selectFavPadre: EventEmitter<any> = new EventEmitter();

  selectFavHijo(): void{
    this.selectFavPadre.emit(this.sport);
  }
}
