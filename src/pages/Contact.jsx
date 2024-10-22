import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      
        

      {/* form section  start*/}
      <div className="flex justify-center items-center w-full min-h-screen pt-20">

        <div className="container mx-auto my-4 px-4 lg:px-20">

          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send us a <br /> <span className='text-text'>message</span></h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" name='First_Name' required placeholder="First Name*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" name='Last_Name' required placeholder="Last Name*" />

              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" name='Email' required placeholder="Email*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" name='Phone' required placeholder="Phone*" />
            </div>
            <div className="my-4">
              <textarea placeholder="Message*" name='Message' required className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-text text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>

          <div
            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-text rounded-2xl">
            <div className="flex flex-col ">
              {/* <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1> */}
              <p className="">Contact Tracker US for all your GPS tracking and CCTV solution needs. Our expert team is ready to provide prompt and professional assistance for any inquiries or support requests.</p>
              

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="">C-000, Gali No-00, Area, City, State-Pincode</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col lg:w-full ">
                  <h2 className="text-2xl">Contact</h2>
                  <p className="">
                    <a href="https://wa.me/919625033736" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Tel: +91 9625033736
                    </a>
                  </p>
                  <p className="">
                    <a href="mailto:trackerustechnology@gmail.com" className="hover:underline">
                      trackerustechnology@gmail.com
                    </a>
                  </p>

                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2 gap-2">
             


              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">

      </div>
    </>
  )
}

export default Contact
