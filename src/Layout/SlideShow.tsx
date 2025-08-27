"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import card from "@/public/card.jpg";
import card1 from "@/public/card1.jpg";
import card2 from "@/public/card2.jpg";
import card3 from "@/public/card3.jpg";
import card4 from "@/public/card4.jpg";
import card5 from "@/public/card5.jpg";
import card6 from "@/public/card6.jpg";

const images = [card, card1, card2, card3, card4, card5, card6];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-dvh overflow-hidden rounded-lg shadow-lg">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 
             ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default SlideShow;
