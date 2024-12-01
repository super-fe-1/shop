import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // 백엔드 API URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 로그인 API 호출
export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// 회원가입 API 호출
export const register = async (formData) => {
  try {
    const response = await apiClient.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
