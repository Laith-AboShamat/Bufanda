"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lumiflex } from "uvcanvas";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/banner.jpeg", alt: "Banner 1" },
    { src: "/banner1.jpeg", alt: "Banner 2" },
    { src: "/banner2.jpeg", alt: "Banner 3" },
    { src: "/banner3.jpeg", alt: "Banner 4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl">
      <div className="hidden md:block absolute inset-0 z-0">
        <Lumiflex />
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className="object-cover md:object-contain"
            priority={index === currentSlide}
          />
        </div>
      ))}

      <div
        className="hidden md:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/50 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/50 to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl z-20"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl z-20"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-500 hover:bg-white"
            }`}
            aria-label={`Go to Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;