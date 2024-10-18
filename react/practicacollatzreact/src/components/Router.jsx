import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Collatz from './Collatz';


export default class Router extends Component {
  render() {
    //* Para coger params de ruta, function() dentro del render pero fuera del return
    function CollatzComponent(){
      let {numero} = useParams();
      return <Collatz numero={numero}/>
    }

    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collatz/:numero" element={<CollatzComponent/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
