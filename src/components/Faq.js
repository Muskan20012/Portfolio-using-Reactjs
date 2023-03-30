import React from 'react'

const Faq = () => {
  return (
    <div>
       <div class="px-24 py-20 text-start  " 
        id="faq">
        <p class="text-4xl mb-7 font-semibold">Frequently asked questions</p>
        <p class="text-xl">If you can’t find what you’re looking for, email our support team and if you’re <br/>
            lucky someone will get back to you.
        </p>

        <div class="flex flex-row  mb-11 mt-10 gap-8">
            <div class="flex-1 flex-col ">
                <p class="question">Does TaxPal handle VAT?</p>
                <p class="answer">Well no, but if you move your company offshore you can probably ignore it.</p>
                <p class="question">Can I pay for my subscription via purchase order?</p>
                <p class="answer">Absolutely, we are happy to take your money in all forms.</p>
                <p class="question">How do I apply for a job at TaxPal?</p>
                <p class="answer">We only hire our customers, so subscribe for a minimum of 6 months and then let’s
                    talk.
                </p>
            </div>
            <div class="flex-1 flex-col">

                <p class="question">What was that testimonial about tax fraud all about?</p>
                <p class="answer">TaxPal is just a software application, ultimately your books are your
                    responsibility.
                </p>
                <p class="question">TaxPal sounds horrible but why do I still feel compelled to purchase?
                </p>
                <p class="answer">This is the power of excellent visual design. You just can’t resist it, no matter
                    how
                    poorly it actually functions.</p>
                <p class="question">I found other companies called TaxPal, are you sure you can use this
                    name?
                </p>
                <p class="answer">Honestly not sure at all. We haven’t actually incorporated or anything, we just
                    thought
                    it sounded cool and made this website.</p>
            </div>
            <div class="flex-1 flex-col ">

                <p class="question">How do you generate reports?</p>
                <p class="answer">You just tell us what data you need a report for, and we get our kids to create
                    beautiful charts for you using only the finest crayons.</p>
                <p class="question">Can we expect more inventory features?</p>
                <p class="answer">In life it’s really better to never expect anything at all.</p>
                <p class="question">I lost my password, how do I get into my account?</p>
                <p class="answer">Send us an email and we will send you a copy of our latest password spreadsheet so
                    you
                    can find your information.</p>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Faq
