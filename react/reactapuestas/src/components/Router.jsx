/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import CreateApuesta from './CreateApuesta'
import Equipo from './Equipo'
import Apuestas from './Apuestas'


export default class Router extends Component {
  render() {
    function ElementDetalle() {
        let { id } = useParams();
        return(<Equipo id={id}/>)
    }

    // function ElementUpdate() {
    //     let { id } = useParams();
    //     return(<UpdateCoche id={id}/>)
    // }

    return (
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateApuesta />} />
            <Route path='/equipos/:id' element={<ElementDetalle/>} />
            <Route path='/apuestas' element={<Apuestas/>} />
        </Routes>
    </BrowserRouter>
    )
  }
}
