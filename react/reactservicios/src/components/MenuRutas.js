import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/tablamultiplicar/21">TablaMultiplicar21</a>
              </li>
              <li>
                  <a href="/tablamultiplicar/1">TablaMultiplicar 1</a>
              </li>
              <li>
                  <a href="/random">Sin ruta</a>
              </li>
          </ul>
        </nav>
      </div>
    )
  }
}
