import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Menu = ({ toggleMenu }) => {
  return (
    <section className="bg-neutral-950 w-full opacity-90 p-4 md:p-8 md:mt-[-60px] pl-10">
      <div className="mx-auto flex flex-col justify-start">
        <NavLinkLink
          heading="Discover"
          subheading="Learn what I do otherwise"
          imgSrc="https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=600"
          to="#"
        />
        <NavLinkLink
          heading="AboutMe"
          subheading="Trust me, I'm cool"
          imgSrc="https://media.istockphoto.com/id/1131841061/photo/woman-has-confused-thinking-question-mark-icon-on-paper-bag-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=LyXVcqdRhWqvgX3yr6iIMahMZQRQrT-OegUgjhTLNcg="
          to="#"
        />
        <NavLinkLink
          heading="Projects"
          subheading="What I can Deliver to you"
          imgSrc="https://images.pexels.com/photos/6963945/pexels-photo-6963945.jpeg?auto=compress&cs=tinysrgb&w=600"
          to="#"
        />
        <NavLinkLink
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=600"
          to="#"
        />
         <NavLinkLink
          heading="Back"
          subheading="Go back to the main page"
          imgSrc="https://images.pexels.com/photos/12605142/pexels-photo-12605142.jpeg?auto=compress&cs=tinysrgb&w=600"
          onClick={toggleMenu}  
        />
      </div>
    </section>
  );
};

const NavLinkLink = ({ heading, imgSrc, subheading, onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href='#'
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      onClick={onClick}
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a NavLinklink for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};