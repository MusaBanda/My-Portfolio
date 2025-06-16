"use client";
import Img from 'next/image';
import React from "react";
import { ovo } from "../layout";
import Footer from '../components/Footer';
import assets from '@/assets/assets';
import next from "next";

const Work = () => {
  
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
      
    </div>
      <Footer />
  </div>
  );
};

export default Work;
