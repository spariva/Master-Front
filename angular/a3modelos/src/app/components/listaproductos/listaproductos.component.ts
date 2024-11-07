import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.css'
})
export class ListaproductosComponent {
  public producto: Producto;
  public productos: Producto[];

  constructor() {
    this.producto = new Producto("Juan", "https://makspariva.wordpress.com/wp-content/uploads/2018/07/img_9622.jpg", 3)
    this.productos = [
      new Producto(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),	  
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Triple S Balenciaga",
        "https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg",
        650
      )
    ]
  }

}
