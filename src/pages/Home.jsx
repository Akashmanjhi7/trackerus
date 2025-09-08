import React from 'react'
import { Link } from 'react-router-dom'
import Partner from '../components/Partner'
import TrackSolution from '../components/TrackSolution'
import Testimonials from '../components/Testiomonials'
import Client from '../components/Client'
import Gallery from '../components/Gallery'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mb-20'>
        <section className='w-full h-screen relative overflow-hidden'>
          <video
            className='absolute top-0 left-0 w-full h-full object-cover'
            autoPlay
            muted
            key={Date.now()} 
          >
            <source src="/videos/hero1.mp4" type="video/mp4" />
          </video>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative z-10 flex flex-col leading-[1.1] items-center justify-center h-full text-white w-full text-center'>
            <h1 className=' sm:text-[4vw] text-[6vh] text-wrap   font-bold'>Reliable <span className='text-text'>GPS</span>  Tracking </h1>
                <h1 className='text-white sm:text-[4vw] text-[6vh] text-wrap  font-bold'>and <span className='text-text'>CCTV</span>  Solutions.</h1>

                <div className='sm:text-[1.3vw] text-[2vh] sm:w-2/5 w-4/5mx-auto  pt-4'>
                <p className='text-center'> 
                Protect yournassets with advanced tracking and surveillance
                technology tailored for every vehicle.
                </p>
                </div>

                <Link to="/" className='bg-text text-white px-8 py-4 mt-8 flex items-center justify-center
                 rounded-full sm:text-[1.3vw] text-[2.3vh] uppercase'>
              
                  <IoLogoGooglePlaystore />&nbsp;
                    Download App
                </Link>
          </div>
        </section>
        <Partner />
        <TrackSolution /> 
        <Testimonials />
        <Client />
        <Gallery />

    </div>
  )
}

export default Home
