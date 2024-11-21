import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './carrito.css';

function Carrito() {
  const { items, removeItem, getTotal, clearCart } = useContext(CartContext);

  const realizarPedido = async () => {
    if (items.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de realizar el pedido.');
      return;
    }

    try {
      // Realizar solicitud al backend
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/pedidos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productos: items }), // Envía los productos del carrito
      });

      if (response.ok) {
        const data = await response.json();
        alert(`¡Pedido realizado con éxito! ID del pedido: ${data.pedidoId}`);
        clearCart(); // Vacía el carrito después de realizar el pedido
      } else {
        const errorData = await response.json();
        alert(`Error al realizar el pedido: ${errorData.error || 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('Error de conexión. No se pudo realizar el pedido.');
    }
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
              <div>
                <strong>{item.name}</strong> - ${item.price.toFixed(2)} x {item.quantity}
              </div>
              <button className="boton4" onClick={() => removeItem(index)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
      {items.length > 0 && (
        <div className="carrito-total">
          <h3>Total: ${getTotal().toFixed(2)}</h3> {/* Muestra el total */}
          <button className="boton4" onClick={realizarPedido}>
            Ir a Pagar
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrito;
