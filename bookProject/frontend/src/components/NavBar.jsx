import { Menu } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <nav className='bg-green-700 px-5 h-16 text-white flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Online Books</h1>

      <div className='max-sm:hidden flex items-center gap-4 text-sm font-semibold'>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </div>


      {/* Mobile View */}
      {/* aside Toggle btn */}
      <button className='sm:hidden' onClick={() => setIsAsideOpen(!isAsideOpen)}>
        <Menu />
      </button>

      {/* aside */}
      <aside className={`${isAsideOpen ? "translate-x-0" : "translate-x-full"} sm:hidden transition-all duration-500 fixed top-16 right-0 h-[calc(100%-64px)] w-80 bg-red-500/50`}>

      </aside>

    </nav>
  )
}

export default NavBar