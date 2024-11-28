import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {id: 1, name: "Product 1", price: 100, quantity: 1},
    {id: 2, name: "Product 2", price: 50, quantity: 2},
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {...item, quantity: item.quantity + (increment ? 1 : -1)}
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart__container}>
      <h1 className={styles.cart__title}>Your Cart</h1>
      <div className={styles.cart__items}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cart__item}>
            <p>{item.name}</p>
            <div className={styles.cart__controls}>
              <button
                onClick={() => updateQuantity(item.id, false)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, true)}>+</button>
            </div>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className={styles.cart__summary}>
        <p>Total: ${total}</p>
        <button
          className={styles.cart__checkoutBtn}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
