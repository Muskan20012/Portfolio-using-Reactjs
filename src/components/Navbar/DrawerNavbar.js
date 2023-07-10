import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";


const DrawerNavbar = ({ isOpen, onClose }) => {
    const handleClose =()=>{
        onClose();
    };
  return (
    <div className={`drawer-navbar ${isOpen ? 'open' : ''}`}>
      <div className="drawer-navbar-inner mt-16">
        {/* Navlinks inside the drawer */}
        <ul className="drawer-navlinks flex flex-col gap-5">
        <Link className="cursor-pointer text-gray-500 hover:text-black" to={'/testimonials'}>Testimonials</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/pricing'}>Pricing</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/faq'}>FAQ's</Link>
            <Link className="cursor-pointer text-gray-500 hover:text-black " to={'/contact-form'}>Contact Us</Link>
            
                <i className="cursor-pointer text-blue-600 text-3xl hover:text-black absolute top-0 right-0 m-4 " onClick={handleClose}><MdClose/></i>
            
          {/* Add more navlinks as needed */}
        </ul>
        
    
        
      </div>
    </div>
  );
};

export default DrawerNavbar;
