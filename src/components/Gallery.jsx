import { motion } from 'framer-motion'
import React from 'react'
import imageData from '../utils/imagedata.json'
const Gallery = () => {
    
  return (
    <div className='min-h-screen w-full  pt-20 pb-20'>
        <div className='flex flex-col items-center justify-center  mb-20 max-w-[80vw] mx-auto '>
            <h1 className='text-[4vw] font-bold'> Our <span className='text-text'>Gallery</span></h1>
            <p className='text-[1.5vw] text-center'>Explore our innovative vehicle GPS tracking and CCTV camera solutions.</p>
        </div>

        <div className="wrapper max-w-screen-xl bg-back ">

      <motion.div 
          initial={{ 
            y: 50, 
            opacity:0
          }}
          whileInView={{ 
            y: 0,
            opacity:1
          }}
          transition={{ duration: 0.5 }}
      className="gallery">
        {imageData.map((item) => (
          <div key={item.id} className={`gallery__item gallery__item--${item.id}`}>
            <a href="#" className="gallery__link">
              <img src={item.src} alt={item.alt} className="gallery__image" />
              <div className="gallery__overlay">
                <span>{item.caption}</span>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  )
}

export default Gallery
