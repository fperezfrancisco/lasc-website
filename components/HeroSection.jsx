import React from "react";
import { HeroCarousel } from "./HeroCarousel";

const HeroSection = () => {
  return (
    <section className="w-full px-4 lg:px-6 py-4 flex">
      {/**
       * <div className="w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] bg-neutral-200"></div>
       */}
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;
