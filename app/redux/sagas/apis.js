import axios from 'axios';


const api = axios.create({
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

export const getBuilding = async () => {
  const response = await api.get('/property/buildings', getAuthHeader());
  return response.data;
};

export const getApp = async () => {
  const response = await api.get('/property/application', getAuthHeader());
  return response.data;
};

export const getClaim = async () => {
  const response = await api.get('/property/claim', getAuthHeader());
  return response.data;
};
