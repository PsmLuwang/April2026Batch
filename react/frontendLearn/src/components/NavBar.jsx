import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-gray-400 flex justify-between items-center px-5 h-14'>
      <h1 className='font-semibold text-xl'>React</h1>
      
      <div className='flex gap-5'>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/registration'}>Registration</Link>
      </div>
    </nav>
  )
}

export default NavBar