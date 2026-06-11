import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      
      <Header headerText="Online React Class" />

      <section>
        <div className='p-2 border border-gray-300 max-w-80'> 
          <img 
            className=''
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjAasJS3uicXhIQacdJC1JJh_-qChXyXWtA&s" 
            alt="" 
          />
          <h1>Product Name</h1>
          <p>₹999.99</p>
        </div>
      </section>
    </div>
  )
}

export default HomePage