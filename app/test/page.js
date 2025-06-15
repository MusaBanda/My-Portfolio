'use client';
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import assets, { infoList, toolsData, } from '@/assets/assets';
import Image from 'next/image';
import { hooks } from '../hooks/hooks';
import { ovo } from "../layout";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const slider = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
   const [hoveredToolIndex, setHoveredToolIndex] = useState(null);
  
   const { smallscreen } = hooks();

useEffect(() => {
  const split = new SplitType(".target");
  split.words.forEach((word) => {
    gsap.set(word, { perspective: 2000 });
    gsap.fromTo(
      word.children,
      {
        willChange: "opacity, transform",
        opacity: 0,
        y: (i, _, arr) => -40 * Math.abs(i - arr.length / 2),
        z: () => gsap.utils.random(-1500, -600),
        rotationX: () => gsap.utils.random(-500, -200),
      },
      {
        ease: "power1",
        opacity: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        stagger: { each: 0.06, from: "center" },
        scrollTrigger: {
          trigger: word,
          start: "top bottom",
          end: "top top+=15px",
          scrub: true,
        },
      }
    );
  });

  const images = document.querySelectorAll(".img");
  images.forEach((img, i) => {
    img.style.backgroundImage = `url(/parallax/p${i + 1}.jpg)`;
    img.style.backgroundSize = "cover";
    img.style.backgroundPosition = "center";
    img.style.backgroundRepeat = "no-repeat";
  });

  const totalScrollWidth = images.length * 520;
  const horizontalSection = document.querySelector("#horizontal");

  gsap.to(slider.current, {
    x: () => `-${totalScrollWidth - window.innerWidth}`,
    ease: "none",
    force3D: true,
    scrollTrigger: {
      trigger: horizontalSection,
      start: "top top",
      end: () => `+=${totalScrollWidth}`,
      scrub: 0.3,
      pin: true,
      anticipatePin: 1,
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);

const descriptions = [
  "I attended Khutlo Tharo High School, where I worked hard and excelled academically. I was proud to be the top student in my class and ranked among the top three students in the entire school. One of my biggest achievements was being recognized as a top achiever in Math Literacy, which motivated me to keep pushing myself and aiming high in everything I do.",
  "In my spare time, I also enjoy working on cars. I’ve always been fascinated by how engines and mechanical systems work, so fixing cars has become a hands-on hobby for me. Whether it's doing basic maintenance or solving tricky issues, I find it satisfying to take something that's not working and bring it back to life. It’s a great way to learn, stay productive, and challenge myself.",
  "I’m currently a student at NWU, where I actively participate in events like Miss and Mister Ebukhosini. Being involved in these events allows me to connect with my peers and showcase my talents beyond academics. I’m also proud to be a member of the Arts and Culture community at my residence, where I contribute to creative projects and help promote cultural activities. These experiences have helped me grow both personally and socially during my time at university.",
  "In my spare time, I also love to draw. I’ve been passionate about art for as long as I can remember, and I even studied Visual Arts in high school. It gave me the chance to explore different styles and techniques, and drawing has remained one of my favorite ways to express myself creatively.",
  "My workspace is a reflection of my creativity and focus. I like to keep it clean and organized, with just the essentials around me—my sketchbook, drawing tools, and laptop. Natural light and a calm environment help me stay inspired, whether I’m sketching new ideas or working on a digital project. It’s a space where I feel comfortable and motivated to create.",
];


  return (
<div>
    <div>
    <video autoPlay muted loop playsInline
       style={{position: 'fixed',  top: 0,  left: 0, width: '100vw',  height: '100vh',
       objectFit: 'cover', zIndex: -1,filter: 'brightness(0.5)', }}>
        <source src="/my_vid.mp4" type="video/mp4" />
    </video>
      <div className="min-h-screen flex justify-center items-center">
        <a href="/" style={{ position: 'absolute', top: '1rem', left: '1rem' }}><img src={assets.back} alt="Back" /></a>
        <div className="absolute top-0 w-screen h-screen flex justify-center items-center "
            style={smallscreen ? { marginTop: "-90%" } : {marginTop: "-30%"}} >  
          <p className="flex flex-col items-center text-center gap-[50]" >STEP INSIDE AND GET TO KNOW ME 
          <img style={{alignItems:"center"}} src="/scroll.gif" alt="" height={100}/></p>          
        </div>
        <h2 className={`text-center font-bold leading-none ${ovo.className}`}
          style={{marginTop: "80rem",fontSize: "clamp(2rem, 8vw, 6rem)"}}>
          <span className='target'>Introduction</span>
          <span className='target'>About Me</span>
        </h2>
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8 mb-[100vh] grid grid-col-1"
        style={{ marginTop: "30%" }} >
        <div>
        <p className={`text-center ${ovo.className}`}>
          I'm a front-end web developer from South Africa, skilled in HTML, CSS, JavaScript, and React.
          I create clean, responsive websites, focusing on both function and design. I enjoy building interactive
          digital experiences that people love using.
        </p>
      </div>
       <ul className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-10" 
          style={{display: "grid", gap: "1rem", marginRight: "2.5rem",marginBottom: "-30rem",}}>
          {infoList.map(({ icon, title, description }, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <li key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ minWidth: '250px', padding: '1rem',border: '1px solid #ccc', borderRadius: '2rem',
                      backgroundColor: isHovered ? '#ebf8ff' : 'transparent', transition: 'all 0.3s ease',
                      boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                      transform: isHovered ? 'translateY(-5px)' : 'none',
                      color: isHovered ? 'black':'' }}>
                         
        <div className="flex flex-col items-center">
          <Image src={icon} alt={title} width={30} className="mb-2" />
          <h3 className={` ${ovo.className}`}>{title}</h3>
          <p c className={` ${ovo.className}`}>{description}</p>
        </div></li>  );   })}
        </ul>
      </div>
      
      <div
        id="horizontal"
        className="relative w-full h-screen overflow-hidden bg-white"
        style={{ marginTop: "50%" }}
      >
        <div
          ref={slider}
          style={{ display: "flex",height: "100vh", alignItems: "center", position: "absolute",
           top: 0,left: 0, willChange: "transform",
          }} >
          {[...Array(5)].map((_, i) => (
          <div
              key={i}
              style={{ height: "70vh", width: "clamp(250px, 80vw, 480px)", margin: "0 2rem",
               borderRadius: "12px", overflow: "hidden", backgroundColor: "#fff",
               boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
               position: "relative",flexShrink: 0, 
              }} >
            <div  className="img"
              style={{ width: "100%",height: "100%",position: "absolute",opacity:'50%'}} />
              <p className="flex justify-center text-center font-bold "
                 style={{position: "absolute", color: "black", top:'40%', }} >
                 {descriptions[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <div style={{marginBottom:'20rem'}}> 
       <h3 className="sm:text-[18px] md:text-[20px] lg:text-[30px] text-center"
        style={{marginBottom:'10rem'}}>Tools I Use</h3>
      
              <ul className="flex items-center justify-center grid grid-cols-3">
                {toolsData.map((tool, index) => {
                  const isHovered = hoveredToolIndex === index;
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredToolIndex(index)}
                      onMouseLeave={() => setHoveredToolIndex(null)}
                      className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer"
                      style={{
                        padding: '1rem', border: '5px solid #ccc', transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-5px)' : 'none', marginRight: '2.5rem',
                        boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                    }} >
                      <Image src={tool} alt="tool" width={30} />
                  </li>   );  })}
              </ul>
    </div>
    <Footer/>
</div>
  );
};

export default Test;
