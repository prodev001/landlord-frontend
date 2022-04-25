import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const verifyEmail = async (email) => {
  const response = await api.post('/auth/emailverify', { email });
  return response.data;
};

export const logIn = async (email, password) => {
  const response = await api.post('/auth/signin', { email, password });
  return response.data;
};

export const register = async (username, email, password, role) => {
  const response = await api.post('auth/signup', {
    username,
    email,
    password,
    role,
  });
  return response.data;
};
