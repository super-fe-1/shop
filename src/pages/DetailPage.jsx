<<<<<<< HEAD
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/DetailPage.module.css';

const DetailPage = () => {
  const { id } = useParams();
  // 일단 목업데이터로 생성
  const mockData = {
    1: {
      name: 'Product 1',
      description: 'This is a great product that you will love.',
      price: '$100',
      image: 'image1.jpg',
    },
  };

  const product = mockData[id] || {
    name: 'Unknown Product',
    description: 'No details available.',
    price: '-',
    image: 'placeholder.jpg', // 기본 이미지
=======
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
      const res = await axios.get(`/cart`);
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
        productId: item.productId,
        title: item.title,
        price: item.price,
        colorOptions: selectedColor || "미선택",
      };
      console.log("보낼 데이터:", payload);
      const response = await axios.post(`http://localhost:3001/cart`,payload);
      // const response = await axios.post(`/api/products/${item.productId}`, payload);
      console.log("장바구니에 추가 성공:", response.data);
      alert("장바구니에 추가되었습니다!");
    } catch (error) {
      console.error("장바구니 추가 중 오류:", error);
      alert("장바구니 추가에 실패했습니다.");
    }
>>>>>>> feature/detail-page-api
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

<<<<<<< HEAD
      <div className={styles.product__details}>
        <h1 className={styles.product__details_name}>{product.name}</h1>
        <p className={styles.product__details_price}>{product.price}</p>
        <p className={styles.product__details_description}>
          {product.description}
        </p>
        <button className={styles.product__details_button}>
          장바구니에 추가
        </button>
      </div>
=======
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
>>>>>>> feature/detail-page-api
    </div>
  );
};

export default DetailPage;
