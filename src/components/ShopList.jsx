import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/ShopList.module.css"

const ShopList = () => {

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
          //이미지 들어오면 구현 예정
          <li key={id}>
            <img src={`image${id}.jpg`} alt={`Image ${id}`} className="w-full h-auto" />
            <div className={styles.list__buttons}>
              <p
                className={styles.list__link}
              >
                <Link to ="/detail/:id">이름 {id}</Link>
              </p>
              <p>가격</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopList;
