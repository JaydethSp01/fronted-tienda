import React from "react";

const OrderList = ({ cart, removeFromCart }) => {
  return (
    <section>
      <h2>Mis Órdenes</h2>
      <ul>
        {cart.length === 0 ? (
          <li>No hay productos en el carrito.</li>
        ) : (
          cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default OrderList;
