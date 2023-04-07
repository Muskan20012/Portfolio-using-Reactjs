import React from "react";


const Footer = () => {
  return (
    <div>
       <div class="text-center py-10">

        <a href="*" class="logo cursor-pointer font-bold text-xl ">Tax<span
                class="text-blue-600 text-xl font-bold">Pal</span></a>
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
