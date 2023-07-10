import React from "react";
import { useState,useEffect } from "react";
import Header from "./Header";

import DrawerNavbar from "./DrawerNavbar";
import { MdDehaze } from "react-icons/md";

function NavSelect(){
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    useEffect(() => {
        const checkScreenWidth = () => {
          setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
        };
    
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
    
        return () => {
          window.removeEventListener('resize', checkScreenWidth);
        };
      }
        , []);
        const handleDrawerToggle = () => {
            setIsDrawerOpen(!isDrawerOpen);
          }
    return(
        <>

        {isMobile ? (
            <React.Fragment>
                <div className="flex flex-row justify-between mt-3">
                    <p className='font-bold text-2xl ml-2'>Tax<span className='font-bold text-blue-600'>pal</span></p>
                    <button className="mr-2 text-2xl" onClick={handleDrawerToggle}><MdDehaze/></button>
                </div>
                <DrawerNavbar isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </React.Fragment>
        ) : (
            <Header />
        )}
        <DrawerNavbar isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
        </>
    )
}
export default NavSelect;