import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      
      <section className='p-5 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4'>
        {Array(10).fill("_").map(_ => (
          <ProductCard />
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage