import { useEffect, useState } from 'react';
import axios from '../axios/axios';
import styles from '../styles/pages/CartPage.module.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    await axios
      .get(`/products`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <input type="checkbox" />
        <label>전체 선택</label>
      </div>
      <ul>
        {cart.map((item, i) => {
          return (
            <li key={i} className={styles.item}>
              <input type="checkbox" />
              <div className={styles.item__info}>
                <img
                  src={item.productImageUrl}
                  alt={`${item.title}`}
                  className={styles.item__info_image}
                />
                <div className={styles.item__info_desc}>
                  <span>{item.title}</span>
                  <div className={styles.item__desc_option}>
                    <span className={styles.option}>
                      {item.selectedColor.toUpperCase()}
                    </span>
                    <span className={styles.option}>
                      {item.selectedSize.toUpperCase()}
                    </span>
                    <span className={styles.option}>수량: {item.quantity}</span>
                  </div>
                  <span className={styles.item__desc_price}>
                    {item.price.toLocaleString()}원
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartPage;
