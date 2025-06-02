'use client';
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import assets, { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const slider = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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


  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center">
        <div
          className="absolute top-0 w-screen h-screen flex justify-center items-center"
          style={{ marginTop: "-70%" }}
        >
          SCROLL DOWN FOR THE ANIMATION
        </div>
        <h2
          className="text-center font-bold leading-none"
          style={{
            marginTop: "100%",
            fontSize: "clamp(2rem, 8vw, 6rem)"
          }}
        >
          <span className="target uppercase block">MOSA</span>
          <span className="target uppercase block">BANDA</span>
        </h2>
      </div>

      {/* Info List Section */}
      <div
        className="flex justify-center px-4 sm:px-6 lg:px-8 mb-[100vh]"
        style={{ marginTop: "50%" }}
      >
       <ul
                className="flex gap-6 overflow-x-auto list-none p-0 m-0 mb-10" 
                 style={{display: "grid", gap: "1rem", marginRight: "2.5rem",marginBottom: "2.5rem",}}>
       
                 {infoList.map(({ icon, title, description }, index) => {
                   const isHovered = hoveredIndex === index;
                   return (
                     <li
                       key={index}
                       onMouseEnter={() => setHoveredIndex(index)}
                       onMouseLeave={() => setHoveredIndex(null)}
                       className="flex-shrink-0 cursor-pointer"
                       style={{ minWidth: '250px', padding: '1rem',border: '1px solid #ccc', borderRadius: '2rem',
                         backgroundColor: isHovered ? '#ebf8ff' : 'transparent', transition: 'all 0.3s ease',
                         boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                         transform: isHovered ? 'translateY(-5px)' : 'none',
                     }}>
                         
                     <div className="flex flex-col items-center">
                         <Image src={icon} alt={title} width={30} className="mb-2" />
                         <h3 className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-700">{title}</h3>
                         <p className="sm:text-[11px] md:text-[18px] lg:text-[20px] text-gray-600">{description}</p>
                     </div>
                     </li>  );   })}
               </ul>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        id="horizontal"
        className="relative w-full h-screen overflow-hidden bg-white"
        style={{ marginTop: "50%" }}
      >
        <div
          ref={slider}
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            willChange: "transform",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                height: "70vh",
                width: "clamp(250px, 80vw, 480px)",
                margin: "0 2rem",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                className="img"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
