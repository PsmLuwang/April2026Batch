import React from 'react'

const ProfileCard = ({ user }) => {
  return (
    <div className='p-2 border border-gray-300 max-w-80 flex gap-3'> 
      <img 
        className=''
        src={user.picture.large} 
        alt="" 
      />

      <div>
        <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
        <p>@{user.login.username}</p>
      </div>

    </div>
  )
}

export default ProfileCard