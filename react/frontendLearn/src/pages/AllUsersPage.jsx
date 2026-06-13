import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard';

const AllUsersPage = () => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10`);
        const data = await response.json();
  
        setUsers(data.data.data);
  
      } catch (error) {
        
      }
    }

    getUsers();
  }, [])
  

  return (
    <div>
      <NavBar />


      <section className='flex justify-center flex-wrap gap-3 p-5'>
        {users.map(user => <ProfileCard key={user.id} user={user} />)}
      </section>
    </div>
  )
}

export default AllUsersPage