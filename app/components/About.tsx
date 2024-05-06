import React from "react";
import Image from "next/image";

const About = () => {
  return (
  
      <div className="flex flex-col lg:flex-row justify-center mt-20 md:mt-0">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-6xl lg:text-7xl tracking-widest text-center lg:text-left">The <span className="roboto">$</span>Blue</h2>
          <div className="h-[2px] w-[55%] bg-black my-10"></div>
          <p className="text-center lg:text-left text-xl lg:text-3xl tracking-wider leading-9">
            Welcome to the dynamic world of The Blue, a pioneering initiative
            that takes flight on the cutting-edge Base chain, drawing
            inspiration from the iconic and mischievous blue birds of Angry
            Birds fame.
          </p>
          <a
            href="#"
            className="mt-10 w-[40%] sm:w-[20%] flex justify-center items-center py-3 px-4 md:px-4 text-[#60B4FF] cursor-pointer rounded-full bg-[#000000] border-2 border-white transition duration-300"
          >
            Buy Now
          </a>
        </div>
        <Image
          src="/Bird4.PNG"
          alt="blue bird"
          width={500}
          height={500}
          className=""
        />
      </div>

  );
};

export default About;
