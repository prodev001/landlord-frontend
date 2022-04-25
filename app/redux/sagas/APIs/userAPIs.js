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

export const getBuilding = async (userId) => {
  const response = await api.get('/user/buildings?userId=' + userId, getAuthHeader());
  return response.data;
};

export const getApp = async (userId) => {
  const response = await api.get('/user/applications?userId=' + userId, getAuthHeader());
  return response.data;
};

export const getClaim = async (userId) => {
  const response = await api.get('/user/claims?userId=' + userId, getAuthHeader());
  return response.data;
};

export const getPolicy = async (userId) => {
  const response = await api.get('/user/policies?userId=' + userId, getAuthHeader());
  return response.data;
};

export const getLandlord = async () => {
  const response = await api.get('/user/landlords', getAuthHeader());
  return response.data;
};

export const getVP = async () => {
  const response = await api.get('/user/vps', getAuthHeader());
  return response.data;
};

export const getRM = async () => {
  const response = await api.get('/user/rms', getAuthHeader());
  return response.data;
};

export const getPM = async () => {
  const response = await api.get('/user/pms', getAuthHeader());
  return response.data;
};
