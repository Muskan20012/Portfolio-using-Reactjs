import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
  <div className="header flex justify-evenly py-9 ">
        <div className="space-x-10">
            <p className="logo cursor-pointer font-bold text-xl">Tax<span
                    className="text-blue-600 text-xl font-bold">Pal</span></p>
            
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/testimonials'}>Testimonials</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/pricing'}>Pricing</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/faq'}>FAQ's</Link>
            
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/contact-form'}>Contact Us</Link>
        </div>

        <div>
            
            <button
                className="cursor-pointer text-white bg-blue-600  hover:bg-blue-400 font-medium  px-4 py-1 rounded-2xl shadow-lg ">Get
                Started Today</button>
        </div>
    </div>

      
    </header>
  )
}

export default Header
