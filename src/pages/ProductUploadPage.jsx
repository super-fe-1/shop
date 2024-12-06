import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import styles from '../styles/pages/ProductUploadPage.module.css';
import FormInput from '../components/FormInput';
import Alert from '../components/Alert';

const ProductUploadPage = () => {
  const navigate = useNavigate();

  const [imageBase64, setImageBase64] = useState(null);
  const [isAlertShow, setIsAlertShow] = useState(false);

  const productFormFields = [
    { id: 'title', label: '상품명', type: 'text', required: true },
    { id: 'contents', label: '설명', type: 'text', required: true },
    { id: 'price', label: '가격', type: 'number', required: true },
    { id: 'quantity', label: '수량', type: 'number', required: true },
    {
      id: 'productImageUrl',
      label: '상품 이미지',
      type: 'file',
      required: true,
    },
  ];

  const handleFileChange = (base64) => {
    setImageBase64(base64);
  };

  const uploadProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    if (imageBase64) {
      formValues.productImageUrl = imageBase64;
    }

    await axios
      .post(`/products`, formValues)
      .then((res) => {
        setIsAlertShow(true);
      })
      .catch((err) => console.error(err));
  };

  const handleConfirm = () => {
    setIsAlertShow(false);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={uploadProduct}>
        {productFormFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.label}
            fieldData={field}
            onFileChange={field.type === 'file' ? handleFileChange : null}
          />
        ))}
        <button>등록</button>
      </form>
      <Alert isAlertShow={isAlertShow}>
        <div className={styles.alert}>
          <p className={styles.alert__text}>상품이 등록되었습니다!</p>
          <button onClick={handleConfirm} className={styles.alert__button}>
            확인
          </button>
        </div>
      </Alert>
    </>
  );
};

export default ProductUploadPage;
