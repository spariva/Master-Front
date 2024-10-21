import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import MenuHospitales from './MenuHospitales'
import NotFound from './NotFound'
import Doctores from './Doctores'

export default class Router extends Component {
    render() {
        function DoctoresElement(){
            let {idhospital} = useParams();
            return <Doctores idhospital={idhospital}/>
        }
        
        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctores/:idhospital" element={<DoctoresElement/>} />
                    {/* <Route path="/hospitales" element={<Hospitales />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
