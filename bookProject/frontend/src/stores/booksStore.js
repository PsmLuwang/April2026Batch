import { create } from 'zustand';
import { axiosInstance } from '../utils/axios';

export const useBooksStore = create(set => ({
  books: [],
  book: null,
  isLoading: false,
  error: null,

  getBooks: async () => {
    try {
      set({ isLoading: true, error: null })

      const response = await axiosInstance.get(`/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`);
  
      set({ books: response.data.data.data });
      
    } catch (error) {
      set({ error: error.message || "Error fetching Data" })
    } finally {
      set({ isLoading: false })
    }
  },

  getBookById: async (productId) => {
    try {
      set({ isLoading: true, error: null })

      const response = await axiosInstance.get(`/v1/public/books/${productId}`);
  
      set({ book: response.data.data });
      
    } catch (error) {
      set({ error: error.message || "Error fetching Data" })
    } finally {
      set({ isLoading: false })
    }
  },



  
  
}))