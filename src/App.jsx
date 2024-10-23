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
import Gps from './pages/products/Gps'
import FuelMonitor from './pages/products/FuelMonitor'
import Cctv from './pages/products/Cctv'
import AssetTracking from './pages/products/AssetTracking'
// import VehicleTracking from './pages/products/VehicleTracking'
import WasteTracking from './pages/products/WasteTracking'
import VehicalTracking from './pages/products/VehicalTracking'

const App = () => {
  useEffect(() => {
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
          <Route path='/services/gps' element={<Gps/>} />
          <Route path='/services/fuel-monitor' element={<FuelMonitor/>} />
          <Route path='/services/cctv' element={<Cctv />} />
          <Route path='/services/asset-tracking' element={<AssetTracking />} />
          <Route path='/services/vehicle-tracking' element={<VehicalTracking />} />
          <Route path='/services/waste-tracking' element={<WasteTracking />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
