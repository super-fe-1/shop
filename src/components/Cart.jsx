import React, { useState } from "react";
import styles from "../styles/components/Cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "product 1", price: 100, quantity: 1, option: {size: "m"} },
    { id: 2, name: "product 2", price: 50, quantity: 2, option: {color: "red"} },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = 10; // 배송비
  const tax = subtotal * 0.1; // 세금 (10%)
  const total = subtotal + shippingFee + tax;

  //이미지는 받으면 구현 예정
  return (
    <div className={styles.cart__container}>
      <h1 className={styles.cart__title}>Amount due</h1>
      <div className={styles.cart__items}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cart__item}>
            <div>
              <p>{item.name}</p>
              {Object.entries(item.option).map(
                ([key, value]) => `${key}: ${value}`
              )}
            </div>
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
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className={styles.cart__summary}>
        <div className={styles.cart__costs}>
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className={styles.cart__costs}>
          <p>Shipping Fee</p>
          <p>${shippingFee.toFixed(2)}</p>
        </div>
        <div className={styles.cart__costs}>
          <p>Taxes</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <hr className={styles.cart__hr} />
        <div className={styles.cart__total}>
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
