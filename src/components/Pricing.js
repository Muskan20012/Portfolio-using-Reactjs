import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div class="bg-gray-800 text-center py-20 " id="pricing">
        <p class="text-white text-4xl font-medium">
            Simple pricing, for everyone.
        </p>
        <p class="text-slate-500 text-xl mt-5">It doesn't matter what size your business is, our software won't
            work
            well for you.
        </p>

        <div class=" lg:flex flex-row ml-48 mt-10 gap-10 ">
            <div class="pricecard bg-transparent">

                <p class="price">$9</p>
                <p class="desc1">Starter</p>
                <p class="desc2">Good for anyone who is self-employed and just getting started.</p>
                <button
                    class="cursor-pointer w-full text-black bg-white hover:bg-gray-200 font-medium  px-4 py-1 rounded-2xl mt-4 ">Get
                    started </button>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Send 25 quotes and invoices
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Connect up to 2 bank accounts
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Track up to 15 expenses per month
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Manual payroll support
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Export up to 3 reports
                </p>

            </div>

            <div class="pricecard bg-blue-600  scale-110">

                <p class="price">$15</p>
                <p class="desc1">Small business</p>
                <p class="desc2">Perfect for small/medium sized business</p>
                <button
                    class="cursor-pointer w-full text-black bg-white hover:bg-gray-200 font-medium  px-4 py-1 rounded-2xl mt-10 ">Get
                    started</button>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Send 25 quotes and invoices
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Connect up to 5 bank accounts
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Track up to 50 expenses per month
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Automated payroll support
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Export up to 12 reports
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Bulk reconcile transactions
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Track in multiple currencies
                </p>

            </div>

            <div class="pricecard bg-transparent ">

                <p class="price">$39</p>
                <p class="desc1">Enterprise</p>
                <p class="desc2">For even the biggest enterprise companies.</p>
                <button
                    class="cursor-pointer w-full text-black bg-white hover:bg-gray-200 font-medium  px-4 py-1 rounded-2xl mt-10">Get
                    started</button>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Send unlimited quotes and invoices
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Connect up to 15 bank accounts
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Track up to 200 expenses per month
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Automated payroll support
                </p>
                <p class="benefit "><i class="icon fa-regular fa-circle-check"></i>
                    Export up to 25 reports, including TPS
                </p>

            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Pricing
