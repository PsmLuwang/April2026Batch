import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { Truck, ChartNoAxesColumn, Tags } from 'lucide-react'

import Footer from '../components/Footer'

const services = [
  {
    id: 1,
    name: "Online Booking",
    description: "You can easily book your favorite books online with our user-friendly platform. Browse through our extensive collection, select the books you want, and complete your purchase in just a few clicks. Enjoy the convenience of shopping from the comfort of your home.",
    icon: ChartNoAxesColumn
  },
  {
    id: 2,
    name: "Fast Delivery",
    description: "We provide fast and reliable delivery services to get your books to you quickly and safely. Our efficient logistics network ensures that your orders are processed and shipped in a timely manner.",
    icon: Truck
  },
  {
    id: 3,
    name: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions or concerns you may have. We are committed to providing you with the best possible service and ensuring your satisfaction.",
    icon: Tags
  }
]


const HomePage = () => {
  return (
    <div>
      <NavBar />
      
      <header className='px-5 py-32 flex justify-around'>
        <div className='max-w-xl'>
          <h1 className='text-6xl font-bold'>A room <span className='text-green-700'>without</span> books is like a body <span className='text-green-700'>without</span> a soul.</h1>
          <p className='text-sm text-gray-600 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere, earum eum rem magni inventore nisi adipisci explicabo laboriosam pariatur sequi doloremque harum error perspiciatis. Maiores commodi modi voluptates dolorem.</p>
          <Link to={"/products"} className='bg-green-700 text-white px-10 py-2 text-center'>Explore</Link>
        </div>

        <div></div>
        {/* <img src="" alt="" /> */}
      
      </header>

      <section className='bg-gray-100 px-5 py-20 flex justify-center items-center gap-5'>
        <img 
          className='h-100'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg/960px-Theodor_Seuss_Geisel_%2801037v%29.jpg" 
          alt="" 
        />

        <div className='max-w-xl mb-10'>
          <h1 className='text-4xl'>The more that you read, the more things you will know. The more that you learn, the more places you'll go.</h1>
          <p className='italic mt-5'>_ Dr. Seuss</p>
        </div>
      </section>

      <section className='px-5 py-32 space-y-10'>
        <h1 className='text-3xl text-green-700 font-semibold text-center'>Our Services</h1>
        
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>
          {services.map(service => (
            <div key={service.id} className='border border-gray-300 p-5 space-y-3'>
              <div className='flex gap-4'>
                <div className='bg-green-700 h-10 w-10 grid place-content-center text-white/90'>
                  <service.icon />
                </div>

                <h1 className='font-semibold'>{service.name}</h1>
              </div>

              <p className='text-sm text-justify text-gray-600'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default HomePage