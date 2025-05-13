import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from "@/assets/assets";
import { roboto, ovo } from "../layout";


const Header = () => {
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);

  const handleContactClick = () => {
    setIsContactClicked(true);
    setTimeout(() => setIsContactClicked(false), 300); 
  };

  const handleResumeClick = () => {
    setIsResumeClicked(true);
    setTimeout(() => setIsResumeClicked(false), 300); 
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen text-center gap-4 px-5 lg:px-8 xl:px-[8%] bg-gradient-to-b from-[#f9f9f9] to-[#fff]'>
      <div>
        <Image src={assets.mypic} width={400} height={400} alt='' className='rounded-full w-32'
          style={{ marginLeft: '24rem', marginRight: '27rem', marginBottom: '-2rem', marginTop: '9rem' }} />
      </div>
      
      <h3 className={`text-[30px] font-bold ${ovo.className}`}>Hi I am Musa Dick Banda <Image src={assets.hand_icon}/></h3>
      <h1 className={`text-[60px] font-bold ${ovo.className}`}>Front end web developer based South Africa</h1>
      <p className={`text-[30px] font-bold ${ovo.className}`}>
I'm a beginner front-end web developer, just starting out on my journey. I may not have experience yet, but I'm learning every 
day and excited to grow.
      </p>

      <div className='flex flex-col items-center'>
        <a 
          href="#contact" 
          className={`text-[30px] no-underline text-bold ${roboto.className}`}
          onClick={handleContactClick}
          aria-label="Contact Us"
          style={{
            padding: '1.5rem',
            color: isContactClicked ? '#fff' : '#000', 
            cursor: 'pointer',
            border: '4px solid #000',
            borderRadius: '4rem',
            backgroundColor: isContactClicked ? 'orange' : 'transparent',
            transition: 'all 0.3s ease', 
          }}
        >
          CONTACT US
          <Image src={assets.phone_icon} width={60} height={60} 
            style={{
              marginLeft: '1rem', marginTop: '-1rem', marginBottom: '-1rem'
            }} 
          />
        </a>

        <a 
          href="/cv.pdf" 
          download 
          className={`text-[33px] no-underline ${roboto.className}`}
          onClick={handleResumeClick}
          aria-label="Download My Resume"
          style={{
            padding: '1.5rem',
            color: isResumeClicked ? '#fff' : '#000', 
            border: '4px solid #000',
            borderRadius: '4rem',
            marginTop: '1rem', cursor: 'pointer',
            backgroundColor: isResumeClicked ? 'orange' : 'transparent',
            transition: 'all 0.3s ease',
          }}
        >
          MY RESUME
          <Image 
            src={assets.download_icon} 
            width={50} height={50}
            style={{
              marginLeft: '1rem', marginTop: '-1rem', marginBottom: '-1rem',
            }} 
          />
        </a>
      </div>
    </div>
  );
};

export default Header;

