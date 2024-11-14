// Body.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './body.css';
import paduno from '../../multimedia/pad1.webp';

export default function Body() {
  const { addItem } = useContext(CartContext);

  const handleCompraClick = () => {
    const producto = {
      name: 'Pad Olas',
      price: 3000,
      imagen: paduno,
    };
    addItem(producto);
    alert('Producto añadido al carrito');
  };

  return (
    <div>
      <h1 className="palabra1">A tu alcance cualquier tipo de pad...</h1>
      <h1 className="palabra2">BE</h1>
      <h1 className="palabra3">MUST</h1>

      <section className="productos">
        <h2 className="productos-titulo">Productos</h2>
        <div className="producto-item">
          <img src={paduno} alt="Producto Pad" className="pad1" />
          <div className="comprar">
            <button className="boton1" onClick={handleCompraClick}>
              Añadir producto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
