import instance from './axios';

const setToken = (accessToken) => {
  if (accessToken) {
    instance.defaults.headers.common['Authorization'] = `${accessToken}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};
export default setToken;
