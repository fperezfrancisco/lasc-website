"use client";
import {
  HandHeart,
  Handshake,
  HardHatIcon,
  Ribbon,
  Scale,
  Trophy,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ValueBox = ({ cardTitle, cardPara, cardIcon }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div
      className={`w-full col-span-1 justify-self-center aspect-2/1 max-w-[400px] border shadow-md rounded-[8px] 
    ${isDark ? "bg-black border-neutral-800" : "bg-bg border-neutral-100"}
    text-text flex flex-col gap-4 p-4`}
    >
      <div className="w-full flex gap-4 items-center">
        <div className="aspect-square rounded-[8px] bg-red-500 flex items-center justify-center p-[12px]">
          {cardIcon}
        </div>
        <h3 className="w-full text-left font-semibold text-xl lg:text-2xl">
          {cardTitle}
        </h3>
      </div>
      <div className="w-full ">
        <p className="text-normal text-left ">{cardPara}</p>
      </div>
    </div>
  );
};

const CoreValuesSection = () => {
  return (
    <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-8 md:gap-12 items-center">
      <div className="flex flex-col items-center w-full lg:max-w-[800px] ">
        <h3 className="text-md font-italic text-text">Our Core Values</h3>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-text">
          What We Stand For
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] p-4 xl:p-8 gap-4 items-center">
        <ValueBox
          cardTitle={"Safety"}
          cardIcon={<HardHatIcon className="size-[24px] text-white" />}
          cardPara={
            "All our youth players can train and play in a safe environment."
          }
        />
        <ValueBox
          cardTitle={"Integrity"}
          cardIcon={<HandHeart className="size-[24px] text-white" />}
          cardPara={
            "All of our affairs will be conducted with integrity and honesty."
          }
        />
        <ValueBox
          cardTitle={"Sportsmanship"}
          cardIcon={<Ribbon className="size-[24px] text-white" />}
          cardPara={"Our club will be associated with good sportsmanship."}
        />
        <ValueBox
          cardTitle={"Respect"}
          cardIcon={<Handshake className="size-[24px] text-white" />}
          cardPara={"All people involved will be treated with respect."}
        />
        <ValueBox
          cardTitle={"Excellence"}
          cardIcon={<Trophy className="size-[24px] text-white" />}
          cardPara={"We will at all times strive for excellence in all we do."}
        />
        <ValueBox
          cardTitle={"Equality"}
          cardIcon={<Scale className="size-[24px] text-white" />}
          cardPara={
            "We will treat all players/teams the same regardless of ability/level."
          }
        />
      </div>
    </section>
  );
};

export default CoreValuesSection;
