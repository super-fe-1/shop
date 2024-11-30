import React, { useState } from "react";
import styles from "../styles/components/PersonalInformation.module.css";
import {Link} from "react-router-dom";

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    address: "",
    postalCode: "",
    sameAsShipping: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!");
  };

  return (
    <div className={styles.information__container}>
      <form className={styles.information__form} onSubmit={handleSubmit}>
        <h4 className={styles.information__title}>연락 정보</h4>
        <div className={styles.information__group}>
          <label>이메일</label>
          <input
            type="text"
            name="name"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <h4 className={styles.information__title}>결제 정보</h4>
        <div className={styles.information__group}>
          <label>카드 번호</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.information__date}>
          <div className={styles.information__expiration}>
            <label>유효기간 (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <h4 className={styles.information__title}>배송 주소</h4>
        <div className={styles.information__group}>
          <label>주소</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.information__address}>
          <label>우편 번호</label>
          <input
              type="text"
              name="postalCode"
              required
              onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
            />
            배송 정보 동일
          </label>
        </div>
        <button className={styles.information__submitBtn} type="submit">
          <Link to={"/"}>구매하기</Link>
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
