'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import assets, { infoList, toolsData } from '@/assets/assets';
import { ovo } from "../layout";
import Footer from '../components/Footer';

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredToolIndex, setHoveredToolIndex] = useState(null);

  const [columns, setColumns] = useState(1);
  
    useEffect(() => {
      const handleResize = () => {
        setColumns(window.innerWidth >= 1024 ? 3 : 1);
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); 
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (

  <div style={{ position: 'relative', zIndex: 0, minHeight: '100vh' }}>

  {/* Background Video */}
      <video autoPlay muted loop playsInline
       style={{position: 'fixed',  top: 0,  left: 0, width: '100vw',  height: '100vh',
       objectFit: 'cover', zIndex: -1,filter: 'brightness(0.5)', }}>
        <source src="/my_vid.mp4" type="video/mp4" />
      </video>

    <div id="it" className={`px-5 py-10 min-h-screen flex flex-col items-center justify-center text-center ${ovo.className}`}>
      <div className="mb-10">
        <h4 className="sm:text-[18px] md:text-[20px] lg:text-[30px] text-[white]">Introduction</h4>
        <h2 className="sm:text-[18px] md:text-[20px] lg:text-[30px] text-[white]">About Me</h2>
      </div>

      <div className="w-64 sm:w-80 mb-10">
            <Image
             src={assets.about_pic} alt="" className="rounded-3xl" width={350} height={400}
             style={{borderRadius: '1.5rem',}}/>
        </div>

      <p className="sm:text-[18px] md:text-[25px] lg:text-[40px] max-w-4xl text-justify mb-10"
      style={{marginRight:'2rem', marginLeft:'2rem', color: 'white'}}>
        I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React.
        I create clean, responsive websites, focusing on both function and design. I enjoy building interactive
        digital experiences that people love using.
      </p>

      <ul className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-10" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "1rem",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          background: 'see-through',
          color: 'white',
        }}>
        {infoList.map(({ icon, title, description }, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex-shrink-0 cursor-pointer"
              style={{
                minWidth: '250px',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '2rem',
                backgroundColor: isHovered ? '#ebf8ff' : 'see-through',
                boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                transition: 'all 0.3s ease',
                
               
              }}
            >
              <div className="flex flex-col items-center" >
                <Image src={icon} alt={title} width={30} className="mb-2" />
                <h3 className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-700">{title}</h3>
                <p className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-600">{description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <h3 className="sm:text-[18px] md:text-[20px] lg:text-[30px] mb-6 text-[white]">Tools I Use</h3>

      <ul className="flex items-center justify-center flex-wrap gap-6 mb-16">
        {toolsData.map((tool, index) => {
          const isHovered = hoveredToolIndex === index;
          return (
            <li
              key={index}
              onMouseEnter={() => setHoveredToolIndex(index)}
              onMouseLeave={() => setHoveredToolIndex(null)}
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer"
              style={{
                padding: '1rem',
                border: '5px solid #ccc',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              <Image src={tool} alt="tool" width={30} />
            </li>
          );
        })}
      </ul>

      
    </div>
    <Footer />
  </div>
  );
};

export default About;
