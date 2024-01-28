// App.jsx
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaboradores';
import Buscador from './components/Buscador';

function App() {
    const [colaboradoresIngresados, setColaboradoresIngresados] = useState([]);
    const [search, setSearch] = useState('');

    const agregarColaborador = (nuevoColaborador) => {
        setColaboradoresIngresados([...colaboradoresIngresados, nuevoColaborador]);
    };

    const todosLosColaboradores = [...BaseColaboradores, ...colaboradoresIngresados];

    // Función para manejar el cambio en el campo de búsqueda
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Filtrar colaboradores basado en la búsqueda (por nombre, correo y telefono)
    const colaboradoresFiltrados = todosLosColaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="row">
                {/* Título y Buscador */}
                <div className="col-12 mb-4 text-center">
                    <h2 className="mb-3">Lista de Colaboradores</h2>
                    <Buscador search={search} onChange={handleSearchChange} />
                </div>


                <div className="row justify-content-between">

                    {/* Listado */}
                    <div className="col-12 col-md-6">
                        <Listado colaboradores={colaboradoresFiltrados} />
                    </div>

                    {/* Formulario */}
                    <div className="col-12 col-md-6">
                        <Formulario onAgregarColaborador={agregarColaborador} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
