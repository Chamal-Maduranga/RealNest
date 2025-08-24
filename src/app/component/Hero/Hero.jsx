import Image from 'next/image';
import React from 'react';
import HeroImage from '../../../../public/images/hero.jpg';

function Hero() {
  return (
    <div className="md:flex h-[calc(70vh-120px)]">
      
      {/* Left: Image with overlay */}
      <div className="md:w-1/2 relative h-full">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          className="object-cover"
        />
        
        {/* Overlay */}
        <div className="md:hidden absolute inset-0 bg-black/60 z-[1]"></div>

        {/* Content */}
        <div className="md:hidden absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white font-heading bg-black/10 backdrop-blur-[1px] p-2 w-full">
            Modern Luxury, Just Steps From the City
          </h1>
          <h4 className="text-xl font-body mt-7 text-white bg-black/10 backdrop-blur-[1px] p-2">
            Discover premium villas, apartments, and off-plan projects with us.
          </h4>
          <button className="font-heading border-1 border-white text-2xl p-5 rounded-sm mt-20 cursor-pointer bg-white/10 backdrop-blur-[1px] text-white">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right: Optional extra content */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center h-full p-6 bg-cyan-500 font-heading">
        <div className="text-4xl md:text-7xl font-bold text-white text-center">
          <h1>Modern Luxury, Just Steps From the City</h1>
          <h4 className="text-2xl font-body mt-7">
            Discover premium villas, apartments, and off-plan projects with us.
          </h4>
          <button className="font-body text-2xl border-2 p-5 rounded-sm mt-20 cursor-pointer bg-cyan-600 shadow-2xl hover:p-6 duration-300">
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
}

export default Hero;
