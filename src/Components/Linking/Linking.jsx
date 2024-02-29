import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Linktab from './Linktab';

const linkname = ['LinkedIn', 'Github', 'Figma', 'Twitter', 'Leetcode'];

function Linking() {
    const [text] = useTypewriter({
        words: ['Shubh Mehrotra!', 'a Developer🌍', 'a Designer✏️', 'awesome!😎'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100,
    });

    return (
        <div className='relative'>
            <div className='absolute z-20'>
                <img className='h-screen w-screen -z-10 object-cover'
                    src="https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
                <div className='h-screen w-screen absolute top-0 left-0' style={{
                    backdropFilter: 'blur(4px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(4px) saturate(200%)',
                    backgroundColor: 'rgba(17, 25, 40, 0.5)'
                }}></div>
            </div>
            <div className='flex items-center h-screen w-screen max-w-7xl absolute top-0 left-0 z-30'>
                    <div className='w-1/2 flex justify-center items-center'>
                    <img className='z-30 rounded-full h-96 w-96 mb-3' src="/images/MyImages/Shubhpic.png" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/2'>
                    <p className='text-white text-[32px] font-medium text-center mb-8 font-["Poppins"]'>
                        Hey There!👋🏽
                        <span className='text-indigo-500 font-semibold'> I am {text} </span>
                        <span style={{ color: '#4F46E5' }}><Cursor /></span>
                    </p>
                    <div className='flex flex-col px-5 gap-3 w-full'>
                        {linkname.map((link, index) => (
                            <Linktab key={index} linkName={link} />
                        ))}
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Linking;
