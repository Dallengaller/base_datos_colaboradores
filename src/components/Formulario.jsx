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
  const [showAlert, setShowAlert] = useState({ status: false, type: '', message: '' });

  const capturaInput = (e) => {
    const { name, value } = e.target;
    setColaborador((prevColaborador) => ({ ...prevColaborador, [name]: value }));
  };

  const mostrarAlerta = (type, message) => {
    setShowAlert({ status: true, type, message });
    setTimeout(() => setShowAlert({ status: false, type: '', message: '' }), 3000);
  };

  const validarCampoNumerico = (campo, regex, mensajeError) => {
    if (!regex.test(colaborador[campo])) {
      mostrarAlerta('danger', mensajeError);
      return false;
    }
    return true;
  };

  const agregarNuevoColaborador = (e) => {
    e.preventDefault();

    const camposRequeridos = ['nombre', 'correo', 'edad', 'cargo', 'telefono'];

    // Validaciones
    if (camposRequeridos.some((campo) => !colaborador[campo])) {
      mostrarAlerta('danger', 'Completa todos los campos!');
      return;
    }

    // Validación de formato de correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(colaborador.correo)) {
      mostrarAlerta('danger', 'Ingrese un correo electrónico válido');
      return;
    }

    // Validación de números en el campo de teléfono y edad
    if (!validarCampoNumerico('telefono', /^[0-9]+$/, 'Ingrese solo números en el campo de teléfono') || 
        !validarCampoNumerico('edad', /^\d+$/, 'Ingrese solo números en el campo de Edad')) {
      return;
    }

    // Si todas las validaciones son exitosas, agrega al colaborador y muestra una alerta de éxito
    onAgregarColaborador(colaborador);
    setColaborador(initialState);
    mostrarAlerta('success', 'Colaborador agregado!');
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
          {showAlert.status && <Alert color={showAlert.type}>{showAlert.message}</Alert>}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
