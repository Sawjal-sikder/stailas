import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://10.10.7.76:8000';


const api = axios.create({
      baseURL,
      withCredentials: true, // if using cookies for auth (optional)
      headers: {
            'Content-Type': 'application/json',
      },
});

api.interceptors.request.use((config) => {
      // Add auth token if needed
      const token = localStorage.getItem('token');
      if (token) {
            config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
});

export default api;
