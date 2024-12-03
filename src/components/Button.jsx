import React from 'react';

const Button = ({ text, type, className }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
