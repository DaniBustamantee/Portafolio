import React, { useReducer, useState } from 'react';


const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};


const initialState = { nombre: '', email: '', mensaje: '', };
const erroresIniciales = { nombre: '', email: '', mensaje: '' };

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(erroresIniciales);
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.email = 'Email inválido';
    if (formulario.mensaje.length < 10) nuevosErrores.mensaje = 'Mínimo 10 caracteres';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado:', formulario);
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setTimeout(() => setEnviado(false), 3000);
    }
  };


  const handleChange = (e) => {
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>


        {enviado && <div className="alert alert-success">¡Mensaje enviado!</div>}


        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              onBlur={validar}
            />

            {errores.nombre && <div className="invalid-feedback d-block">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              onBlur={validar}
            />
            {errores.email && <div className="invalid-feedback d-block">{errores.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={handleChange}
              onBlur={validar}
            />
            {errores.mensaje && <div className="invalid-feedback d-block">{errores.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-primary ms-2">
            Enviar
          </button>
          <button type="button" className="btn btn-secondary ms-2" onClick={() => dispatch({ type: 'RESET' })}>
            Limpiar
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;