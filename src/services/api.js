import axios from 'axios';

const api = axios.create({
  baseURL: 'https://can-eat-api.herokuapp.com',
});

export default api;
