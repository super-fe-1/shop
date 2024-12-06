import { Link } from 'react-router-dom';
import styles from '../styles/components/ShopList.module.css';
import axios from '../axios/axios';
import { useEffect, useState } from 'react';

const ShopList = () => {
  const [items, setItems] = useState([]);
  // const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     const response = await axios.get('/cart');
  //     //const response = await axios.get(`/api/payment`);
  //     setCartData(response.data);
  //   };
  //   fetchCartData();
  // }, []);

  useEffect(() => {
    const getShopList = async () => {
      const res = await axios.get(`/products`);
      //const res = await axios.get(`api/products`);

      setItems(res.data);
    };
    getShopList();
  }, []);

  return (
    <>
      <div className={styles.list__container}>
        <p className={styles.list__title}>New Arrivals</p>
        <p className={styles.list__description}>
          Thoughtfully designed objects for the workspace, home, and travel
        </p>
      </div>
      <div className={styles.list__filters}>
        <ul className={styles.list__sort}>Sort</ul>
        <ul className={styles.list__menu}>
          <li>Category</li>
          <li>Brand</li>
          <li>Color</li>
          <li>Sizes</li>
        </ul>
      </div>
      <ul className={styles.list__items}>
        {items.map((item) => (
          <li key={item.productId}>
            <img src={item.productImageUrl} alt={`${item.title}`} />
            <div className={styles.list__buttons}>
              <p className={styles.list__link}>
                <Link to={`/detail/${item.productId}`}>{item.title}</Link>
              </p>
              <p>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopList;
