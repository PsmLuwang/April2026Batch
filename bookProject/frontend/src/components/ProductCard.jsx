import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ book }) => {
  return (
    <div className='border border-gray-300 p-4 flex gap-4 max-w-3xl'>
      <img 
        className='h-40 w-30 object-cover'
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt="" 
      />

      <div>
        <h1 className='text-xl font-semibold'>{book.volumeInfo.title}</h1>
        <p>{book.volumeInfo.publishedDate}</p>
        
        <h1 className='font-semibold'>Author :</h1>
        {book.volumeInfo.authors.map((author, index) => (
          <h1 key={index} className='italic'>{index+1}. {author}</h1>
        ))}

        <p className='text-sm text-gray-600 mt-3 mb-4 line-clamp-3 text-justify'>
          {book.volumeInfo.description}
        </p>

        <a href={book.volumeInfo.previewLink} className='bg-green-700 block w-20 text-center text-white py-1'>View</a>
      </div>
    </div>
  )
}

export default ProductCard