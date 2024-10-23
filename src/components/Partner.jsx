import React from 'react'

const Partner = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="max-w-screen-xl mx-auto min-h-screen sm:pt-20 pt-10 ">
        <div className="w-full flex flex-col sm:flex-row sm:items-start items-center  sm:justify-between sm:gap-10 gap-5">
          <div className="text sm:text-[4vw] text-[5vh] leading-[1.2]  sm:w-1/2  font-bold">
            <h1>
              Your Trusted <span className="text-text">GPS</span>
            </h1>
            <h1>Tracking Partner</h1>
          </div>
          <div className="para sm:text-[1.3vw] text-[2vh] sm:w-1/2 w-4/5 sm:pt-5 ">
            <p>
              At Trackerus, we specialize in providing advanced vehicle CPS
              tracking and CCTV camera solutions to enhance security and
              efficiency for your business.
            </p>

            <div className='count flex items-center  justify-between sm:gap-36 sm:pt-8 pt-4'>
                <h1 className='flex flex-col gap items-start leading-none sm:gap-2 '> <span className='text-text sm:text-[4vw] text-[4vh]  font-bold'>150+</span> <span>Proven Solutions</span></h1>

                <h1 className='flex flex-col items-start leading-none sm:gap-2 '> <span className='text-text sm:text-[4vw] text-[4vh]  font-bold'>15</span> <span>Trusted By Businesses</span></h1>

            </div>


          </div>
        </div>
            <div className='w-full h-[70vh] mt-10 px-2 sm:px-0   rounded-xl overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-full h-full object-cover '/>
            </div>
      </section>
    </div>
  );
}

export default Partner
