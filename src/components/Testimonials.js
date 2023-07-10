import React from 'react'
import Footer from './Footer'
import Header from './Navbar/Header'
import NavSelect from './Navbar/NavSelect'

const Testimonials = () => {
  return (
    <div>
   <NavSelect/>
      <div class="text-center py-20" id="testimonials">
        <p class="font-medium text-5xl">Loved by businesses worldwide.</p>
        <p class="text-xl mt-10 text-gray-600">Our software is so simple that people can’t help but fall in love with
            it. Simplicity <br/> is easy when you just skip tons of mission-critical features.
        </p>

        <div class="flex flex-wrap justify-around mb-10 mt-10 gap-8 p-2">

            <div class="card">

                <div class="bi">“</div>
                <p class="review">
                    TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government
                    expects
                    me to do.
                </p>
                <hr class="mx-8"/>
                <div class="flex flex-row">
                    <div class="flex flex-col justify-end ml-6 mb-5">
                        <p class="name ">Peter Renolds</p>
                        <p class="designation">Founder of West Inc</p>
                    </div>
                    <img class="userimage" src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Sunset in the mountains"/>
                </div>

            </div>
            <div class="card">

                <div class="bi">“</div>
                <p class="review">
                    TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government
                    expects
                    me to do.
                </p>

                <hr class="mx-8"/>
                <div class="flex flex-row">

                    <div class="flex flex-col justify-end ml-6 mb-5">
                        <p class="name ">Peter Renolds</p>
                        <p class="designation">Founder of West Inc</p>
                    </div>

                    <img class="userimage" src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Sunset in the mountains"/>
                </div>

            </div>
            <div class="card">

                <div class="bi">“</div>
                <p class="review">
                    TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government
                    expects
                    me to do.
                </p>

                <hr class="mx-8"/>
                <div class="flex flex-row">

                    <div class="flex flex-col justify-end ml-6 mb-5">
                        <p class="name ">Peter Renolds</p>
                        <p class="designation">Founder of West Inc</p>
                    </div>

                    <img class="userimage" src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Sunset in the mountains"/>
                </div>

            </div>
            <div class="card">

                <div class="bi">“</div>
                <p class="review">
                    TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government
                    expects
                    me to do.
                </p>

                <hr class="mx-8"/>
                <div class="flex flex-row">

                    <div class="flex flex-col justify-end ml-6 mb-5">
                        <p class="name ">Peter Renolds</p>
                        <p class="designation">Founder of West Inc</p>
                    </div>

                    <img class="userimage" src="https://randomuser.me/api/portraits/men/3.jpg"
                        alt="Sunset in the mountains"/>
                </div>

            </div>

        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Testimonials
