import { create } from 'zustand';

export const useBooksStore = create(set => ({
  books: [],
  book: null,
  isLoading: false,
  error: null,

  getBooks: async () => {
    try {
      set({ isLoading: true, error: null })

      const response = await fetch(`https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`);
      const data = await response.json(); // data.data.data
  
      set({ books: data.data.data });
      
    } catch (error) {
      set({ error: error.message || "Error fetching Data" })
    } finally {
      set({ isLoading: false })
    }
  }

  
  
}))