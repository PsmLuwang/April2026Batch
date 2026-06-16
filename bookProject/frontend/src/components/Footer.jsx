import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-200 px-5 py-20'>

      <section className='max-w-4xl mx-auto'>

        <h1 className='text-3xl font-bold'>Online Books</h1>

        <section className='mt-14 grid grid-cols-3 gap-5'>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-semibold text-xl'>Contact Info :</h1>
            <a href="#">Imphal West, Manipur, India</a>
            <a href="#">www.onlinebooks.com</a>
            <a href="#">onlinebooks.support@gmail.com</a>
            <a href="#">+91-7005426431</a>
          </div>


          <div className='flex flex-col space-y-3'>
            <h1 className='font-semibold text-xl'>Quick Links :</h1>
            <a href="#">About Us</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className='flex flex-col space-y-3'>
            <h1 className='font-semibold text-xl'>Follow Us :</h1>

            <div className='flex gap-2'>
              <a href="#" className='text-4xl'>
                <i className="fa-brands fa-square-facebook"></i>
              </a>

              <a href="#" className='text-4xl'>
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className='text-4xl'>
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className='text-4xl'>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

        </section>
      </section>
    </footer>
  )
}

export default Footer