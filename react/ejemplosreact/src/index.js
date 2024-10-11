import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { SumarNumeros } from './components/SumarNumeros';
// import { SumarNumeros } from './components/SumarNumeros';
// import { ShowImage } from './components/ShowImage';
// import App from './components/App';
import SaludoPadre from './components/SaludoPadre';
import MatematicasPadre from './components/MatematicasPadre';
import { Contador } from './components/Contador';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MatematicasPadre />
    <SaludoPadre />
    <Contador />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
