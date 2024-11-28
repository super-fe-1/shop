import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';
import { loginSuccess, loginFailure } from '../redux/slices/authSlice';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import styles from '../styles/pages/AuthPage.module.css';

const AuthPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const response = await login(formData.email, formData.password);
      dispatch(loginSuccess(response.data));
      navigate('/home');
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || '로그인에 실패했습니다.';
      setError(errorMessage);
      dispatch(loginFailure(errorMessage));
    }
  };

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.title}>로그인</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <FormInput
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
          />
          <FormInput
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />
          <Button text="로그인" type="submit" className={styles.submitButton} />
        </form>
        <div className={styles.signupLink}>
          <p>
            계정이 없으신가요?{' '}
            <button
              onClick={handleNavigateToSignUp}
              className={styles.signupButton}
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
