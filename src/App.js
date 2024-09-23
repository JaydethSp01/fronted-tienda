import React, { useState } from "react";
import ProductList from "./components/ProductList";
import OrderList from "./components/OrderList";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <header>
        <h1>Tienda Online</h1>
        <h2>Carrito de Compras ({cart.length} items)</h2>
      </header>
      <main>
        {/* Aquí conectamos el componente de productos */}
        <ProductList addToCart={addToCart} />
        {/* Aquí conectamos el componente de la lista de órdenes */}
        <OrderList cart={cart} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
