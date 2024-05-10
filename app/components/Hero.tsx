"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { IoCopySharp } from "react-icons/io5";

const Hero = () => {
  return (
    <>
    <div
      className="lg:grid-cols-2 grid md:flex-row items-center justify-center zig"
    >
      <div
        className="flex justify-center"
      >
        <Image
          src="/Bird2.PNG"
          alt="bird"
          height={350}
          width={350}
          className=""
        />
      </div>
      <div className="h-full w-full flex flex-col gap-5 justify-start items-center md:mt-32">
       
          <h1 className="text-white text-8xl lg:text-[10rem] text-center leading-[1]">
            The <span className="text-[#3B94FF] block lg:text-[12rem] tracking-widest"><span className="roboto">$</span>Blue</span>
          </h1>
 
        <div className="flex flex-row gap-4 justify-self-center mb-4">
        <a
          href="https://app.uniswap.org"
            className="flex justify-center items-center py-3 px-4 md:px-10 text-white cursor-pointer rounded-full bg-[#3B94FF] border-2 hover:bg-black border-white transition duration-300"
          >
            Buy Now
          </a>
        <a href="https://x.com/theblueonbase?s=21" className="flex justify-center items-center hover:shadow-none transition duration-300 bg-[#3B94FF] hover:transform hover:scale-75 border-2 border-white w-12 h-12 rounded-full">
                    <RiTwitterXFill color="white"/>
              </a>
              <a href="https://t.me/TheBlueOnBase" className="flex hover:shadow-none transition duration-300 bg-[#3B94FF] hover:transform hover:scale-75 border-2 border-white w-12 h-12 rounded-full justify-center items-center">
                    <BiLogoTelegram color="white"/>
              </a>
        </div>
        <div className="h-[2px] w-[90%] bg-white"></div>
        <h2 className="text-white text-base">CA: 0x587ce837F8225eD4DeB99eaf530cb7Fa32E915b5</h2>
      </div>
      
    </div>
   
</>
  );
};

export default Hero;
