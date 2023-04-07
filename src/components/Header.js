import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
         <div className="flex justify-evenly py-9 ">
         <div className="flex gap-10">
            {/* <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/'}>Home</Link> */}
            <p className='font-bold text-2xl '>Tax<span className='font-bold text-blue-600'>pal</span></p>
            <div className='mt-2 flex gap-10'>

            <Link className="cursor-pointer text-gray-500 hover:text-black" to={'/testimonials'}>Testimonials</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/pricing'}>Pricing</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/faq'}>FAQ's</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/contact-form'}>Contact Us</Link>
            </div>
        </div>

        <div>
            
            <button
                className="cursor-pointer text-white bg-blue-600  hover:bg-blue-400 font-medium  px-4 py-1 rounded-2xl shadow-lg animate-bounce">Get
                Started Today</button>
        </div>
    </div>

      
    </header>
  )
}

export default Header
