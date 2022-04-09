import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `${token}`,
    }
  };
};

export const logIn = async (email, password) => {
  // const data = {
  //   username: 'landlord',
  //   password: '123123'
  // };
  const response = await instance.post('/auth/signin', { email, password });
  return response.data;
};

export const register = async (username, email, password, role) => {
  const response = await instance.post('auth/signup', {
    username,
    email,
    password,
    role,
  });
  return response.data;
};
