import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import TablaMultiplicar from './TablaMultiplicar';
import MenuRutas from './MenuRutas';


export default class Router extends Component {
  render() {
    //* Para coger params de ruta, function() dentro del render pero fuera del return
    function TablaMultiplicarElement(){
        let {valornumero} = useParams();
        return <TablaMultiplicar numero={valornumero}/>
    }

    return (
      <BrowserRouter>
      <MenuRutas/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tablamultiplicar/:valornumero" element={<TablaMultiplicarElement/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
