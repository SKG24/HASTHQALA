import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".7" className='w-full flex gap-10 h-screen bg-zinc-300 px-20 py-20 font-["Founders Grotesk"]'>
      <div className="w-1/2 h-full flex flex-col justify-between tracking-tighter">
        <div className="heading">
          <h1 className="text-[8vw] text-black uppercase font-bold leading-none -mb-6">
            Crafted
          </h1>
          <h1 className="text-[8vw] text-black uppercase font-bold leading-none -mb-6">
            Elegance
          </h1>
        </div>
        <h3 className='lowercase font-["Futura"] text-zinc-700 text-[4vw] font-bold tracking-tighter'>
          hasthqala.
        </h3>
      </div>
      <div className="w-1/2">
        <h1 className="text-[4vw] text-zinc-700 uppercase font-bold leading-none -mb-6 tracking-tighter">
          Explore More
        </h1>
        <div className='details font-["Neue_Montreal"] mt-10 py-20 flex flex-col justify-between'>
          <div className="text-[2vw] text-zinc-500 uppercase font-bold leading-none">
            <h2>S:</h2>
            <a
              className="block text-[1vw] font-light py-5 text-zinc-800"
              href="https://www.instagram.com/hasthqala/"
            >
              Instagram
            </a>
          </div>
          <div className="text-[2vw] text-zinc-500 uppercase font-bold leading-none py-10">
            <h2>L:</h2>
            <h3 className="block text-[1vw] font-light py-5 text-zinc-800">
              Patiala, Punjab, India
            </h3>
          </div>
          <div className="text-[2vw] text-zinc-500 uppercase font-bold leading-none py-10">
            <h2>E:</h2>
            <a
              className="block text-[1vw] font-light py-5 text-zinc-800"
              href="mailto:hasthqala@gamil.com?body=My custom mail body"
            >
              hasthqala@gamil.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
