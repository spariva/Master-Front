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
                  <a href="/collatz/23">23</a>
              </li>
              <li>
                  <a href="/collatz/13">13</a>
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
