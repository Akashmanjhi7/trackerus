import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <> 
      <Navbar />
      <div className='bg-white'>
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
