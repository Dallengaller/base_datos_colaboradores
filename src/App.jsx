// App.jsx
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaboradores';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

function App() {
  const [colaboradoresIngresados, setColaboradoresIngresados] = useState([]);
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradoresIngresados([...colaboradoresIngresados, nuevoColaborador]);
  };

  const todosLosColaboradores = [...BaseColaboradores, ...colaboradoresIngresados];

  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filtro
  const colaboradoresFiltrados = todosLosColaboradores.filter((colaborador) =>
    Object.values(colaborador).some(
      (valor) =>
        valor &&
        typeof valor === 'string' &&
        valor.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Título y Buscador */}
        <div className="col-12 mb-4">
          <h2 className="text-left">Lista de Colaboradores</h2>
          <Buscador search={search} onChange={handleSearchChange} />
        </div>

        <div className="col-sm-12 col-md-6">
          {/* Listado */}
          <Listado colaboradores={colaboradoresFiltrados} />
        </div>

        <div className="col-sm-12 col-md-6">
          {/* Formulario */}
          <Formulario onAgregarColaborador={agregarColaborador} setAlert={setAlert} />
          {alert && <Alert color={alert.type}>{alert.message}</Alert>}
        </div>
      </div>
    </div>
  );
}

export default App;
