import { Component } from 'react';
import Comic from './Comic';

export default class Comics extends Component {
    state = {
        listaComics:
            [
                {
                    titulo: "Spiderman",
                    imagen:
                        "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña"
                },
                {
                    titulo: "Wolverine",
                    imagen:
                        "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno"
                },
                {
                    titulo: "Avengers",
                    imagen:
                        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores"
                },
                {
                    titulo: "Spawn",
                    imagen:
                        "https://index.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons"
                },
                {
                    titulo: "Batman",
                    imagen:
                        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago"
                }
            ],
        comicFavorito: null
    }

    seleccionarFavorito = (comic) => {
        console.log("Favorito seleccionado "+  comic.titulo);
        this.setState({comicFavorito: comic});
    }

    eliminarComic = (index) => {
        this.state.listaComics.splice(index,1);
        console.log("index: "+index);
        this.setState({
            listaComics: this.state.listaComics
        })
    }

    render() {
        return (
            <div>
                <h1>Comics</h1>
                {
                    this.state.comicFavorito &&
                    (
                    <div style={{backgroundColor:"indigo", width:"200px"}}>
                        <h2 style={{fontFamily:"fantasy", color:"turquoise"}}>{this.state.comicFavorito.titulo}</h2>
                        <img src={this.state.comicFavorito.imagen} alt={this.state.comicFavorito.titulo} style={{width: "200px", height: "250px"}}/>
                    </div>)
                }
                {
                    this.state.listaComics.map((comic, index) => {
                        return (<Comic key={index} index={index} comic={comic}
                        eliminarComic={this.eliminarComic}
                        seleccionarFavorito={this.seleccionarFavorito}/>)
                    })
                }
            </div>
        );
    }
}