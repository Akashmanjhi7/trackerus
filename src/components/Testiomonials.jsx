import React from 'react'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    content: "The CCTV installation was seamless, and the quality is outstanding. Great service from Trackerus!",
    author: "Pardeep Rana",
    place: "Delhi",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    content: "Trackerus transformed our fleet management with reliable CPS tracking solutions. Highly recommended!",
    author: "Manish",
    place: "Ghaziabad",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
]

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full  bg-zinc-800 py-16'>
      <h1 className=' text-[4vw] font-bold mb-12'>Customer <span className='text-text'>Reviews</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5 max-w-6xl'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='bg-back p-6 rounded-lg shadow-lg'>
            <p className='text-white text-lg mb-4'>{testimonial.content}</p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img src={testimonial.image} alt={testimonial.author} className='w-12 h-12 rounded-full mr-4' />
                <div>
                  <p className='text-text font-semibold'>{testimonial.author}</p>
                  <p className='text-white text-sm'>{testimonial.place}</p>
                </div>
              </div>
              <div className='flex'>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < testimonial.rating ? 'text-text' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
