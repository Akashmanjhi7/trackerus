import React from 'react'
import Marquee from 'react-fast-marquee'

const Client = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full py-20 '>
      <h1 className='text-[4vw] font-bold mb-12'>Our <span className='text-text'>Clients</span></h1>

      <Marquee gradient={true} gradientColor='#fff' speed={100}>
        {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
          <img src={`/clients/client.svg`} alt="partner" className=' h-10 mx-10 mt-20' />
        ))}
      </Marquee>
    </div>
  )
}

export default Client
