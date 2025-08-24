'use client'

import { useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function MobileImageSlider() {
  const images = projects[0].images; // first project images
  const [current, setCurrent] = useState(0); // current visible image index

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Slider */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[current]}
          alt={`Project image ${current + 1}`}
          width={400}
          height={300}
          className="object-cover w-full h-64"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevImage}
        className="text-white text-xl absolute h-[256px] top-0 left-0  bg-black/80 p-2 hover:bg-white/80"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="text-white text-xl absolute h-[256px] top-0 right-0 bg-black/80 p-2 hover:bg-white/80"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-2 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
