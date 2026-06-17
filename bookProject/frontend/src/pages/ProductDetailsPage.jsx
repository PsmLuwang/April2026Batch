import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useBooksStore } from '../stores/booksStore'
import { LoaderCircle } from 'lucide-react'

const ProductDetailsPage = () => {
  const { book, isLoading, error, getBookById } = useBooksStore();
  const { productId } = useParams();

  useEffect(() => {
    getBookById(productId);
    
  }, [])


  return (
    <div>
      <NavBar />

      {book && 
        <div>
          <h1>{book?.id}</h1>
          <h1>{book?.volumeInfo.title}</h1>
        </div>
      }
      
      {error && <p className='text-red-500 text-center p-5'>{error}</p>}
      {isLoading && <LoaderCircle size={64} className='animate-spin mx-auto m-5' />}

      <Footer />
    </div>
  )
}

export default ProductDetailsPage