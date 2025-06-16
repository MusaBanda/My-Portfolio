"use client";
import Img from 'next/image';
import React from "react";
import { ovo } from "../layout";
import Footer from '../components/Footer';
import assets from '@/assets/assets';
import { hooks } from '../hooks/hooks';
import next from "next";

const Work = () => {
  
     const { smallscreen } = hooks();

  return (
  <div >
    <div className="min-h-screen flex flex-col">
      <a href="/" style={{ position: 'absolute', top: '1rem', right: '1rem' }}><Img src={assets.back} alt="Back" width={50} height={50} /></a>
      <div>
        <h1 className={`sm:text[18px] md:text[18px] lg:text-[30px] font-bold ${ovo.className}`}
         style={{ marginLeft: '2rem' }}>
          My Portfolio
        </h1>
      
        <h2 className={`sm:text[18px] md:text[18px] lg:text-[30px] text-center font-bold ${ovo.className}`}
         style={{ marginTop: '3rem' }}>My work</h2>
        <p className={`sm:text[18px] md:text[18px] lg:text-[30px] text-center ${ovo.className}`}
        style={{ marginRight: '1rem', marginLeft: '2rem' }}>
          This is my very first portfolio and project. It marks the beginning of my journey in front-end 
          development, where I’m learning to create responsive and user-friendly interfaces. I’m passionate
          about improving my skills, eager to learn, and excited to take on new challenges and opportunities 
          in the world of web development.
        </p>
      </div>
      <div className={ smallscreen ? "" : "flex flex-col-3 items-center justify-center"}>

        <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height:"16rem"}}>
          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0rem' }}>
            <img src="/work/mywork (1).png" alt='My Work' style={{ width: '100%', maxWidth: '200px' }} />
          </div>
          <div style={{ width: '100%', maxWidth: '200px' }}>
            <p className={ovo.className}>This is a mini project where I created a simple website using HTML and CSS</p>
          </div>
        </div>

         <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height:"19rem" }}>
          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0rem' }}>
            <img src="/work/mywork (2).png" alt='My Work' style={{ width: '100%', maxWidth: '300px' }} />
          </div>
          <div  style={{ width: '100%', maxWidth: '200px' }}>
            <p className={ovo.className}>This is a mini project where I created a login page using HTML and CSS</p>
          </div>
        </div>

         <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height:"16rem"}}>
          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0rem' }}>
            <img src="/work/mywork (3).png" alt='My Work' style={{ width: '100%', maxWidth: '200px' }} />
          </div>
          <div  style={{ width: '100%', maxWidth: '200px' }}>
            <p className={ovo.className}>This is a mini project where I created a calculator using HTML, CSS, and JavaScript</p>
          </div>
        </div>

      </div>

      <div className='text-center mt-10 mb-10'>
        <h1>These are some of my mini projects I completed for the FNB App Academy. To see more of my work, 
          <a target='_blank' href="https://github.com/MusaBanda?tab=repositories"> click here.</a></h1>
      </div>
      
    </div>
      <Footer />
  </div>
  );
};

export default Work;
