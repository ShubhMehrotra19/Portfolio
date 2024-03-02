import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-w-8xl mx-auto mt-16">
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
        <NavLink to='/connect'>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 hover:scale-105 active:scale-90">
          Let's Connect
      </button>
        </NavLink>
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
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709221023/images/fyyjwr6uwuu4b6x7ngtl.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709221071/images/yqd564gvtsqidwcwjqen.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220924/images/cotzc8iin0y8jutswlje.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220898/images/a4cqxq6isrh0iddshavv.png",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220901/images/gqqu8n3nxjax7mcuaoc7.png",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220905/images/fzigqyhfwbfursrvv1q2.png",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709221065/images/pvamtqizrxms5as3xk1r.png",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220892/images/abxhvqzwe4nt9vnqijgy.jpg",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709227778/images/pqlfy4kfoq0gmdq8q1l6.png",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220909/images/yen6lngyiimdsfujb9lb.jpg",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220914/images/yz8tnldapwfnczyfzv4r.png",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220909/images/hhptnkk7oavfuozvgr4z.png",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220919/images/odfv5hpkgak4etsz9un9.png",
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709227757/images/nqz0cnbkoxj1yla1qvc2.png",
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220887/images/z02ufbfo9d59t61x3prb.jpg",
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220911/images/m2eq34dgkojvntzplzkp.jpg",
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
        backgroundPosition: "center",
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
