import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
       <div class="text-center py-10">

            <Link to={'*'} className='font-bold text-2xl'>Tax<span className='font-bold text-blue-600'>pal</span></Link>
        
        <div class="py-7 space-x-16">
            <a href="/faq" class="cursor-pointer text-gray-500 hover:text-black  ">FAQ's</a>
            <a href="/testimonials" class="cursor-pointer text-gray-500 hover:text-black">Testimonials</a>
            <a href="/pricing" class="cursor-pointer text-gray-500 hover:text-black ">Pricing</a>
        </div>

        <hr class="mx-32 mb-10"/>

        <div class=" flex justify-evenly gap-x-11">
            <p class="ml-10">Copyright © 2022 TaxPal. All rights reserved.</p>
        </div>
    </div>

    </div>
  )
}

export default Footer
