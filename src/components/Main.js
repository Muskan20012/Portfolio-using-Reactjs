import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Main()   {
  return (
    <>
<Header/>
    <div class="text-center py-40">
        <p class="text-7xl font-semibold">Accounting <span class="text-blue-600 fade-in">made simple</span><br/> for small
            businesses.</p>
        <p class="mt-5 text-xl text-gray-600">Most bookkeeping software is accurate, but hard to use. We make the <br/>
            opposite trade-off, and hope you don’t get audited.</p>
        <button
            class="cursor-pointer text-white bg-black hover:bg-gray-700 font-medium  px-4 py-1 rounded-2xl mt-9 mr-4 ">Get
            6 months free</button>
        <button
            class="cursor-pointer text-black bg-slate-50 border-slate-400 border-2 hover:bg-gray-100 font-medium  px-4 py-1 rounded-2xl ">Watch
            Video</button>
    </div>
    <div class="text-center mb-10">
        <p class="font-serif text-lg mb-5">Trusted by these companies so far</p>
        <ul class=" lg:flex justify-center gap-12 text-xl font-medium">
            <li>Transistor</li>
            <li>Tuple</li>
            <li>StaticKit</li>
            <li>Mirage</li>
            <li>Laravel</li>
            <li>statamic</li>
        </ul>
    </div>
    <div class="bg-gradient-to-r from-blue-700  via-purple-700 to-blue-400 h-96 text-center py-28">
        <p class="text-white text-4xl font-medium">Get started today</p>
        <p class="mt-12 text-white text-xl">It’s time to take control of your books. Buy our software so you <br/> can
            feel like you’re doing something productive.</p>
        <button
            class="cursor-pointer text-black bg-white hover:bg-gray-200 font-medium  px-4 py-1 rounded-2xl mt-9 w-44">Get
            6 months free</button>
    </div>
 
    
  <Footer/>
    </>
  )
}
export default Main
