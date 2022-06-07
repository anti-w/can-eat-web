import api from './api';

export const getFoodsPerPages = (page) => {
  return api.get(`/foods/${page}`);
};

export const getFoodsByGroup = (selectedGroup, page) => {
  return api.get(`/foods/${selectedGroup}/${page}`);
};
