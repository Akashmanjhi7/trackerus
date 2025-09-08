import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/solutions", text: "Solutions" },
    { to: "/contact", text: "Contact" }
  ];

  const renderNavItems = (isMobile = false) => (
    <ul className={`font-medium ${isMobile ? 'text-center' : 'flex space-x-8'}`}>
      {navItems.map((item, index) => (
        <li key={index} className=" md:my-0   ">
          <NavLink
            to={item.to}
            className={({ isActive }) => `${isActive ? 'text-text' : 'text-head'} block py-2   transition-all duration-300 sm:text-[1.1vw] text-[8vh] hover:text-text group relative overflow-hidden`}
            onClick={closeMobileMenu}
          >
            {item.text}
            <span className={`absolute sm:visible invisible  left-0 bottom-0 w-full h-[2px] bg-text transition-all duration-300 ${isMobile ? 'w-0' : 'transform translate-x-[-100%] group-hover:translate-x-0'}`}></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="bg-zinc-100 text-head w-full fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between sm:py-4 px-4 py-2 max-w-screen-xl mx-auto">
          <Link to="/" className="text-[3.6vh] sm:text-[1.5vw] font-bold text-text  ">
          <img src="/logo/logo.png" alt="trackerus" className='sm:h-12 h-8 ' />
          </Link>
          <div className='flex items-center space-x-3 text-white'>
          <button className="sm:hidden px-3 py-1 bg-text rounded-full hover:bg-text/80 transition-colors">
              Login
            </button>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-head"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="#90C444" stroke="#90C444" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="#90C444" stroke="#90C444" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
          </div>
          <div className="hidden  md:block  ">
            {renderNavItems()}
          </div>

          <div className='sm:flex hidden  md:block space-x-4   '>
            <button className=" text-white sm:text-[1.1vw] text-[2vh] sm:px-6 px-3 py-2 bg-text rounded-full hover:bg-text/80 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-[1.3s] ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
        <div className="relative flex flex-col items-center justify-center h-full">
          
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {renderNavItems(true)}
        </div>
      </div>
    </>
  );
};

export default Navbar;
