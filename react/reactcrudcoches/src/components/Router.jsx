import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'
import DetalleCoche from './DetalleCoche'
import DeleteCoche from './DeleteCoche'
import MenuCoches from './MenuCoches'

export default class Router extends Component {
  render() {
    // function ElementDetalle() {
    //     let {id} = useParams();
    //     return(<DetalleCoche id={id}/>)
    // }

    // function ElementUpdate() {
    //     let {id, nombre, localidad} = useParams();
    //     return(<UpdateCoche id={id} nombre={nombre} localidad={localidad}/>)
    // }

    // function ElementDelete() {
    //     let {id} = useParams();
    //     return(<DeleteCoche id={id}/>)
    // }
    return (
        <BrowserRouter>
        <MenuCoches/>
        <Routes>
            <Route path="/" element={<HomeCoches />} />
            <Route path="/create" element={<CreateCoche />} />
            <Route path='/update' element={<UpdateCoche/>} />
            {/* <Route path='/detalle/:id' element={<ElementDetalle/>} /> */}
            {/* <Route path='/update/:id/:nombre/:localidad' element={<ElementUpdate/>} />
            <Route path='/delete/:id' element={<ElementDelete/>} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </BrowserRouter>
    )
  }
}
