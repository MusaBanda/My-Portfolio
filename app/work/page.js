"use client";
import Img from 'next/image';
import React from "react";
import { ovo } from "../layout";
import Footer from '../components/Footer';
import assets from '@/assets/assets';
import { hooks } from '../hooks/hooks';
import Beams from './Beams';

const Work = () => {
  const { smallscreen, loading } = hooks();

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          filter: 'brightness(0.5)',
        }}
      >
        <Beams
          beamWidth={4}
          beamHeight={22}
          beamNumber={12}
          lightColor="#ffffff"
          speed={5}
          noiseIntensity={0.5}
          scale={0.15}
          rotation={40}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }} className="min-h-screen flex flex-col">
        <a href="/" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Img src={assets.back} alt="Back" width={50} height={50} />
        </a>

        <div>
          <h1 className={`font-bold ${ovo.className}`} style={{ marginLeft: '2rem', fontSize: smallscreen ? '18px' : '30px' }}>
            My Portfolio
          </h1>

          <h2 className={`text-center font-bold ${ovo.className}`} style={{ marginTop: '3rem', fontSize: smallscreen ? '18px' : '30px' }}>
            My work
          </h2>

          <p className={`text-center ${ovo.className}`} style={{ margin: '0 1rem 0 2rem', fontSize: smallscreen ? '16px' : '20px' }}>
            This is my very first portfolio and project. It marks the beginning of my journey in front-end development...
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: smallscreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height: "16rem", width: '13rem' }}>
            <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0' }}>
              <img src="/work/mywork (1).png" alt='My Work' style={{ width: '100%', height: '100px' }} />
            </div>
            <div style={{ width: '100%', maxWidth: '200px' }}>
              <p className={`text-center ${ovo.className}`}>Simple website using HTML and CSS</p>
            </div>
          </div>

          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height: "19rem" }}>
            <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0' }}>
              <img src="/work/mywork (2).png" alt='My Work' style={{ width: '100%', maxWidth: '200px' }} />
            </div>
            <div style={{ width: '100%', maxWidth: '250px' }}>
              <p className={`text-center ${ovo.className}`}>Login page using HTML,CSS and php mySQL</p>
            </div>
          </div>

          <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '1rem', height: "16rem", width: '13rem' }}>
            <div style={{ border: '1px solid #ccc', margin: '2rem', padding: '0' }}>
              <img src="/work/mywork (3).png" alt='My Work' style={{ width: '100%', height: '100px' }} />
            </div>
            <div style={{ width: '100%', maxWidth: '200px' }}>
              <p className={`text-center ${ovo.className}`}>Calculator with HTML, CSS & JS</p>
            </div>
          </div>
        </div>

        <div className='text-center mt-10 mb-10'>
          <h1>
            These are some of my mini projects I completed for the FNB App Academy.
            <a target='_blank' href="https://github.com/MusaBanda?tab=repositories"> Click here</a> to see more.
          </h1>
          <div>
            <video style={{ height: '50vh', width: '100%', marginBottom: '3vh' }} autoPlay muted loop playsInline>
              <source src='/work.mp4' type='video/mp4' />
            </video>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Work;
