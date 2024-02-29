import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-w-8xl mx-auto">
      <div>
        <span className="block mb-4 text-sm md:text-md text-indigo-500 font-medium">
          Hey There👋🏽
        </span>
        <h3 className="text-4xl md:text-7xl font-semibold">
          I'm Shubh Mehrotra!
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        🚀 I engineer a perfect blend 🥂 of mischief 🤪 and dedication 🧐, because why not strike a harmonious chord between shenanigans and seriousness?
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 hover:scale-105 active:scale-90">
          Let's Connect
      </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: "/images/MyImages/CodexWinning.png",
    },
    {
      id: 2,
      src: "/images/MyImages/Animax_Winning.png",
    },
    {
      id: 3,
      src: "/images/MyImages/MerakiWinning.png",
    },
    {
      id: 4,
      src: "/images/MyImages/Roorkee.png",
    },
    {
      id: 5,
      src: "/images/MyImages/Shubhpic.png",
    },
    {
      id: 6,
      src: "/images/MyImages/Roorkee_night.png",
    },
    {
      id: 7,
      src: "/images/MyImages/Animax_Winning2.png",
    },
    {
      id: 8,
      src: "/images/MyImages/MerakiWinning2.png",
    },
    {
      id: 9,
      src: "/images/MyImages/gfgEvent.png",
    },
    {
      id: 10,
      src: "/images/MyImages/Friends.png",
    },
    {
      id: 11,
      src: "/images/MyImages/Kurta.png",
    },
    {
      id: 12,
      src: "/images/MyImages/Sem1.png",
    },
    {
      id: 13,
      src: "/images/MyImages/Falcons1.png",
    },
    {
      id: 14,
      src: "/images/MyImages/gfgEvent1.png",
    },
    {
      id: 15,
      src: "/images/MyImages/Advitya_23.png",
    },
    {
      id: 16,
      src: "/images/MyImages/GDSC.png",
    },
  ]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
