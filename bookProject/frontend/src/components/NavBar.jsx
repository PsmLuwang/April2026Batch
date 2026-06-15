import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-green-700 px-5 h-16 text-white flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Online Books</h1>

      <div className='flex items-center gap-4 text-sm font-semibold'>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    </nav>
  )
}

export default NavBar