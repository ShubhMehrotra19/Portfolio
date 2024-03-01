import React from 'react';

function Section2({ value }) {

    return (
        <section className='flex flex-col items-center justify-center min-h-screen'>
            <section className="h-auto bg-transparent">
                <div className="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">You scrolled to the bottom!🤭</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Find my socials below👇🏽</p>
                    <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">Let me extend my thanks to you for scrolling down to here! I hope you loved my projects! If so, slide into my DM to talk about them 😉</p>
                </div>
            </section>
        </section>
    );
}

export default Section2;
