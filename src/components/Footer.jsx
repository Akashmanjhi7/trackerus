import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-head">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* <img src="/path/to/your/logo.svg" className="h-8 me-3" alt="Company Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">TRACKERUS</span>
            </Link>

            <p className='w-2/5 text-[0.8vw]'>Protect yournassets with advanced tracking and surveillance technology tailored for every vehicle.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold  uppercase">Resources</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link to="/services" className="hover:text-text">Services</Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-text">Solutions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold  uppercase">Follow us</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:text-text">Instagram</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-text">Facebook</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold  uppercase">Legal</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:text-text">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-text">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm  sm:text-center">© 2023 <Link to="/" className="hover:text-text font-bold">TRACKERUS™</Link>. All Rights Reserved.
          </span>
         </div>
      </div>
    </footer>
  )
}

export default Footer
