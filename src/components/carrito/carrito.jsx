// Carrito.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './carrito.css';

function Carrito() {
  const { items, removeItem } = useContext(CartContext);

  const pagar = () => {
    alert('Pago completado. Gracias por su compra.');
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          items.map((item, index) => (
            <li className="lista1" key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button className="boton4" onClick={() => removeItem(index)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
      <button className="boton4" onClick={pagar}>Ir a Pagar</button>
    </div>
  );
}

export default Carrito;
