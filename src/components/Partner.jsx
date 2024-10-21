import React from 'react'

const Partner = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="max-w-screen-xl mx-auto min-h-screen pt-20 ">
        <div className="w-full flex items-start justify-between gap-10">
          <div className="text text-[4vw] leading-[1.2]  w-1/2 font-bold">
            <h1>
              Your Trusted <span className="text-text">GPS</span>
            </h1>
            <h1>Tracking Partner</h1>
          </div>
          <div className="para text-[1.3vw] w-1/2 pt-5">
            <p>
              At Trackerus, we specialize in providing advanced vehicle CPS
              tracking and CCTV camera solutions to enhance security and
              efficiency for your business.
            </p>

            <div className='count flex items-center justify-start gap-36 pt-8'>
                <h1 className='flex flex-col gap items-start leading-none gap-2 '> <span className='text-text text-[4vw] font-bold'>150+</span> <span>Proven Solutions</span></h1>

                <h1 className='flex flex-col items-start leading-none gap-2 '> <span className='text-text text-[4vw] font-bold'>15</span> <span>Trusted By Businesses</span></h1>

            </div>


          </div>
        </div>
            <div className='w-full h-[70vh] mt-10 bg-text rounded-xl overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-full h-full object-cover '/>
            </div>
      </section>
    </div>
  );
}

export default Partner
