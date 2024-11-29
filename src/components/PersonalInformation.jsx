import React, { useState } from "react";
import styles from "../styles/components/PersonalInformation.css";
import {Link} from "react-router-dom";

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    address: "",
    city: "",
    state: "",
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
    <div className={styles.checkout__container}>
      <form className={styles.checkout__form} onSubmit={handleSubmit}>
        <h4 className={styles.checkout__title}>Contact information</h4>
        <div className={styles.checkout__group}>
          <label>Email address</label>
          <input
            type="text"
            name="name"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <h4 className={styles.checkout__title}>Payment details</h4>
        <div className={styles.checkout__group}>
          <label>Card number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.checkout__date}>
          <div className={styles.checkout__expiration}>
            <label>Expiration date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.checkout__cvc}>
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
        <h4 className={styles.checkout__title}>Shipping address</h4>
        <div className={styles.checkout__group}>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.checkout__address}>
          <div className={styles.checkout__city}>
            <label>City</label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.checkout__state}>
            <label>State/Province</label>
            <input
              type="text"
              name="state"
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.checkout__postal}>
            <label>Postal code</label>
            <input
              type="text"
              name="postalCode"
              required
              onChange={handleChange}
             />
          </div>
        </div>
        <div>
          <h4 className={styles.checkout__title}>Billing information</h4>
          <label>
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
            />
            Same as shipping information
          </label>
        </div>
        <button className={styles.checkout__submitBtn} type="submit">
          <Link to={"/"}>Pay Now</Link>
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
