import React from 'react'

const Header = ({ headerText }) => {
  return (
    <header className='bg-gray-100 min-h-60 grid place-content-center'>
      <h1 className='text-4xl font-semibold'>
        {headerText}
      </h1>
    </header>
  )
}

export default Header