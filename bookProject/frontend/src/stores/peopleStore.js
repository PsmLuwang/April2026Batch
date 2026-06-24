import { create } from 'zustand';
import { axiosInstance } from '../utils/axios';


export const useUsersStore = create((set, get) => ({
  users: [],
  user: null,
  isLoading: false,
  error: null,

  getUsers: async (page, limit) => {
    try {
      set({ isLoading: true, error: null })

      const response = await axiosInstance.get(`/v1/public/randomusers?page=${page}&limit=${limit}`);
  
      set({ users: [...get().users, ...response.data.data.data] });
      
    } catch (error) {
      set({ error: error.message || "Error fetching Data" })
    } finally {
      set({ isLoading: false })
    }
  },
  
}))