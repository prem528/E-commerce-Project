"use client";

import { useState, useEffect } from "react";
import { CarouselButton } from "@/components/ui/carousel-button";

interface HeroCarouselProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
    discount?: string;
  }[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg my-6">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="min-w-full relative"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 to-transparent flex flex-col justify-center p-12">
              {slide.discount && (
                <div className="bg-amber-400 text-brown-900 font-bold py-1 px-4 rounded-md inline-block mb-4 w-fit">
                  UP TO {slide.discount} OFF
                </div>
              )}
              <h2 className="text-6xl font-bold text-brown-900 mb-2">
                {slide.title.split(' ')[0]}
                <br />
                <span className="text-teal-700">{slide.title.split(' ')[1]}</span>
              </h2>
              <p className="text-gray-700 max-w-md mt-4">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      <CarouselButton direction="prev" onClick={prevSlide} />
      <CarouselButton direction="next" onClick={nextSlide} />
    </div>
  );
}