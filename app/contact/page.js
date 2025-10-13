'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { hooks } from '../hooks/hooks';

const Contact = () => {
  const [selected, setSelected] = useState("option1");
  const { smallscreen , onSubmit, result } = hooks();




  return (
    <div className='flex flex-col items-center '>
      
      <div className={`${smallscreen ? '' : 'border-l-2 border-r-2 border-black w-[50vw] flex flex-col '}`}>
        <h1 className='text-[3vh] font-bold mb-[30] text-center'>CONTACT ME</h1>
        <div className={`mt-[60] flex flex-col ${smallscreen ? '' : 'ml-[50]'}`}>
          <label className='text-[2vh]  mb-[30]'><b>Full Name</b></label>
          <input  id="fullName" 
            type="text" name='fullName'  required onSubmit={onSubmit}
            placeholder="Write your full name"
            className="ml-[25] w-[40vw] bg-transparent border-0 border-b placeholder:text-[2.5vh] active:outline-none focus:outline-none"
          />
          <p className='text-gray-800'>Must contain only letters and spaces</p>
        </div>

        <p className={`${smallscreen ? '' : 'ml-[25] '}`}><b>Pick your favorite way to hear from us:</b></p>

        <div className="flex flex-col items-center p-6 space-y-6">
          {/* Buttons */}
          <div className={` gap-[4] ${smallscreen ? 'flex flex-col-2' : 'flex flex-row'}`}>
            <button
              onClick={() => setSelected("option1")}
              className={`w-[30%] h-[15vh] bg-transparent rounded-[10%] cursor-pointer
                ${selected === "option1"}`}
            >
              Email Message
            </button>

            <button
              onClick={() => setSelected("option2")}
              className={`w-[30%] h-[15vh] bg-transparent rounded-[10%] cursor-pointer
                ${selected === "option2"}`}
            >
              Phone Call
            </button>

            <button
              onClick={() => setSelected("option3")}
              className={`w-[30%] h-[15vh] bg-transparent rounded-[10%] cursor-pointer
                ${selected === "option3"}`}
            >
              Whatsapp Message
            </button>
          </div>

          {/* Conditional Forms */}
          <div className="w-[90%] ">
            {selected === "option1" && (
              <form onSubmit={onSubmit}  className="flex flex-col gap-[4] mt-[20] border-none">
                <label className='text-[2vh] mb-[30] bold-xl'><b>Email Address</b></label>
                <input
                  type="text" name='email'
                  placeholder="Example@email.com" required
                  className='ml-[30] bg-transparent  placeholder:text-[2.4vh] active:outline-none focus:outline-none
                  border-0 border-b-[1px]'
                />

                <label  className='mt-[30] text-[2vh] mb-[30] bold-xl'><b>Reason for Contact</b></label>
                <select required  name='reason' className='ml-[30] bg-transparent border-none active:outline-none focus:outline-none'>
                  <option value="" disabled selected>Select a reason</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>

                <label className='mt-[30] text-[2vh] mb-[30] bold-xl'><b>Your Message</b></label>
                <textarea
                  placeholder="Your message" name='message'  required
                  className='ml-[30] bg-transparent border-0 border-b-[1px]  placeholder:text-[3vh] active:outline-none focus:outline-none'
                />

                <button
                  type="submit"
                  className='mt-[30] mb-[30] h-[40px] bg-[blue] text-[white] cursor-pointer'
                  
                >
                  Submit
                </button>
                <p className='text-[20px] mt-[-10] '>{result}</p>
              </form>
            )}

            {selected === "option2" &&
              <form onSubmit={onSubmit}  className="flex flex-col gap-[4] mt-[20] border-none">
                <label className='text-[2vh] mb-[30] bold-xl'><b>Phone Number</b></label>
                <input
                  type="text" name='phone'
                  placeholder="+27-456-7890"  required
                  className='ml-[30] bg-transparent border-0 border-b  placeholder:text-[2.4vh] active:outline-none focus:outline-none '
                />

                <label className='mt-[30] text-[2vh] mb-[30] bold-xl'><b>Reason for Contact</b></label>
                <select name='reason'  required className='ml-[30] bg-transparent border-none active:outline-none focus:outline-none'>
                  <option value="" disabled selected>Select a reason</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>

                <label className='mt-[30] text-[2vh] mb-[30] bold-xl'><b>Your Message</b></label>
                <textarea
                  placeholder="Your message" name='message'  required
                  className='ml-[30] bg-transparent border-0 border-b  placeholder:text-[3vh] active:outline-none focus:outline-none '
                />

                <button
                  type="submit"
                  className='mt-[30] mb-[30] h-[40px] bg-[blue] text-[white] cursor-pointer'
                  
                >
                  Submit
                </button>
                <p className='text-[20px] mt-[-10] '>{result}</p>
              </form>  }
            {selected === "option3" && 
            <div className="flex justify-center mt-[30] mb-[30]">
              <a target="_blank" rel="noopener noreferrer"
                href="https://wa.me/27694163922?text=Hi%20Musa%2C%20I%20just%20came%20across%20your%20portfolio%20and%20I'm%20really%20impressed!%20I'd%20love%20to%20learn%20more%20about%20your%20work.%20Let's%20connect!"
                className="bg-[green] text-[black] p-[10px] rounded-[5px] h-[40px] flex items-center justify-center underline-none cursor-pointer">
                  Click here to go to WhatsApp</a>
            </div>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;


