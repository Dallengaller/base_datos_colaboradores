// Formulario.jsx

import React, { useState } from 'react';
import Alert from './Alert';

const Formulario = ({ onAgregarColaborador }) => {
  const initialState = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  };

  const [colaborador, setColaborador] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const capturaInput = (e) => {
    const { name, value } = e.target;
    setColaborador((prevColaborador) => ({ ...prevColaborador, [name]: value }));
  };

  const agregarNuevoColaborador = (e) => {
    e.preventDefault();

    const camposRequeridos = ['nombre', 'correo', 'edad', 'cargo', 'telefono'];

    // Validaciones
    if (camposRequeridos.some((campo) => !colaborador[campo])) {
      setErrorMessage('Completa todos los campos!');
      setSuccessMessage('');
      return;
    }

    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(colaborador.correo)) {
      setErrorMessage('Ingrese un correo electrónico válido');
      setSuccessMessage('');
      return;
    }

   
    if (!/^\d+$/.test(colaborador.telefono) || !/^\d+$/.test(colaborador.edad)) {
      setErrorMessage('Ingrese solo números en los campos de teléfono y edad');
      setSuccessMessage('');
      return;
    }


    onAgregarColaborador(colaborador);
    setColaborador(initialState);
    setSuccessMessage('Colaborador agregado!');
    setErrorMessage('');

  
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className='p-3'>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={agregarNuevoColaborador}>
        {Object.keys(initialState).map((campo) => (
          <div className="mb-3" key={campo}>
            <label htmlFor={campo} className="form-label"></label>
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
          {successMessage && <Alert color="success">{successMessage}</Alert>}
          {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
        </div>
      </form>
    </div>
  );
};

export default Formulario;


