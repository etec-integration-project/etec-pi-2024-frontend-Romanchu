import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './carrito.css';

function Carrito() {
  const { items, removeItem, getTotal, clearCart, increaseItemQuantity } = useContext(CartContext);

  // Función para aumentar la cantidad de un producto en el carrito
  const handleIncreaseQuantity = (index) => {
    increaseItemQuantity(index); // Llama a la función del contexto para aumentar la cantidad
  };

  const realizarPedido = async () => {
    if (items.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de realizar el pedido.');
      return;
    }

    try {
      // Realizar solicitud al backend usando axios
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || '/api/pedidos'}`,
        { productos: items }, // Envía los productos del carrito
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert(`¡Pedido realizado con éxito! ID del pedido: ${response.data.pedidoId}`);
        clearCart(); // Vacía el carrito después de realizar el pedido
      } else {
        alert(`Error al realizar el pedido: ${response.data.error || 'Error desconocido'}`);
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
              <div>
                <button className="boton4" onClick={() => handleIncreaseQuantity(index)}>
                  +
                </button>
                <button className="boton4" onClick={() => removeItem(index)}>
                  Eliminar
                </button>
              </div>
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
