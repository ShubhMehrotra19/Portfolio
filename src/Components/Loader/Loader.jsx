const Example = () => {
    return (
      <div>
        <Loader
          height="450px"
          background="white"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="https://images.pexels.com/photos/3262249/pexels-photo-3262249.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    );
  };
  
  const Loader = ({
    height,
    background,
    imgUrl,
  }) => {
    return (
      <div className="relative" style={{ height }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div
          style={{ background }}
          className="absolute inset-0 animate-pulse z-10"
        />
        <span
          className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            fontSize: "clamp(3rem, 12vw, 10rem)",
            lineHeight: height,
          }}
        >
          Loading...
        </span>
      </div>
    );
  };
  
  export default Example;