import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { Loader } from 'lucide-react'
import toast from 'react-hot-toast'

const LoginPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    toast.success("Login Successful");
  }


  return (
    <>
      <NavBar />

      <form onSubmit={handleSubmit} className='p-5 max-w-md mx-auto mt-20'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 shado">
          <legend className="fieldset-legend text-lg font-bold">Login</legend>

          <label className="label">Email</label>
          <input 
            id='email'
            name='email'
            required
            type="email" 
            className="input w-full" 
            placeholder="Email" 
          />

          <div className='flex justify-between'>
            <label className="label">Password</label>
            <Link to={"/forgot_password"} className='underline text-blue-600'>Forgot password</Link>
          </div>
          <input 
            id='password'
            name='password'
            required
            type="password" 
            className="input w-full" 
            placeholder="Password" 
            minLength={8}
          />

          {false && <p className='text-red-500 font-medium'>Login error</p>}

          <button 
            className="btn btn-neutral bg-black text-white mt-4"
            type='submit'
            disabled={false}
          >
            {false ? <Loader className='animate-spin' /> : "Login"}
          </button>

          <p className='text-center mt-2'>Don't have an account? <Link to={"/signup"} className='underline text-blue-600'>Signup here</Link></p>
        </fieldset>
      </form>

    </>
  )
}

export default LoginPage