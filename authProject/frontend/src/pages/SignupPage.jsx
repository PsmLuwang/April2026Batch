import React from 'react'
import NavBar from '../components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '../stores/authStore'

const SignupPage = () => {
  const { error, isLoading, signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    await signup(formData);
    toast.success("OTP Sent");
    navigate("/signup/verification")
  }


  return (
    <>
      <NavBar />

      <form onSubmit={handleSubmit} className='p-5 max-w-md mx-auto mt-20'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 shado">
          <legend className="fieldset-legend text-lg font-bold">Signup</legend>

          <label className="label">Name</label>
          <input 
            id='name'
            name='name'
            required
            type="text" 
            className="input w-full" 
            placeholder="Username" 
          />
          <label className="label">Email</label>
          <input 
            id='email'
            name='email'
            required
            type="email" 
            className="input w-full" 
            placeholder="Email" 
          />

          <label className="label">Password</label>
          <input 
            id='password'
            name='password'
            required
            type="password" 
            className="input w-full" 
            placeholder="Password" 
            minLength={8}
          />

          {error && <p className='text-red-500 font-medium'>{error}</p>}

          <button 
            className="btn btn-neutral bg-black text-white mt-4"
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='animate-spin' /> : "Signup"}
          </button>

          <p className='text-center mt-2'>Already have an account? <Link to={"/login"} className='underline text-blue-600'>Login here</Link></p>
        </fieldset>
      </form>

    </>
  )
}

export default SignupPage