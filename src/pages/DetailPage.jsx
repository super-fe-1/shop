import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "../styles/components/DetailPage.module.css"
import axios from "../axios/axios";

const DetailPage = () => {
  const {productId} = useParams();
  const [detail, setDetail] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const getDetail = async () => {
      const res = await axios.get(`/users`);
      setDetail(res.data);
      console.log(res.data);
    };
    getDetail();
  }, [productId]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };


  return (
    <div className={styles.product}>
      {detail.map((item) => (
      <div key={item.productId}>
        <div className={styles.product__image}>
          <img
            src={item.productImageUrl}
            alt={item.title}
            className={styles.product__image_img}
          />
        </div>

        <div className={styles.product__details}>
          <h1 className={styles.product__details_name}>{item.title}</h1>
          <p className={styles.product__details_price}>{item.price}</p>
          <p className={styles.product__details_description}>{item.contents}</p>

          <div className={styles.product__details_colors}>
            <p>색상</p>
            <div className={styles.product__details_color}>
              {item.colorOptions &&
                item.colorOptions.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(color.optionValue)}
                    className={`${styles.color_button} ${
                      selectedColor === color.optionValue
                        ? styles.selected
                        : styles.default
                    }`}
                  >
                    {color.optionValue}
                  </button>
                ))}
            </div>
          </div>
          <button className={styles.product__details_button}>
            장바구니에 추가
          </button>
        </div>
      </div>
        ))}
    </div>
  );
};

export default DetailPage;
