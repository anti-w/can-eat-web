import api from './api';

export const getFoodsPerPages = (page) => {
  return api.get(`/foods/${page}`);
};
