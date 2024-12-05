import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios/axios';
import styles from '../styles/pages/CartPage.module.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const getCart = async () => {
    await axios
      .get(`/products`)
      .then((res) => {
        setCart(res.data);
        setSelectedProducts(res.data.map((item) => item.productId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(cart.map((item) => item.productId));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevCheckedProducts) => {
      if (prevCheckedProducts.includes(productId)) {
        // 체크 해제
        return prevCheckedProducts.filter((id) => id !== productId);
      } else {
        // 체크
        return [...prevCheckedProducts, productId];
      }
    });
  };

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <input
          type="checkbox"
          checked={cart.length > 0 && selectedProducts.length === cart.length} // 전체 선택 체크박스 상태
          onChange={handleSelectAll}
        />
        <label>전체 선택</label>
      </div>
      <ul>
        {cart.map((item, i) => {
          return (
            <li key={i} className={styles.item}>
              <input
                type="checkbox"
                checked={selectedProducts.includes(item.productId)}
                onChange={() => handleSelectProduct(item.productId)}
              />
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
      <Link className={styles.cart__button} to="/products/order">
        구매하기
      </Link>
    </div>
  );
};

export default CartPage;
