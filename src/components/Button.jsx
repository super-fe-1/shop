import React from 'react';
import styles from '../assets/styles/Button.module.css';

const Button = ({ text, type, className }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
