import { useEffect, useState } from 'react';
import axios from '../axios/axios';
import Cart from '../components/Cart';
import PersonalInformation from '../components/PersonalInformation';
import styles from '../styles/pages/OrderPage.module.css';

const OrderPage = () => {
  const [cartList, setCartList] = useState([]);

  const getCart = async () => {
    const res = await axios.get('/cart');
    setCartList(res.data);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkout}>
          <PersonalInformation />
        </div>
        <div className={styles.cart}>
          <Cart cartData={cartList} />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
