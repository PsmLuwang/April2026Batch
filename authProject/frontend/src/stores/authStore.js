import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingAuth: false,
  isLoading: false,
  error: null,

  signup: async (formData) => {
    try {
      set({ error: null, isLoading: true });


    } catch (error) {
      set({ error: error?.response?.data?.message || error.message || "Signup Error" })
      throw error;
    } finally {
      set({ isLoading: false })
    }
  },

  signupVerification: async (formData) => {
    try {
      set({ error: null, isLoading: true });


    } catch (error) {
      set({ error: error?.response?.data?.message || error.message || "Signup verification error" })
      throw error;
    } finally {
      set({ isLoading: false })
    }
  },

  login: async (formData) => {
    try {
      set({ error: null, isLoading: true });


    } catch (error) {
      set({ error: error?.response?.data?.message || error.message || "Login Error" })
      throw error;
    } finally {
      set({ isLoading: false })
    }
  },


}));