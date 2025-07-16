"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HeroSlide } from "./HeroSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SLIDE_INTERVAL = 8000;

const slides = [
  {
    image: "/soccerPlayerHero.jpg",
    heading: "We are Lasc-scv",
    text: "Learn more about our mission, values, and team.",
    buttonText: "Read More",
    buttonLink: "/about",
  },
  {
    image: "/youthSoccerGirls.jpg",
    heading: "Upcoming Program",
    text: "Don’t miss our next training session. Register today!",
    buttonText: "View Program",
    buttonLink: "/programs",
  },
  {
    image: "/",
    heading: "Latest News",
    text: "Check out the most recent article about our academy’s success.",
    buttonText: "Read Article",
    buttonLink: "/news",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timerRef = useRef(null);

  // Slide to next
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Reset timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      scrollNext();
    }, SLIDE_INTERVAL);
  }, [scrollNext]);

  // Setup autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      resetTimer();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", resetTimer);
    emblaApi.on("pointerUp", resetTimer);

    resetTimer(); // initial

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [emblaApi, resetTimer]);

  return (
    <div className="relative w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div className="min-w-full" key={idx}>
              <HeroSlide {...slide} />
            </div>
          ))}
        </div>
      </div>
      {/* Dot Pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              selectedIndex === index ? "bg-red-600" : "bg-white/50"
            }`}
            onClick={() => {
              emblaApi && emblaApi.scrollTo(index);
              resetTimer();
            }}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute cursor-pointer hover:bg-red-600 left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
        onClick={() => {
          emblaApi && emblaApi.scrollPrev();
          resetTimer();
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute cursor-pointer hover:bg-red-600 right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
        onClick={() => {
          emblaApi && emblaApi.scrollNext();
          resetTimer();
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
