import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import HooksPage from './pages/HooksPage'

const App = () => {
  return (
    <section className='text-gray-800'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/productsDetails/:productId' element={<ProductDetailsPage />} />
        <Route path='/hooks' element={<HooksPage />} />
      </Routes>

    </section>
  )
}

export default App