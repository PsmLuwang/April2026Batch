import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const users = [
  {
    name: "Salam Priyansu",
    phone: 1234567899,
    email: "salampriyansu@gmail.com"
  },
  {
    name: "John Doe",
    phone: 9876543210,
    email: "johndoe@gmail.com"
  },
  {
    name: "Jane Smith",
    phone: 5555555555,
    email: "janesmith@gmail.com"
  }
]


const RegistrationPage = () => {
  return (
    <div>
      <NavBar />
      
      <Header headerText="Register Now" />


      <section className='space-y-4 p-5'>
        {users.map((user, index) => (
          <div key={index} className='border border-gray-300 p-4'>
            <h1>{user.name}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
      </section>

    </div>
  )
}

export default RegistrationPage