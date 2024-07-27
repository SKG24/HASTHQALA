import { motion } from "framer-motion";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import art1 from "./image/art15.jpeg";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["FORGET TRENDS", "OWN ART THAT WILL", "BE A CONVERSATION PIECE"].map(
          (item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-end ">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 2}}
                      className="mr-[0.5vw] w-[12vw] rounded-md h-[6vw] relative overflow-hidden"
                    >
                      <img
                        src={art1}
                        alt="Artist"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  <h1 className="flex items-center uppercase text-[7vw] font-medium leading-[6vw] tracking-tighter font-['Founders Grotesk']">
                    {item}
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between item-center py-8 px-20 font-light tracking-tight">
        {["Our collection is a celebration of love"].map((item, index) => (
          <p classname="text-md leading-none font-['Neue_Montreal']">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-40 py-2  "></div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <FaArrowDownLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
