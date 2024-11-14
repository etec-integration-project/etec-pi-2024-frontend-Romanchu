import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
