import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { useBooksStore } from '../stores/booksStore'
import { LoaderCircle } from 'lucide-react'

const ProductsPage = () => {

  const { books, getBooks, isLoading, error } = useBooksStore();

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div>
      <NavBar />
      
      {error && <p className='text-red-500 text-center p-5'>{error}</p>}

      <section className='p-5 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
        {books.map(book => (
          <ProductCard key={book.id} book={book} />
        ))}
      </section>

      {isLoading && <LoaderCircle size={64} className='animate-spin mx-auto m-5' />}

      <Footer />
    </div>
  )
}

export default ProductsPage