import React from "react";
import artist from "./photo_2024-07-25 12.15.58.jpeg";

console.log(artist);

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        At Hasthqala, we're dedicated to showcasing the beauty of handmade
        paintings. Guided by a bold woman forging a new path from teaching
        mathematics to painting, her deep passion and artistic insight inspire
        us to celebrate a rich tapestry of traditional art forms.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw]">
            Our Artist
          </h1>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-red-700">
          <img
            src={artist}
            alt="Artist"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
