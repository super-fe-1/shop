import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // 백엔드 API URL

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
  return response;
};
