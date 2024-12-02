import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
});
export default instance;

// 토큰에 이상이 있는 경우 로그아웃
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken');
      setTimeout(() => {
        window.location.reload('/');
      }, 1000);
    }
    return Promise.reject(error);
  }
);
