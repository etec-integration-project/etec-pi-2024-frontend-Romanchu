import React from 'react';
import { Link } from 'react-router-dom';
import './body.css';
import paduno from '../../multimedia/pad1.webp';

export default function Body() {
  const handleCompraClick = () => {
    alert('Producto añadido');
  };

  return (
    <>
      <div>
        <h1 className="palabra1">A tu alcance cualquier tipo de pad...</h1>
        <h1 className="palabra2">BE</h1>
        <h1 className="palabra3">MUST</h1>
      </div>

      {/* Sección de botones de navegación */}
      <div className="nav-buttons">
        <Link to="/login" className="link-nav">
          <button className="btn-nav">Login</button>
        </Link>
        <Link to="/personalizacion" className="link-nav">
          <button className="btn-nav">Personalización</button>
        </Link>
        <Link to="/register" className="link-nav">
          <button className="btn-nav">Register</button>
        </Link>
      </div>

      {/* Sección de Productos */}
      <section className="productos">
        <h2 className="productos-titulo">Productos</h2>
        <div className="producto-item">
          <img src={paduno} alt="Producto Pad" className="pad1" />
          <div className="comprar">
            <button className="boton1" onClick={handleCompraClick}>
              <Link to="/carrito" className="boton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Añadir producto
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
