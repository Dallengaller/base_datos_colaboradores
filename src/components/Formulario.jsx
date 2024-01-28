// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const capturaInput = (e) => {
    const { name, value } = e.target;
    setColaborador((prevColaborador) => ({
      ...prevColaborador,
      [name]: value,
    }));
  };

  const agregarNuevoColaborador = (e) => {
    e.preventDefault();
    onAgregarColaborador(colaborador);
    setColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <div>
        <h2>Agregar Colaborador</h2>
      <form onSubmit={agregarNuevoColaborador}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
          </label>
          <input
            type="text"
            name="nombre"
            value={colaborador.nombre}
            onChange={capturaInput}
            className="form-control"
            placeholder="Nombre del Colaborador"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
          </label>
          <input
            type="email"
            name="correo"
            value={colaborador.correo}
            onChange={capturaInput}
            className="form-control"
            placeholder="Correo del Colaborador"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
          </label>
          <input
            type="text"
            name="edad"
            value={colaborador.edad}
            onChange={capturaInput}
            className="form-control"
            placeholder="Edad del Colaborador"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">
          </label>
          <input
            type="text"
            name="cargo"
            value={colaborador.cargo}
            onChange={capturaInput}
            className="form-control"
            placeholder="Cargo del Colaborador"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
          </label>
          <input
            type="text"
            name="telefono"
            value={colaborador.telefono}
            onChange={capturaInput}
            className="form-control"
            placeholder="Teléfono del Colaborador"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;
