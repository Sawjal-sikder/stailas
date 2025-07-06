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
                        setLoading(false);
                        return;
                  }

                  try {
                        const response = await api.get('/api/admin/users/', {
                              headers: {
                                    Authorization: `Bearer ${token}`,
                              },
                        });
                        setData(response.data);
                  } catch (err) {
                        console.error("User API error:", err.response || err);
                        setError(err);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchUser();
      }, []);

      return { data, error, loading };
};



export const useAdministrators = () => {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchAdministrators = async () => {
                  const token = localStorage.getItem('token');
                  if (!token) {
                        setError(new Error('No authentication token found.'));
                        setLoading(false);
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
                        setLoading(false);
                  }
            };

            fetchAdministrators();
      }, []);

      return { data, error, loading };
};
// Create Administrators Hook
export const useCreateAdministrator = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const createAdministrator = async (formData) => {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");
            if (!token) {
                  setError(new Error("Please login to create an administrator."));
                  setLoading(false);
                  return;
            }

            try {
                  const response = await api.post(
                        "/api/admin/administrators/create/",
                        formData,
                        {
                              headers: {
                                    Authorization: `Bearer ${token}`,
                                    "Content-Type": "application/json",
                              },
                        }
                  );

                  return response.data;
            } catch (err) {
                  console.error("User API error:", err.response || err);
                  setError(err);
            } finally {
                  setLoading(false);
            }
      };

      return { createAdministrator, loading, error };
};