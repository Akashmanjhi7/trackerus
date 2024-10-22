import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Lenis from 'lenis'
const App = () => {
  useEffect(()=>{
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  })
  return (
    <> 
      <Navbar />
      <div className='bg-back text-head'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
