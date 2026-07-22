import { MoveLeft } from 'lucide-react';
import React from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const SignupVerificationPage = () => {
  const { error, isLoading, signupVerification } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      // email: e.target.email.value,
      otp: e.target.otp.value
    }

    await signupVerification(formData);
    toast.success("Account created");
    navigate("/login");
  }

  return (
    <section>
      <div className='flex p-5'>
        <Link to={"/signup"} className='flex gap-2 items-center'><MoveLeft /> Back to Signup</Link>
      </div>
     
      <form onSubmit={handleSubmit} className='max-w-md p-5 mx-auto mt-20'>
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend text-lg font-bold">Verification code</legend>
          <p className="text-sm">We have sent a verification code to your email address. Please enter it below.</p>
          
          <label htmlFor="otp" className="label mt-3">
            6 digit OTP
          </label>
          <input 
            type="text" 
            id="otp"
            name="otp"
            className="input w-full" 
            placeholder="6 digit OTP" 
            pattern="\d{6}"
            maxLength="6"
            onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)}}
          />
          <p className="label">Verify your secret code</p>

          {error && <p className='text-red-500 font-medium'>{error}</p>}
          <button 
            className="btn btn-neutral bg-black text-white mt-4"
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='animate-spin' /> : "Verify OTP"}
          </button>
        </fieldset>
      </form>
    </section>
  )
}

export default SignupVerificationPage