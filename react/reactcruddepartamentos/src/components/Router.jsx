import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import CreateDepartamento from './CreateDepartamento'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from '../UpdateDepartamento'
import DeleteComponent from './DeleteComponent'

export default class Router extends Component {
    render() {
        function ElementDetalle() {
            let {id} = useParams();
            return(<DetalleDepartamento id={id}/>)
        }

        function ElementUpdate() {
            let {id, nombre, localidad} = useParams();
            return(<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }

        function ElementDelete() {
            let {id} = useParams();
            return(<DeleteComponent id={id}/>)
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path="/" element={<HomeDepartamentos />} />
                    <Route path="/create" element={<CreateDepartamento />} />
                    <Route path='/update' element={<UpdateDepartamento/>} />
                    <Route path='/detalle/:id' element={<ElementDetalle/>} />
                    <Route path='/update/:id/:nombre/:localidad' element={<ElementUpdate/>} />
                    <Route path='/delete/:id' element={<ElementDelete/>} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}