import {Component} from 'react';

export default class Comic extends Component {

    
    render() {
        return (
            <div>
                <h3>{this.props.comic.titulo}</h3>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen} alt={this.props.comic.titulo} style={{width: "200px", height: "250px"}}/>
                <button onClick={() => {
                    this.props.seleccionarFavorito(this.props.comic)
                    }}>Favorito</button>
                <button onClick={() => {
                    this.props.eliminarComic(this.props.index)
                    }}>Eliminar</button>
            </div>
        );
    }
}