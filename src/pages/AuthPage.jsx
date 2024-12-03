import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../utils/api'; // 로그인 및 회원가입 API 호출
import { loginSuccess, loginFailure } from '../redux/slices/authSlice';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import styles from '../styles/pages/AuthPage.module.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // 로그인/회원가입 탭 전환
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    address: '',
    profilePicture: null, // 프로필 사진 파일
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check localStorage for existing login state
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(loginSuccess(parsedUser));
      navigate('/home');
    }
  }, [dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePicture: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // 로그인 처리
      try {
        const response = await login(formData.email, formData.password);
        const userData = response.data;

        // Save to Redux store
        dispatch(loginSuccess(userData));

        // Save to localStorage
        localStorage.setItem('authUser', JSON.stringify(userData));

        navigate('/home');
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || '로그인에 실패했습니다.';
        setError(errorMessage);
        dispatch(loginFailure(errorMessage));
      }
    } else {
      // 회원가입 처리
      try {
        const userPayload = new FormData();
        userPayload.append('email', formData.email);
        userPayload.append('password', formData.password);
        userPayload.append('phone', formData.phone);
        userPayload.append('address', formData.address);
        if (formData.profilePicture) {
          userPayload.append('profilePicture', formData.profilePicture);
        }

        const response = await register(userPayload); // 회원가입 API 호출
        alert('회원가입이 완료되었습니다.');
        setIsLogin(true); // 회원가입 완료 후 로그인 화면으로 전환
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || '회원가입에 실패했습니다.';
        setError(errorMessage);
      }
    }
  };

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.auth_form}>
        <h2 className={styles.title}>{isLogin ? '로그인' : '회원가입'}</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormInput
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            className={styles.auth_forminput}
          />
          <FormInput
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
            className={styles.auth_forminput}
          />
          {!isLogin && (
            <>
              <FormInput
                label="전화번호"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="전화번호"
                className={styles.auth_forminput}
              />
              <FormInput
                label="주소"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="주소"
                className={styles.auth_forminput}
              />
              <FormInput
                label="프로필 사진"
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                className={styles.auth_forminput}
              />
            </>
          )}
          <Button
            text={isLogin ? '로그인' : '회원가입'}
            type="submit"
            className={styles.submit_button}
          />
        </form>
        <div className={styles.signupLink}>
          <p>
            {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
            <button
              onClick={() => setIsLogin((prev) => !prev)}
              className={styles.signup_button}
            >
              {isLogin ? '회원가입' : '로그인'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
