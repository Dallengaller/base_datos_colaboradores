import React, { useState } from 'react';
import Alert from './Alert';

const Formulario = ({ onAgregarColaborador }) => {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const [showAlert, setShowAlert] = useState({
    status: false,
    type: '',
    message: '',
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

    // Validaciones
    if (!colaborador.nombre || !colaborador.correo || !colaborador.edad || !colaborador.cargo || !colaborador.telefono) {
      setShowAlert({
        status: true,
        type: 'danger',
        message: 'Completa todos los campos!',
      });
      return;
    }

    // Validación de formato de correo electrónico
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(colaborador.correo)) {
      setShowAlert({
        status: true,
        type: 'danger',
        message: 'Ingrese un correo electrónico válido',
      });
      return;
    }

    // Validación de números en el campo de teléfono
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(colaborador.telefono)) {
      setShowAlert({
        status: true,
        type: 'danger',
        message: 'Ingrese solo números en el campo de teléfono',
      });
      return;
    }

    // Si todas las validaciones son exitosas, agrega al colaborador y muestra una alerta de éxito
    onAgregarColaborador(colaborador);
    setColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });

    setShowAlert({
      status: true,
      type: 'success',
      message: 'Colaborador agregado!',
    });

    // Después de un tiempo, oculta la alerta de éxito
    setTimeout(() => {
      setShowAlert({
        status: false,
        type: '',
        message: '',
      });
    }, 3000); // 3000 milisegundos (3 segundos)
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

        {/* Botón y Alerta en el mismo contenedor */}
        <div className="d-flex flex-column align-items-start">
          <button type="submit" className="btn btn-primary">
            Agregar Colaborador
          </button>

          {/* Alerta */}
          {showAlert.status && <Alert color={showAlert.type}>{showAlert.message}</Alert>}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
