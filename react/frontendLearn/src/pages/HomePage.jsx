import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard';

const HomePage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers/4`);
        const data = await response.json();
  
        setUser(data.data)
  
      } catch (error) {
        
      }
    }

    getUserById();

  }, [])



  return (
    <div>
      <NavBar />
      
      <Header headerText="Online React Class" />


      <section>
        {user && <ProfileCard user={user} />}
        

      </section>
    </div>
  )
}

export default HomePage