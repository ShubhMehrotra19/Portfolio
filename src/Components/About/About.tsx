import React, { useRef } from 'react';
import { GoogleGeminiEffectDemo } from './GoogleGeminiEffectDemo';
import { TrackingBeamDemo } from './TrackingBeamDemo';
import { MacbookScrollDemo } from './MacbookScrollDemo';
import { SparklesPreview } from './SparklesPreview';
import Navbar1 from '../Navbar/Navbar1';
import Video from './video';

interface Props {}

function About(props: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Function to check if the screen size is larger than or equal to md
  const isMdScreenOrLarger = () => window.innerWidth >= 768;

  return (
    <section className='bg-[#131313]'>
      <Navbar1 />
      <GoogleGeminiEffectDemo />
      <TrackingBeamDemo />
      <div className='text-center md:text-5xl text-2xl text-white font-bold px-16'>
        Here's a small video of me singing 🎧
      </div>
      {/* Conditionally render MacbookScrollDemo based on screen size */}
      {isMdScreenOrLarger() && (
        <div className='justify-center items-start -mt-56 md:block hidden'>
          <MacbookScrollDemo />
        </div>
      )}
      <div
        className='flex justify-center items-center mx-auto'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Conditionally render the video based on screen size */}
        {isMdScreenOrLarger() ? (
          <video className='px-3 md:px-2 pb-10' ref={videoRef} src='https://res.cloudinary.com/dwftb7joy/video/upload/v1709398185/video/hcbkv91ksfml5pipury3.mp4'></video>
        ) : (
          // Render the Video component for smaller screens
          <Video />
        )}
      </div>
      <SparklesPreview />
    </section>
  );
}

export default About;