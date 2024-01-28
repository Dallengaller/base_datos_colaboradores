// App.jsx
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
    const [colaboradoresIngresados, setColaboradoresIngresados] = useState([]);

    const agregarColaborador = (nuevoColaborador) => {
        setColaboradoresIngresados([...colaboradoresIngresados, nuevoColaborador]);
    };

    const todosLosColaboradores = [...BaseColaboradores, ...colaboradoresIngresados];

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="row">
                <div className="col-12 col-md-6">
                    <Formulario onAgregarColaborador={agregarColaborador} />
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <Listado colaboradores={todosLosColaboradores} />
                </div>
            </div>
        </div>
    );
}

export default App;
