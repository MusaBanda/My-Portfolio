import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";  
import assets from "@/assets/assets";
import { ovo, roboto } from "../layout";
import { hooks } from "../hooks/hooks";
import { useTheme } from "next-themes";


const Services = () => {
  
const { hoveredToolIndex, setHoveredToolIndex, columns, setColumns } = hooks();
const { theme } = useTheme();
const isLight = theme === 'light';
const textcolor = isLight ? 'black' : 'white';


  return (
    <div id="services" className="text-center mb-10 scroll-smooth" style={{ maxWidth: '100%' }}>
      <h4 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] font-bold ${ovo.className}`}>What I offer</h4>
      <h2 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}>My Services</h2>

      <div style={{display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`,gap: "1rem",
          marginTop: "2.5rem",marginBottom: "2.5rem",}}>

        {serviceData.map(({ icon, title, description, link }, index) => {
          const isHovered = hoveredToolIndex === index;
          return (
            <a href={link} className="no-underline" target="_blank"> 
            <div key={index} onMouseEnter={() => setHoveredToolIndex(index)} onMouseLeave={() => setHoveredToolIndex(null)}
               style={{minWidth: "1px", padding: "3rem", border: "1px solid #ccc", 
                borderRadius: "1rem", marginLeft: "1rem", marginRight: "1rem",
                marginBottom: "2rem", flexShrink: 0, cursor: "pointer",
                backgroundColor: isHovered ? "green" : "transparent",
                boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
                transform: isHovered ? "translateY(-5px)" : "none",
                color: textcolor, transition: "all 0.3s ease", 
 }}>
                <Image src={icon} alt="icon" width={20} height={20} />
                <h3 className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${roboto.className}`}>{title}</h3>
                <p className={`sm:text-[18px] md:text-[20px] lg:text-[30px] ${ovo.className}`}>{description}</p>
                <h4 className={`items-center gap-2 sm:text-[18px] md:text-[20px] lg:text-[30px] mt-5 underline
                text-[#E75480] ${roboto.className}`}
                > read more <Image src={assets.right_arrow} alt="arrow_icon" width={13} height={13} /></h4>
            </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
