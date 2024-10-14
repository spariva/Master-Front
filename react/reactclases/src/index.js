import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador.js';
import DibujosComplejos from './components/DibujosComplejos.js';
import DibujosComplejosReact from './components/DibujosComplejosReact.js';
import PadeDeporte from './components/PadreDeporte.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contador inicio="47"/>
    <Contador inicio="23"/>
    <DibujosComplejosReact/> */}
    <PadeDeporte/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
