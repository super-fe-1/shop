import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/components/DetailPage.module.css";
import axios from "../axios/axios";

const DetailPage = () => {
  const { productId } = useParams();
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

  const handleAddToCart = async (item) => {
    try {
      const payload = {
        "productId": 1,
        "title": "Product 1",
        "price": 10000,
        "contents": "Description of Product 1",
        "productStock": 10,
        "productImageUrl": "http://example.com/product1.jpg",
        "colorOptions": [
          {
            "optionType": "색상",
            "optionValue": "Red"
          },
          {
            "optionType": "색상",
            "optionValue": "Blue"
          },
          {
            "optionType": "색상",
            "optionValue": "Green"
          }
        ]
      };
      console.log("보낼 데이터:", payload);
      const response = await axios.post(`/users`,payload);
      // const response = await axios.post(`/api/products/${item.productId}`, payload);
      console.log("장바구니에 추가 성공:", response.data);
      alert("장바구니에 추가되었습니다!");
    } catch (error) {
      console.error("장바구니 추가 중 오류:", error);
      alert("장바구니 추가에 실패했습니다.");
    }
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
            <p className={styles.product__details_price}>{item.price}원</p>
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
            <button
              className={styles.product__details_button}
              onClick={() => handleAddToCart(item)}
            >
              장바구니에 추가
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
