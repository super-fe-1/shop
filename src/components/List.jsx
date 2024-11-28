import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles.component.List.module.css"

const List = () => { d

  return (
    <>
      <div className={styles.list__container}>
        <p className={styles.list_title}>New Arrivals</p>
        <p className={styles.list__description}>
          Thoughtfully designed objects for the workspace, home, and travel
        </p>
      </div>
      <div className={styles.list__controls}>
        <div className={styles.list__sort}>Sort</div>
        <div className={styles.list__others}>
          <div>Category</div>
          <div>Brand</div>
          <div>Color</div>
          <div>Sizes</div>
        </div>
      </div>
      <div className={styles.list__grid}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id}>
            {// img 들어오면 구현 예정}
            {/*<img src={`image${id}.jpg`} alt={`Image ${id}`} className="w-full h-auto" />*/}}
            <div className={styles.list__buttons}>
              <p
                className={styles.list__link}
              >
                <Link to ="/detail/:id">이름 {id}</Link>
              </p>
              <p>가격</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
