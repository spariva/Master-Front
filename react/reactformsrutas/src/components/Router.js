import { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Musica from './Musica';
import Cine from './Cine';
import ConjeturaCollatz from './ConjeturaCollatz';
import TablaMultiplicar from './TablaMultiplicar';
import SeleccionMultiple from './SeleccionMultiple';





export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/musica" element={<Musica/>} />
                <Route path="/cine" element={<Cine/>} />
                <Route path="/conjeturacollatz" element={<ConjeturaCollatz/>}/>
                <Route path="/tablamultiplicar" element={<TablaMultiplicar/>}/>
                <Route path="/seleccionmultiple" element={<SeleccionMultiple/>}/>
            </Routes>
        </BrowserRouter>)

    }
}

