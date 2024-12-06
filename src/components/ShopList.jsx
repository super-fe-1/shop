import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/components/ShopList.module.css";

const ShopList = () => {
  const [cartData, setCartData] = useState([]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cart");
      setCartData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("데이터 요청 실패:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
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
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <li key={id}>
            <img src={`image${id}.jpg`} alt={`Image ${id}`} className="w-full h-auto" />
            <div className={styles.list__buttons}>
              <p className={styles.list__link}>
                <Link to={`/detail/${id}`}>이름 {id}</Link>
              </p>
              <p>가격</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.payload}>
        <Link
          to={{
            pathname: "/products/order",
            state: { cartData },
          }}
        >
          결제하기
        </Link>
      </p>
    </>
  );
};

export default ShopList;
