import api from './api';

export const registerUser = async (dataUser) => {
  try {
    const { data } = await api.post(
      '/auth/register',
      dataUser,
    );
    alert(data.msg);
  } catch ({ response }) {
    alert(response.data.msg);
  }
};
