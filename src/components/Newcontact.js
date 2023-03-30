import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Newcontact = () => {
    const form = useRef();
    const sendMail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_msvz8zr','template_ft26h6b',form.current,'jWKCmdQ1z_7NwW6Oe').then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div>
       <h2>Contact Page</h2>
      <form className='flex flex-col' ref={form} onClick={sendMail}>
        <label>Name</label>
        <textarea typeof='text' placeholder='Enter Your Name' ></textarea>

        <label>Email</label>
        <textarea typeof='email' placeholder='Enter Your Email' ></textarea>

        <label>Contact</label>
        <input type='number' placeholder='Enter Your Name'></input>
     
     
        <label>Message</label>
        <textarea typeof='text' placeholder='Enter Your Message'></textarea>
     
      </form>
      <button >Submit</button>
    </div>
 
    
  )
}

export default Newcontact
