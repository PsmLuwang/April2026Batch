import React, { useEffect, useRef, useState } from 'react'

const HooksPage = () => {
  const element = useRef(null);

  const clickfun = () => {
    element.current.innerText = "test";
  }

  
  return (
    <div>
      
      <h1 ref={element} className='text-center text-5xl'></h1>

      <button 
        onClick={clickfun}
        className='bg-blue-400 p-3 mx-auto block w-30'
      >
        Add
      </button>
    </div>
  )
}

export default HooksPage