// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador, setAlert }) => {
  const initialState = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  };

  const [colaborador, setColaborador] = useState(initialState);

  const capturaInput = (e) => {
    const { name, value } = e.target;
    setColaborador((prevColaborador) => ({ ...prevColaborador, [name]: value }));
  };

  const agregarNuevoColaborador = (e) => {
    e.preventDefault();

    const camposRequeridos = ['nombre', 'correo', 'edad', 'cargo', 'telefono'];

    // Validaciones
    if (camposRequeridos.some((campo) => !colaborador[campo])) {
      setAlert({ type: 'danger', message: 'Completa todos los campos!' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(colaborador.correo)) {
      setAlert({ type: 'danger', message: 'Ingrese un correo electrónico válido' });
      return;
    }

    if (!/^\d+$/.test(colaborador.telefono) || !/^\d+$/.test(colaborador.edad)) {
      setAlert({ type: 'danger', message: 'Ingrese solo números en los campos de teléfono y edad' });
      return;
    }

    onAgregarColaborador(colaborador);
    setColaborador(initialState);
    setAlert({ type: 'success', message: 'Colaborador agregado!' });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className='p-3'>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={agregarNuevoColaborador}>
        {Object.keys(initialState).map((campo) => (
          <div className="mb-3" key={campo}>
            
            <input
              type={campo === 'correo' ? 'email' : 'text'}
              name={campo}
              value={colaborador[campo]}
              onChange={capturaInput}
              className="form-control"
              placeholder={`${campo.charAt(0).toUpperCase() + campo.slice(1)} del Colaborador`}
            />
          </div>
        ))}
        <div className="d-flex flex-column align-items-start">
          <button type="submit" className="btn btn-primary">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
