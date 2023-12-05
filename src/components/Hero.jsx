import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white h-screen flex items-center justify-center relative">
      <div className="absolute w-screen h-screen object-cover object-center overflow-hidden">
        <img
          className="w-screen h-screen"
          src={
            "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt="banner"
        />
      </div>
      <div className="justify-center text-center flex-col items-center flex z-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          The Next Generation Payment Method
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <button className="w-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
