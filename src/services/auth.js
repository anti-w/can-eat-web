import api from './api';

export const sign = (user) => {
  return api.post('/auth/login', user);
};
