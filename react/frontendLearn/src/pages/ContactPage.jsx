import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const ContactPage = () => {
  const [num, setNum] = useState(10)

  const addOne = () => {
    
    setNum(num+1)
    console.log(num);
  }

  return (
    <div>
      <NavBar />

      <Header headerText="Contact Info" />
      
      <h1>{num}</h1>

      <button onClick={addOne}>Add</button>
    </div>
  )
}

export default ContactPage