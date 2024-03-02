import React, { useRef } from 'react';
import { GoogleGeminiEffectDemo } from './GoogleGeminiEffectDemo';
import { TrackingBeamDemo } from './TrackingBeamDemo';
import { MacbookScrollDemo } from './MacbookScrollDemo';

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

  return (
    <section className='bg-slate-950'>
      <GoogleGeminiEffectDemo />
      <TrackingBeamDemo />
      <div className='text-center md:text-5xl text-2xl text-white font-bold px-16'>
        Do you know, I Sing too 🤭 ?
      </div>
      <div className='justify-center items-start -mt-56 md:block hidden'>
      <MacbookScrollDemo />
      </div>
      <div
        className='flex justify-center items-center mx-auto'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video className=' pb-10' ref={videoRef} src='/video/singing.mp4'></video>
      </div>
    </section>
  );
}

export default About;
