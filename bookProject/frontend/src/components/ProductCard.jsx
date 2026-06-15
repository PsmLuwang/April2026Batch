import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='border border-gray-300 p-4 flex gap-4 max-w-3xl'>
      <img 
        className='h-40 w-30 object-cover'
        src="http://books.google.com/books/content?id=bLWi6l8BDuIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" 
        alt="" 
      />

      <div>
        <h1 className='text-xl font-semibold'>Ruby On Rails Bible</h1>
        <p>2008-11-10</p>
        <h1 className='italic'>Author - Timothy Fisher</h1>

        <p className='text-sm text-gray-600 mt-3 mb-4 line-clamp-3 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, expedita, facilis labore exercitationem ea ut quia voluptate excepturi quo eligendi dolor rem vitae, explicabo obcaecati dolorem. At expedita voluptatum provident.</p>

        <Link to={"#"} className='bg-green-700 block w-20 text-center text-white py-1'>View</Link>
      </div>
    </div>
  )
}

export default ProductCard