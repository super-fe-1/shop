import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/components/DetailPage.module.css"

const DetailPage = () => {
  const { id } = useParams();
// 일단 목업데이터로 생성 
  const mockData = {
    1: {
      name: "Product 1",
      description: "This is a great product that you will love.",
      price: "$100",
      image: "image1.jpg",
    },
  };

  const product = mockData[id] || {
    name: "Unknown Product",
    description: "No details available.",
    price: "-",
    image: "placeholder.jpg", // 기본 이미지
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.product__image_img}
        />
      </div>

      <div className={styles.product__details}>
        <h1 className={styles.product__details_name}>{product.name}</h1>
        <p className={styles.product__details_price}>{product.price}</p>
        <p className={styles.product__details_description}>{product.description}</p>
        <button className={styles.product__details_button}>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
