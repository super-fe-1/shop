import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../utils/api';
import { loginSuccess, loginFailure } from '../redux/slices/authSlice';
import InputField from '../components/InputField';
import Button from '../components/Button';
import styles from '../styles/AuthPage.module.css';
const AuthPage = ({ isSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signup(formData);
        navigate('/login');
      } else {
        const response = await login(formData.email, formData.password);
        dispatch(loginSuccess(response.data));
        navigate('/home');
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        (isSignUp ? '회원가입에 실패했습니다.' : '로그인에 실패했습니다.');
      setError(errorMessage);
      if (!isSignUp) {
        dispatch(loginFailure(errorMessage));
      }
    }
  };

  return (
    <div className={styles.authpage_container}>
      <div className={styles.auth_form}>
        <h2 className={styles.auth_heading}>
          {isSignUp ? '회원가입' : '로그인'}
        </h2>
        {error && <p className={styles.auth_error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
          />
          <InputField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />
          {isSignUp && (
            <>
              <InputField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="전화번호"
              />
              <InputField
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="주소"
              />
            </>
          )}
          <Button
            text={isSignUp ? '회원가입' : '로그인'}
            type="submit"
            className={styles.auth_submit_button}
          />
        </form>
        {!isSignUp && (
          <p className={styles.auth_helper_text}>
            계정이 없으신가요?{' '}
            <button
              onClick={() => navigate('/signup')}
              className={styles.link_signup_button}
            >
              회원가입
            </button>
          </p>
        )}
        {isSignUp && (
          <p className={styles.auth_helper_text}>
            이미 계정이 있으신가요?{' '}
            <button
              onClick={() => navigate('/login')}
              className={styles.link_signup_button}
            >
              로그인
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
