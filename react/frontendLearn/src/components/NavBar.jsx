import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-gray-400 flex justify-between items-center px-5 h-14'>
      <h1 className='font-semibold text-xl'>React</h1>
      
      <div className='flex items-center gap-5'>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/registration'}>Registration</Link>
        <Link to={'/profile'} className='bg-blue-400 text-white font-bold  w-10 h-10  rounded-full  flex items-center justify-center'>
          M
        </Link>
        
      </div>
    </nav>
  )
}

export default NavBar