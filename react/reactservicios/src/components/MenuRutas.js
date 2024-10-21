import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/tablamultiplicar/21">TablaMultiplicar21</NavLink>
              </li>
              <li>
                  <NavLink to="/tablamultiplicar/1">TablaMultiplicar 1</NavLink>
              </li>
              <li>
                  <NavLink to="/random">Sin ruta</NavLink>
              </li>
          </ul>
        </nav>
      </div>
    )
  }
}
