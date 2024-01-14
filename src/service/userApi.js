
import api from './api';

const userApi = {
  getUsers: () => api.get('users'),
};

export default userApi;
