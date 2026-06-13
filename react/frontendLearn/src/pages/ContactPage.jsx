import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const ContactPage = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("test");
    
  }, [count1, count3])

  return (
    <div>
      <NavBar />

      <Header headerText="UseState & UseEffect" />
      

      <section className='grid grid-cols-3'>

        <div>
          <h1 className='text-center p-5 font-semibold text-3xl'>
            {count1}
          </h1>

          <button onClick={() => setCount1(count1+1)} className='bg-blue-400 p-2 block mx-auto text-white text-sm'>
            Add one
          </button>
        </div>

        <div>
          <h1 className='text-center p-5 font-semibold text-3xl'>
            {count2}
          </h1>

          <button onClick={() => setCount2(count2+1)} className='bg-blue-400 p-2 block mx-auto text-white text-sm'>
            Add one
          </button>
        </div>

        <div>
          <h1 className='text-center p-5 font-semibold text-3xl'>
            {count3}
          </h1>

          <button onClick={() => setCount3(count3+1)} className='bg-blue-400 p-2 block mx-auto text-white text-sm'>
            Add one
          </button>
        </div>


      </section>

    </div>
  )
}

export default ContactPage