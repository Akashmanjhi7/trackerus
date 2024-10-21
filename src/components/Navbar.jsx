import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-zinc-100 w-full fixed top-0 left-0 right-0 z-50'>
       
            <div className="flex flex-wrap items-center justify-between mx-auto p-4  w-full max-w-screen-xl bg-transparent  ">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-text">TRACKER US</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {[
                            { to: "/", text: "Home", current: true },
                            { to: "/about", text: "About" },
                            { to: "/services", text: "Services" },
                            { to: "/solutions", text: "Solutions" },
                            { to: "/contact", text: "Contact" }
                        ].map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) => `block py-2 px-3 rounded md:p-0 relative group ${isActive ? 'text-text' : ''} hover:text-text`}
                                    to={item.to} 
                                >
                                    {item.text}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-text transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        
    </nav>
  )
}

export default Navbar
