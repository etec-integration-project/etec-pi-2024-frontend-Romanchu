import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'correo@example.com' && password === 'contraseña') {
      setMensaje('Iniciaste sesión con éxito.');
    } else {
      setMensaje('Fallo en el inicio de sesión.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="boton3" type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
}

export default Login;



