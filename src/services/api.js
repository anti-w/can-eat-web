import axios from 'axios';

const api = axios.create({
  baseURL: 'https://can-eat-api-production.up.railway.app/',
});

export default api;
