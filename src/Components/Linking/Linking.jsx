import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Linktab from './Linktab';
import './Linking.css';

const linkname = ['LinkedIn', 'Github', 'Figma', 'Twitter', 'Leetcode'];

function Linking() {
    const [text] = useTypewriter({
        words: ['Shubh Mehrotra!', 'a Developer🌍', 'a Designer✏️', 'awesome!😎'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100,
    });

    return (
        <div className='relative h-screen flex items-center justify-center'>
            <div className='absolute z-20'>
                <img
                    className='h-screen w-screen -z-10 object-cover'
                    src="https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
                <div
                    className='h-screen w-screen absolute top-0 left-0'
                    style={{
                        backdropFilter: 'blur(4px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(4px) saturate(200%)',
                        backgroundColor: 'rgba(17, 25, 40, 0.5)',
                    }}
                ></div>
            </div>
            <div className='flex md:flex-row flex-col items-center h-screen w-screen justify-center mx-5 absolute z-30'>
                <div className='flex justify-center items-center w-1/2 mb-4 md:mb-0'>
                    <p className='text-center font-semibold text-white md:text-[36px] text-[28px]'>
                        Who needs a <span className='text-green-700'>Linktree</span>🌲 when you can code one for yourself? 🤷🏽‍♂️
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <p className='text-white md:text-[32px] text-[20px] font-medium text-center md:mb-8 mb-10 font-["Poppins"]'>
                        Hey There!👋🏽
                        <span className='text-indigo-500 font-semibold'> I am {text}</span>
                        <span style={{ color: '#4F46E5' }}>
                            <Cursor />
                        </span>
                    </p>
                    <div className='flex flex-col px-5 gap-3 w-full mx-3'>
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
