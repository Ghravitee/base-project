import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
const Footer = () => {
  return (
    <div className='flex flex-col md:justify-center md:items-center'>
        
      <h1 className="text-white text-8xl lg:text-[12rem] text-center leading-[1] mb-6">
            The <span className="text-[#60B4FF] tracking-widest"><span className='roboto'>$</span>Blue</span>
          </h1>
          <div className="grid grid-cols-2 gap-4 justify-center mb-7">
        <a
          href="#"
            className="flex justify-center items-center py-3 px-8  text-white cursor-pointer rounded-full bg-[#60B4FF] border-2 hover:bg-black border-white transition duration-300"
          >
            Buy Now
          </a>
        <a
          href="#"
            className="flex justify-center items-center py-3 px-8  text-white cursor-pointer rounded-full bg-[#60B4FF] border-2 hover:bg-black border-white transition duration-300"
          >
            Chart
          </a>
          </div>
          <div className="flex flex-row gap-4 justify-center mb-7">
          <a href="https://x.com/theblueonbase?s=21" className="flex justify-center items-center hover:shadow-none transition duration-300 bg-[#60B4FF] hover:transform hover:scale-75 border-2 border-white w-12 h-12 rounded-full">
                    <RiTwitterXFill color="white"/>
              </a>
              <a href="https://t.me/TheBlueOnBase" className="flex hover:shadow-none transition duration-300 bg-[#60B4FF] hover:transform hover:scale-75 border-2 border-white w-12 h-12 rounded-full justify-center items-center">
                    <BiLogoTelegram color="white"/>
              </a>
          </div>
        <p className='text-white text-center'>Copyright © 2024 – The $Blue</p>
    </div>
  )
}

export default Footer