import React, { useState, useEffect } from 'react';
import ShuffleHero from '../Hero/ShuffleHero';
import { Section1 } from '../Section1/Section1';
import TechStack from '../TechStack/TechStack';
import './MainPage.css';
import { HeroParallaxDemo } from '../ui/HeroParallaxDemo';
import Section2 from '../Section2/Section2';
import Footer from '../Section2/Footer';
import Navbar from '../Navbar/Navbar';

const MainPage = () => {
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      const scrolled = window.scrollY;

      if (scrolled > scrollThreshold) {
        setShouldChangeBackground(true);
      } else {
        setShouldChangeBackground(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setShouldChangeBackground(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShouldChangeBackground(false);
    }, 300);
  };

  return (
    <div>
      <Navbar />
      <div className='w-full mx-auto flex flex-col justify-center items-center gap-5'>
        <ShuffleHero />
        <Section1 />
        <div
          className="main-page"
          style={{
            backgroundColor: shouldChangeBackground ? 'black' : 'transparent',
            transition: 'background-color .75s ease-in-out',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TechStack />
        <div className='md:block hidden'><HeroParallaxDemo /></div>
        </div>
        <div className=' w-screen bg-slate-100'>
          <Section2 />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
