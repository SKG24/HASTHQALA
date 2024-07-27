import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-12 rounded-tl-3xl rounded-tr-3xl bg-green-900 pb-40">
      <div className="text  border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className='text-[10vw] leading-none font-["Founders Grotesk"] uppercase font-semibold pt-6 pb-6'
        >
          Transforming spaces with art and design
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className='text-[10vw] leading-none font-["Founders Grotesk"] uppercase font-semibold pt-6 pb-6'
        >
          Transforming spaces with art and design
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;