import { create } from 'zustand';
import axios from 'axios';
import { axiosInstance } from '../utils/axios';


export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  signup: async (signupData) => {
    try {
      set({ isLoading: true, error: null })

      const response = await axios.post(
        `https://free-api-six.vercel.app/api/auth/signup`, 
        signupData
      );
  
      set({ user: response.data.user });
      
      return response.data.success;
    } catch (error) {
      set({ error: error.message || "Error Signup" })
      
    } finally {
      set({ isLoading: false })
    }
  },


  verification: async (otp) => {
    try {
      set({ isLoading: true, error: null })

      const response = await axios.post(
        `////`, 
        { email: get().user.email, otp: otp}
      );
  
      set({ user: response.data.user });
      
      return response.data.success;
    } catch (error) {
      set({ error: error.message || "Error Signup" })
      
    } finally {
      set({ isLoading: false })
    }
  },
  
}))
