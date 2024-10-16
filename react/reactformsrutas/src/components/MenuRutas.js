import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/cine">Cine</a>
            </li>
            <li>
                <a href="/musica">Musica</a>
            </li>
            <li>
                <a href="/conjeturacollatz">Conjetura Collatz</a>
            </li>
            <li>
                <a href="/tablamultiplicar">Tabla Multiplicar</a>
            </li>
            <li>
                <a href="/seleccionmultiple">seleccion multiple</a>
            </li>
        </ul>
      </nav>
    )
  }
}
