import api from './api';

export const getAllGroups = () => {
  return api.get('/groups');
};
