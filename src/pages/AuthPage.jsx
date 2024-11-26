import { useState } from 'react';
import './AuthPage.css';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';
import { login, signup } from '../utils/api';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await login(formData.email, formData.password);
        dispatch(loginSuccess(response.data));
      } else {
        await signup(formData);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || '문제가 발생했습니다.');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form">
        <h2 className="text-center font-bold text-xl mb-4">
          {isLogin ? '로그인' : '회원가입'}
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름 입력"
                className="form-input"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">이메일</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">비밀번호</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호 입력"
              className="form-input"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            {isLogin ? '로그인' : '회원가입'}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}{' '}
          <span
            onClick={() => {
              setIsLogin((prev) => !prev);
              setError('');
            }}
            className="text-blue-500 cursor-pointer"
          >
            {isLogin ? '회원가입' : '로그인'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
