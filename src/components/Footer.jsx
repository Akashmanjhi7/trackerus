import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* <img src="/path/to/your/logo.svg" className="h-8 me-3" alt="Company Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">TRACKERUS</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase">Resources</h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link to="/resource1" className="hover:text-text">Resource 1</Link>
                </li>
                <li>
                  <Link to="/resource2" className="hover:text-text">Resource 2</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase">Follow us</h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link to="/social1" className="hover:text-text">Social 1</Link>
                </li>
                <li>
                  <Link to="/social2" className="hover:text-text">Social 2</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase">Legal</h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link to="/privacy" className="hover:text-text">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-text">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center">© 2023 <Link to="/" className="hover:text-text font-bold">TRACKERUS™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 bg-red-500">
            <Link to="/facebook" className="text-black hover:text-text">
            <i className="ri-facebook-circle-fill"></i>
              <span className="sr-only">Facebook page</span>
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
