import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="relative w-full bg-transparent mb-16">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
        <img
          className='cursor-pointer h-12 w-12 hover:scale-105 active:rotate-[30deg] active:transition-all active:scale-95 100 ease-in-out'
          src="/images/Shubh_AvatarSmiling.png"
          alt=""
        />

        <div className="hidden lg:block">
          <NavLink to='/connect'>
            <button
              type="button"
              className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 hover:scale-105 active:scale-90"
            >
              Lets Connect
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
