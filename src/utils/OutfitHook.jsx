import { useEffect, useState } from 'react';
import api from './api';

export const useCreateOutfit = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const createOutfit = async (formData) => {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");
            if (!token) {
                  const authError = new Error("Please login to create an outfit.");
                  setError(authError);
                  setLoading(false);
                  return { success: false, message: authError.message };
            }

            try {

                  const response = await api.post(
                        "/api/ai/analyze-outfit/",
                        formData,
                        {
                              headers: {
                                    Authorization: `Bearer ${token}`,
                                    "Content-Type": "multipart/form-data",

                              },
                        }
                  );


                  return { success: true, data: response.data };

            } catch (err) {
                  const message =
                        err.response?.data?.message || err.message || "Something went wrong";
                  setError(new Error(message));
                  return { success: false, message };

            } finally {
                  setLoading(false);
            }
      };

      return { createOutfit, loading, error };
};



export const useGetOutfits = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [outfits, setOutfits] = useState([]);

      const getOutfits = async () => {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");
            if (!token) {
                  const authError = new Error("Please login to view outfits.");
                  setError(authError);
                  setLoading(false);
                  return { success: false, message: authError.message };
            }

            try {
                  const response = await api.get("/api/ai/outfit-history/", {
                        headers: {
                              Authorization: `Bearer ${token}`,
                        },
                  });

                  setOutfits(response.data || []);
                  return { success: true, data: response.data || [] };

            } catch (err) {
                  const message =
                        err.response?.data?.message || err.message || "Something went wrong";
                  setError(new Error(message));
                  return { success: false, message };

            } finally {
                  setLoading(false);
            }
      };

      useEffect(() => {
            getOutfits();
      }, []);

      return { getOutfits, loading, error, outfits };
};