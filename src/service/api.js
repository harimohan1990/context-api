
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
  get: async (url) => {
    const response = await fetch(`${API_BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
};

export default api;
