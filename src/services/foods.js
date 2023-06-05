import api from './api';

export const getFoodsPerPages = (page) => {
  return api.get(`/foods?page=${page}`);
};

export const getFoodsByGroup = (selectedGroup, page) => {
  return api.get(
    `/foods?group=${selectedGroup}&page=${page}`,
  );
};
