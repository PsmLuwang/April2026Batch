import React from 'react'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className='font-semibold text-gray-700 text-3xl text-center my-5'>HomePage</h1>
      
      <button>Click me</button>
    </div>
  )
}

export default HomePage