import React, { useState } from 'react';
import axios from 'axios';
import './Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contacto', {
        nombre,
        email,
        mensaje,
      });

      if (response.data.success) {
        setRespuesta('Gracias por tu mensaje, te responderemos pronto.');
      } else {
        setRespuesta('Hubo un problema al enviar tu mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setRespuesta('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="contacto-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button className="boton" type="submit">Enviar</button>
      </form>
      {respuesta && <div className="respuesta">{respuesta}</div>}
    </div>
  );
}

export default Contacto;

