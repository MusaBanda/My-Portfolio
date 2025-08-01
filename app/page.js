'use client';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import Balls from "./components/Balls";



export default function Home() {


  return (
    <>
    <div style={{ marginTop: '-1rem', marginLeft: '-0.5rem',}}>
    <Navbar />
    </div>
    <Header />
    <div style={{ height: '50vh', width: '100vw', position: 'relative', overflow: 'hidden', marginTop: '-30vh' }}>
    <Balls />
    </div>
    <Services />
    <Footer />
    </>
  );
}

