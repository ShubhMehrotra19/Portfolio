import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import ShuffleHero from '../Hero/ShuffleHero';
import { Section1 } from '../Section1/Section1';
import TechStack from '../TechStack/TechStack';
import { HeroParallaxDemo } from '../ui/HeroParallaxDemo';
import Section2 from '../Section2/Section2';
import Footer from '../Section2/Footer';

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

  // Create refs for each section
  const section1Ref = useRef(null);
  const techStackRef = useRef(null);
  const heroParallaxRef = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
          <TechStack ref={techStackRef} />
          <HeroParallaxDemo ref={heroParallaxRef} />
        </div>
        <div className='w-screen bg-slate-100'>
          <Section2 ref={section2Ref} />
          <Footer />
        </div>
      </div>
      {/* Add navigation links that trigger scrolling */}
      <div className="navigation-links">
        <button onClick={() => scrollToSection(section1Ref)}>Discover</button>
        <button onClick={() => scrollToSection(techStackRef)}>AboutMe</button>
        <button onClick={() => scrollToSection(heroParallaxRef)}>Projects</button>
        <button onClick={() => scrollToSection(section2Ref)}>Fun</button>
        {/* You can add more buttons as needed */}
      </div>
    </div>
  );
};

export default MainPage;
