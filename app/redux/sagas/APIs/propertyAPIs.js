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

export const getBuilding = async () => {
  const response = await api.get('/property/buildings', getAuthHeader());
  return response.data;
};

export const getApp = async (buildingId) => {
  const response = await api.get('/property/application?buildingId=' + buildingId, getAuthHeader());
  return response.data;
};

export const getClaim = async (buildingId) => {
  const response = await api.get('/property/claim?buildingId=' + buildingId, getAuthHeader());
  return response.data;
};

export const getPolicy = async () => {
  const response = await api.get('/property/policy', getAuthHeader());
  return response.data;
};
