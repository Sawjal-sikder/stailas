import { useState, useEffect } from 'react';
import api from './api';

export const useDashboard = () => {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
            const fetchDashboard = async () => {
                  const token = localStorage.getItem('token');
                  if (!token) {
                        setError(new Error('No authentication token found.'));
                        return;
                  }
                  try {
                        const response = await api.get('/api/admin/dashboard/', {
                              headers: {
                                    Authorization: `Bearer ${token}`,
                              },
                        });
                        setData(response.data);
                  } catch (err) {
                        console.error("Dashboard API error:", err.response || err);
                        setError(err);
                  }
            };

            fetchDashboard();
      }, []);

      return { data, error };
};

// Path: src/utils/UserHook.jsx
export const useUser = () => {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true); // default true

      useEffect(() => {
            const fetchUser = async () => {
                  const token = localStorage.getItem('token');
                  if (!token) {
                        setError(new Error('No authentication token found.'));
                        setLoading(false); // ✅ stop loading if no token
                        return;
                  }

                  try {
                        const response = await api.get('/api/admin/administrators/', {
                              headers: {
                                    Authorization: `Bearer ${token}`,
                              },
                        });
                        setData(response.data);
                  } catch (err) {
                        console.error("User API error:", err.response || err);
                        setError(err);
                  } finally {
                        setLoading(false); // ✅ always stop loading
                  }
            };

            fetchUser();
      }, []);

      return { data, error, loading };
};
