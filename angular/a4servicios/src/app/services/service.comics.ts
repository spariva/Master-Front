import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics{
    getComics(): any {
        let comics = new Array<Comic>();
        comics = [
            new Comic(
              "Spiderman",
              "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              "Hombre araña"),
            new Comic(
              "Wolverine",
              "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              "Lobezno"
            ),
            new Comic(
              "Guardianes de la Galaxia",
              "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              "Yo soy Groot"
            ),
            new Comic(
              "Avengers",
              "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              "Los Vengadores"
            ),
          ];
          return comics;
    }
}