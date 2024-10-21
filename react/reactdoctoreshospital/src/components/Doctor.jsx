import React, { Component } from 'react'

export default class Doctor extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.doctor.apellido}</li>
          <li>{this.props.doctor.especialidad}</li>
          <li>{this.props.doctor.salario}</li>
          <li>{this.props.idhospital}</li>
        </ul>
      </div>
    )
  }
}
