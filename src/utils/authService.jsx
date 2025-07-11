// src/authService.js
import api from './api';

// Login
export const login = async (email, password) => {
      try {
            const response = await api.post('/api/login/', { email, password });
            // console.log('Login response:', response.data);
            // Add support for access_token and refresh_token
            const accessToken =
                  response.data.access ||
                  response.data.accessToken ||
                  response.data.token ||
                  response.data.access_token;
            const refreshToken =
                  response.data.refresh ||
                  response.data.refreshToken ||
                  response.data.refresh_token;
            const userId = response.data.user?.id;

            if (accessToken && refreshToken) {
                  localStorage.setItem('token', accessToken);
                  localStorage.setItem('refreshToken', refreshToken);
                  localStorage.setItem('userId', userId);
                  return { success: true };
            } else {
                  return {
                        success: false,
                        message: 'Login failed: Invalid token response from server.',
                        responseData: response.data,
                  };
            }
      } catch (error) {
            return {
                  success: false,
                  message: error.response?.data?.detail || 'Login failed',
            };
      }
};


// Logout
export const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
};

export const UpdateProfile = async ({ formData }) => {
      try {
            const token = localStorage.getItem('token');
            const response = await api.put('/api/profile/', formData, {
                  headers: {
                        Authorization: `Bearer ${token}`,
                  },
            });
            return response.data;
      } catch (error) {
            console.error("Update Profile Error:", error.response || error);
            throw error;
      }
};

// Get user info (optional)
export const getProfile = async () => {
      try {
            const token = localStorage.getItem('token');
            // console.log(token);
            if (!token) {
                  // Optionally, trigger a logout or redirect to login here
                  return { success: false, message: 'No authentication token found. Please log in.' };
            }
            const response = await api.get(
                  '/api/profile/',
                  {
                        headers: {
                              Authorization: `Bearer ${token}`,
                        },
                  }
            );
            return { success: true, data: response.data };
      } catch (error) {
            if (error.response && error.response.status === 401) {
                  // Optionally, you can remove invalid token here
                  localStorage.removeItem('token');
                  localStorage.removeItem('refreshToken');
                  return { success: false, message: 'Unauthorized. Please log in again.' };
            }
            return { success: false, message: error.message || 'Failed to fetch profile.' };
      }
};
