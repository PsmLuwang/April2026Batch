import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

const HooksPage = () => {

  // const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {

  //   if (count == 5) {
  //     navigate("/");
  //   }

  // }, [count])


  const isAuthenticated = false;

  useEffect(() => {

    if (isAuthenticated) {
      navigate("/");
    }

  }, [])

  // login page
  return (
    <div>
      <NavBar />
      test

      {/* <h1 className='text-6xl'>{count}</h1>

      <button onClick={() => setCount(count + 1)} className='bg-blue-400'>Add</button> */}


    </div>
  )
}

export default HooksPage