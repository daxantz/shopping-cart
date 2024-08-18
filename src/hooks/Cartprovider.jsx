import React, { createContext, useState, useContext, Children } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(["1 cart item"]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
