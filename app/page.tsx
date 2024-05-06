import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="px-4 pt-8 pb-16 lg:px-28 md:px-10">
        <Hero />
      </div>
      <div className="px-10 pt-8 pb-16 lg:px-28 md:px-10 bg-[#60B4FF] box">
        <About />
      </div>
      <div className="px-10 pt-8 pb-16 lg:px-28 md:px-10 lg:py-56 bg-black">
        <Tokenomics />
      </div>
      <div className="px-8 pt-8 pb-16 lg:px-28 md:px-10 lg:py-10 bg-black box1">
        <Footer />
      </div>
    </>
  );
}
