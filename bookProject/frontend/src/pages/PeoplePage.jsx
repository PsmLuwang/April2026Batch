import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { LoaderCircle } from 'lucide-react';

const PeoplePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const handleGetUsers = async () => {
      setIsLoading(true);

      const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`);
      const data = await response.json();
      setUsers(prev => [...prev, ...data.data.data]);

      setIsLoading(false);
    }

    handleGetUsers();
  }, [page])

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("run");
    
  //   return (() => {
  //     console.log("clean up function")
  //   })
  // })

  return (
    <div>
      <NavBar />

      {/* <button onClick={() => setCount(count+1)} className='bg-red-400'>Click</button> */}


      <section className='p-5 grid justify-center gap-3'>

        {/* user card */}
        {
          users.map(user => (
            <div key={user.id} className='w-full max-w-sm p-5 border border-gray-300 flex gap-5 shadow-sm'>
              <img src={user.picture.large} alt="" />

              <div>
                <h1 className='font-semibold'>{user.name.title}. {user.name.first} {user.name.last}</h1>
                <p className='text-sm text-gray-500'>@{user.login.username}</p>
              </div>
            </div>
          ))
        }

      </section>

      {isLoading && <LoaderCircle size={64} className='animate-spin mx-auto m-5' />}

      {/* load more data */}
      <button 
        onClick={() => setPage(page+1)}
        className='bg-blue-400 w-30 py-3 block mx-auto mb-10'
      >
        Load more
      </button>

    </div>
  )
}

export default PeoplePage