import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Agregar un producto al carrito (maneja duplicados)
  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity || 1;
        return updatedItems;
      }
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  // Aumentar la cantidad de un producto en el carrito
  const increaseItemQuantity = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      return updatedItems;
    });
  };

  // Eliminar un producto del carrito por índice
  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setItems([]);
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, getTotal, increaseItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
