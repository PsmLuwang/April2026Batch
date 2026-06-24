import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { LoaderCircle } from 'lucide-react';
import { useUsersStore } from '../stores/peopleStore';

const PeoplePage = () => {
  const { isLoading, error, users, getUsers } = useUsersStore();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    getUsers(page, limit);
  }, [page])


  // infinite scroll // update page
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    
      if (scrollTop + clientHeight >= scrollHeight - 50 && !isLoading) {
        setPage(prev => prev + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })

  }, [isLoading])


  return (
    <div>
      <NavBar />

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


    </div>
  )
}

export default PeoplePage


