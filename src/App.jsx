import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eye from "./components/Eye";
import Artwork from "./components/Artwork";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
        <div className="w-full min-h-screen text-white bg-zinc-900">
          <Navbar />
          <LandingPage />
          <Marquee />
          <About />
          <Eye />
          <Artwork />
          <Footer />
        </div>
     
  );
}

export default App;
