import React, { useState } from 'react';
import './carrito.css'

function Carrito() {
  const [items, setItems] = useState([]); 

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const pagar = () => {
    alert('Pago completado. Gracias por su compra.');
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li className="lista1" key={index}>
            {item.name} - ${item.price}
            <button className="boton4" onClick={() => removeItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button className="boton4" onClick={addItem}>Añadir Items</button>
      <button className="boton4" onClick={pagar}>Ir a Pagar</button>
    </div>
  );
}

export default Carrito;
