import React from 'react'
import NavBar from '../components/NavBar'
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isLoading, error, signup } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    
    const result = await signup(formData);
    
    if (result) {
      navigate("/signup/verification");
    }
  }

  return (
    <div>
      <NavBar />
      
      <form onSubmit={handleSubmit}>
        {error && <p className='text-red-500 p-5'>{error}</p>}

        <input 
          id='name'
          name='name'
          type="text" 
          placeholder='Name'
          required
          className='p-3 border border-gray-300'
        />

        <input 
          id='email'
          name='email'
          type="email" 
          placeholder='Email'
          required
          className='p-3 border border-gray-300'
        />

        <input 
          id='password'
          name='password'
          type="password" 
          placeholder='Password'
          required
          className='p-3 border border-gray-300'
        />

        <button 
          disabled={isLoading}
          type='submit'
          className='bg-blue-400 p-3'
        >
          {isLoading ? "Loading..." : "Create account"}
        </button>
      </form>

    </div>
  )
}

export default SignupPage