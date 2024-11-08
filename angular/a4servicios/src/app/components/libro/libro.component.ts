import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  @Input() libro!: Comic;
  @Output() selectFavPadre: EventEmitter<any> = new EventEmitter();

  selectFavHijo(): void{
    this.selectFavPadre.emit(this.libro);
  }

}
