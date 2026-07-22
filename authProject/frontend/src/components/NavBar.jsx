import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-5 h-16 bg-base-100 shadow-sm">

      <Link to={"/"} className='text-2xl font-bold'>Authentication</Link>

      <div className="w-10 rounded-full overflow-hidden">
        <img
          alt="Profile"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
        />
      </div>
      
    </div>
  )
}

export default NavBar