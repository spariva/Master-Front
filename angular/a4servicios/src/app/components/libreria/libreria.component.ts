import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent implements OnInit {
  public comics!: Comic[];
  public comic: Comic;
  public fav!: Comic;

  selectFavPadre(event: any): void{
    this.fav = event;
  }

  createComic():void {
    let auxComic = new Comic(this.comic.titulo, this.comic.imagen, this.comic.descripcion);
    this.comics.push(auxComic);
  }

  ngOnInit(): void {
      this.comics = this._service.getComics();
  }

  constructor( private _service:ServiceComics) {
    this.comic = {
      titulo: "",
      imagen: "",
      descripcion: ""
    }
  }
}
