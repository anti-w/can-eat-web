import api from './api';

export const sign = (user) => {
  return api.post('/users/login', user);
};
