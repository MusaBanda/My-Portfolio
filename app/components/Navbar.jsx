import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, userState } from 'react';

const Navbar = () => {

    const [isScroll, setIsScroll] = React.useState(false);

    const sideMenuRref = useRef();
    const openMenu = () => {
        sideMenuRref.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRref.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    },[])


    return (
        <>
            <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[80%]'>
                <Image src={assets.header_bg_color} alt='' fill className='object-cover brightness-[130%]' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  
                ${isScroll ? "bg-[#ffe6e6] bg-opacity-50 backgrop-blur-lg shadow-sm" : ""} `}>    
                <a href='#top'>-
                    <Image src={assets.logo_white} width={800} height={300} alt='cursor-pointer mr-14' />
                </a>
                <ul className='absolute top-4 left-1/2 transform -translate-x-1/2 
                flex gap-6 list-none bg-white px-12 py-3 rounded-full 
                shadow-sm bg-opacity-80 border-2 border-gray-400' 
                style={{ padding: '1rem', marginLeft:'5rem',  marginRight: '1rem', marginTop:'0rem', marginBottom:'0rem'}} >
                <li><a className='font-Ovo text-[40px] no-underline' style={{ padding: '1rem',color: '#FF5733',}}  href='#top'>Home</a></li>
                <li><a className='font-Ovo text-[40px] no-underline' style={{ padding: '1rem',color: '#FF5733',}}  href='about'>About Me</a></li>
                <li><a className='font-Ovo text-[40px] no-underline' style={{ padding: '1rem',color: '#FF5733',}}  href='#services'>Services</a></li>
                <li><a className='font-Ovo text-[40px] no-underline' style={{ padding: '1rem',color: '#FF5733',}}  href='work'>My Work</a></li>
                <li><a className='font-Ovo text-[40px] no-underline' style={{ padding: '1rem',color: '#FF5733',}}  href='contact'>Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>

                   <Image src={assets.moon_icon} alt='moon_icon' width={80} height={80} 
                    className='cursor-pointer mr-14'
                    style={{ marginLeft:'5rem',  marginRight: '1rem',}}  />

                    <a href='#contact' className='border border-gray-400 rounded-full text-[30px] no-underline'  
                style={{
                padding: '2rem', color: '#FF5733',
                border: '2px solid #ccc', borderRadius: '2rem',
                marginLeft: '1rem', marginRight: '1rem',
                }} 
                >CONTACT<Image src={assets.arrow_icon}
                    alt='' width={30} height={30} style={{ marginLeft:'2rem',  marginTop: '0rem',}}/> </a>

                    <a href='' className='hidden block md:hidden ml-3' onClick={openMenu}><Image src={assets.menu_black} 
                    alt='' width={80} height={80} /></a>
                </div>
                {/* -- ----- Mobile Menu ------ -- */}
                <ul ref={sideMenuRref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-60 top-0 w-64 z-50 h-screen bg-rose-50
                transition duration-500'>
                    <div className='absolute top-5 right-5' onClick={openMenu}>
                        <Image src={assets.close_black} alt='' className='w-4 cursor-pointer'/>
                    </div>
                    <li><a className='font-Ovo'onClick={openMenu} href='#top'>Home</a></li>
                    <li><a className='font-Ovo'onClick={openMenu} href='about'>About Me</a></li>
                    <li><a className='font-Ovo'onClick={openMenu} href='#services'>Services</a></li>
                    <li><a className='font-Ovo'onClick={openMenu} href='work'>My Work</a></li>
                    <li><a className='font-Ovo'onClick={openMenu} href='contact'>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
