import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import BuscadorCustomer from './components/BuscadorCustomer';
// import BuscadorCoches from './components/BuscadorCoches';
// import BuscadorCochesClase from './components/BuscadorCochesClase';
// import DepartamentosEmpleados from './components/DepartamentosEmpleados';
// import EmpleadosOficios from './components/EmpleadosOficios';
import Departamentos from './components/MaestroDetalle/Departamentos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/* <BuscadorCustomer/> */}
        <Departamentos/>
        {/* <BuscadorCoches/> */}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
