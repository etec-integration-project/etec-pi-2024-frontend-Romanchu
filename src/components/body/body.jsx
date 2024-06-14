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
        <img src={paduno} alt="imgpad" className="pad1" />
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
        <h1 className="palabra2">BE</h1>
        <h1 className="palabra3">MUST</h1>
      </div>
    </>
  );
}
