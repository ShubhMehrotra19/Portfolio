import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Section1 = () => {
  return (
    <section className="mx-auto w-full mx-w-8xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-6xl font-bold md:text-5xl">
          <span className="text-slate-400"> How can I be </span>
          an asset to your team?
        </h2>
        <NavLink to='https://github.com/ShubhMehrotra19'
                 target='_blank' rel='noopener noreferrer' 
        >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 pl-4 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex justify-center items-center"
        >
          Github <img className="scale-50" src="/images/icons/github.png" alt="" />
        </motion.button>
        </NavLink>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-amber-400 to-orange-400 shadow-xl">
          <CardTitle><div className="flex justify-center items-center gap-2">I can design my websites <img className="h-12 w-12" src="/images/Shubh_AvatarSmiling.png" alt="" /></div></CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
           <NavLink to='https://shubh-mehrotra-ashen.vercel.app/'
                    target="_blank"
                    rel="noopener noreferrer"
           >
            <img src="/images/projects/figma.png" alt="" />
           </NavLink>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-green-400 to-emerald-400 shadow-xl">
          <CardTitle><div className="flex gap-2 justify-center items-center">I can develop them into reality <img className="h-12 w-12" src="/images/Shubh_AvatarSmug.png" alt="" /></div></CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <NavLink to='https://chefio.vercel.app/'
                     target='_blank'
                     rel="noopener noreferrer"
                     >
                      <img src="/images/projects/chefio.png" alt="" />
                     </NavLink>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8 bg-gradient-to-br from-pink-400 to-red-400 shadow-xl">
          <CardTitle><div className="flex gap-2 justify-center items-center">I document my GitHub Readme <img className="h-12 w-12" src="/images/Shubh_AvatarAlmostAngry.png" alt="" /></div></CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
           <NavLink to='https://github.com/ShubhMehrotra19/chefio'
                    target='_blank' rel='noopener noreferrer'
           >
           <img src="/images/projects/github.png" alt="" />
           </NavLink>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4 bg-gradient-to-br from-violet-400 to-indigo-400 shadow-xl">
          <CardTitle><div className="flex gap-2 justify-center items-center">I make them production based!<img className="h-12 w-12" src="/images/Shubh_AvatarDeepThinking.png" alt="" /></div></CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
           <img src="/images/projects/Projects.png" alt="" />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};