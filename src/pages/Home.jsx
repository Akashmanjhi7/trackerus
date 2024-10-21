import React from 'react'
import { Link } from 'react-router-dom'
import Partner from '../components/Partner'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <section className='w-full h-screen relative overflow-hidden'>
          <video
            className='absolute top-0 left-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            
          </video>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative z-10 flex flex-col leading-[1.1] items-center justify-center h-full text-white'>
            <h1 className=' text-[4vw] font-bold'>Reliable <span className='text-text'>GPS</span>  Tracking </h1>
                <h1 className='text-white text-[4vw] font-bold'>and <span className='text-text'>CCTV</span>  Solutions.</h1>

                <div className='text-[1.3vw] w-2/5 mx-auto  pt-4'>
                <p className='text-center'> 
                Protect yournassets with advanced tracking and surveillance
                technology tailored for every vehicle.
                </p>
                </div>

                <Link to="/solutions" className='bg-text text-white px-8 py-4 mt-8 flex items-center justify-center
                 rounded-full text-[1.3vw]'>
                    Discover
                </Link>
          </div>
        </section>
        <Partner />
    </div>
  )
}

export default Home
