import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from "@/assets/assets";
import { roboto, ovo } from "../layout";
import Services from './Services';

const Header = () => {

// show for large and small screen
  const [showForLargeScreen, setShowForLargeScreen] = useState(true);
  const [showForSmallScreen, setShowForSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setShowForLargeScreen(isLarge);
      setShowForSmallScreen(!isLarge);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

// State variables to handle button click effects
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
    <div className='flex flex-col items-center justify-center h-screen max-w-md mx-auto'
      style={{marginBottom: '10rem' }} >
      <div>
        <Image
          src={assets.mypic} width={160} height={160} alt=''className='rounded-full'
          style={{ marginBottom: '-2rem', marginTop: '9rem',}}
        />
      </div>

      <h3 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}
        style={{ marginBottom: '-1rem' }}>
        Hi I am Musa Dick Banda <Image src={assets.hand_icon} width={50} height={50} />
      </h3>

      <h1 
        className={`sm:text-[18px] md:text-[20px] lg:text-[30px] block text-center ${ovo.className}`}
         style={{ marginLeft: '0rem', }}>
        Front end web developer based South Africa
      </h1>

      <p
        className={`sm:text-[18px] md:text-[20px] lg:text-[30px]  block text-center ${ovo.className}`}
        style={{ marginTop: '-1rem', marginLeft: '1rem', marginRight:'1rem' }}
      >
        I'm a beginner front-end web developer, just starting out on my journey. I may not have experience yet,
        but I'm learning every day and excited to grow.
      </p>

     { showForLargeScreen && <div className='flex flex-col-2 items-center'>
        <a href="https://wa.me/27694163922" className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline text-bold 
         ${roboto.className}`} onClick={handleContactClick}aria-label="Contact Us"
          style={{
            padding: '0.8rem',
            cursor: 'pointer',
            marginRight: '1rem',
            border: '4px solid #000',
            borderRadius: '4rem',
            backgroundColor: isContactClicked ? 'orange' : 'black',
            
            transition: 'all 0.3s ease',
            background: '#000',
            color: 'white',
          }}>
          WHATSAPP ME
          <Image src={assets.phone_icon} width={15} height={15} 
            style={{
              marginLeft: '1rem',
              marginTop: '-1rem',
              marginBottom: '-0.1rem',
            }}/></a>

        <a href="/cv.pdf" download className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline
          ${roboto.className}`} onClick={handleResumeClick}aria-label="Download My Resume"
          style={{
            padding: '0.86rem',
            border: '4px solid #000',
            marginBottom: '1rem',
            borderRadius: '4rem',
            marginTop: '1rem',
            cursor: 'pointer',
            backgroundColor: isResumeClicked ? 'orange' : 'transparent',
            color: isResumeClicked ? '#fff' : '#000',
            transition: 'all 0.3s ease',
          }}
        >
          MY RESUME
          <Image src={assets.download_icon}  width={12.5} height={10} 
            style={{
              marginLeft: '1rem',
              marginTop: '0rem',
              marginBottom: '-0rem',
            }}/></a>
      </div>}


      {showForSmallScreen &&<div className='grid drid-col-1 items-center'>

        <a href="https://wa.me/27694163922" className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline text-bold 
         ${roboto.className}`} onClick={handleContactClick}aria-label="Contact Us"
          style={{ padding: '0.8rem',
           
            cursor: 'pointer',
            marginTop: '1rem',
            border: '4px solid #000',
            borderRadius: '4rem',
            backgroundColor: isContactClicked ? 'orange' : 'black',          
            transition: 'all 0.1s ease',
            background: '#000',
            color: 'white',
          }}>
          WHATSAPP ME
          <Image src={assets.phone_icon} width={15} height={15} 
            style={{
              marginLeft: '1rem',
              marginTop: '-1rem',
              marginBottom: '-0.1rem',
            }}/></a>

        <a href="/cv.pdf" download className={`sm:text-[18px] md:text-[20px] lg:text-[30px] no-underline
          ${roboto.className}`} onClick={handleResumeClick}aria-label="Download My Resume"
          style={{
            padding: '0.86rem',
            border: '4px solid #000',
            marginBottom: '1rem',
            borderRadius: '4rem',
            marginTop: '1rem',
            cursor: 'pointer',
            backgroundColor: isResumeClicked ? 'orange' : 'transparent',
            color: isResumeClicked ? '#fff' : '#000',
            transition: 'all 0.3s ease',
          }}
        >
          MY RESUME
          <Image src={assets.download_icon}  width={12.5} height={10} 
            style={{
              marginLeft: '1rem',
              marginTop: '0rem',
              marginBottom: '-0rem',
            }}/></a></div>}
    </div>
  );
};

export default Header;

