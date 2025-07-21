import { useInViewOnce } from "@/hooks/useInViewOnce";
import React from "react";

const TimelineStem = ({ up, cardText, cardImg, year, delay = 0 }) => {
  const [ref, inView] = useInViewOnce();
  return (
    <div className={`relative bg-white size-[16px] rounded-full z-30`}>
      <div
        className={`absolute text-center z-20 text-white text-2xl md:text-3xl lg:text-4xl font-extrabold transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } 
            ${
              up
                ? "left-6 -bottom-1 md:-bottom-[40px] md:-left-8"
                : "-left-18 -top-2 md:-top-[40px] md:-left-8"
            }
        `}
      >
        {year}
      </div>
      <div className="absolute inset-0 size-[16px] bg-white z-20 rounded-full"></div>
      <div
        className={`absolute mx-auto bottom-0 right-0 top-0 my-auto md:my-0 transition-all duration-700 ${
          inView ? "scale-y-100" : "scale-y-0"
        } origin-top ${
          up
            ? "left-[unset] md:left-0 mx-0 md:top-[unset] md:mx-auto"
            : "right-[unset] md:right-0 md:left-0 md:mx-auto"
        } h-[8px] md:h-[120px] w-[100px] sm:w-[120px] md:w-[8px] shadow-sm shadow-neutral-400 rounded-full bg-white `}
      >
        <div
          className={`absolute z-20 p-2 transition-all duration-700 delay-200 ${
            inView
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-50 translate-y-2"
          }
            ${
              up
                ? "-top-[70px] -left-[70px] md:-top-24 md:-left-[70px] "
                : "-top-[70px] -right-[70px] md:top-[unset] md:right-[unset] md:-bottom-24 md:-left-[70px]"
            }
         transform scale-50 min-[425px]:scale-100 w-[140px] h-[160px] bg-white shadow-sm rounded-[6px] flex flex-col items-center justify-center text-center`}
        >
          <p className="text-xs font-semibold p-2 text-black">{cardText}</p>
          <img src={cardImg} className="" />
        </div>
      </div>
    </div>
  );
};

const TimelineGraphic = () => {
  return (
    <div className="w-full h-full z-20 flex flex-col md:flex-row items-center">
      <div className="w-[8px] h-full min-h-[700px] md:min-h-0 md:w-full md:h-[8px] rounded-full bg-white block relative flex flex-col md:flex-row items-center py-4 md:py-0 px-0 md:px-16 justify-between gap-6">
        <TimelineStem
          up={true}
          cardText={"SCV Magic was founded"}
          year={"1998"}
          cardImg={"/heroImgs/scvMagic.png"}
        />
        <TimelineStem
          up={false}
          cardText={"Became a Non-Profit"}
          year={"2000"}
          cardImg={"/heroImgs/nonProfit.png"}
          delay={250}
        />
        <TimelineStem
          up={true}
          cardText={"Affiliation with Real SoCal"}
          year={"2015"}
          cardImg={"/heroImgs/realSocal.png"}
          delay={500}
        />
        <TimelineStem
          up={true}
          cardText={"RealSoCal Evolves to LAFC Socal Youth"}
          year={"2021"}
          delay={750}
          cardImg={"/heroImgs/lafc.png"}
        />
        <TimelineStem
          up={false}
          cardText={"Affiliation with LASC"}
          year={"2025"}
          delay={1000}
          cardImg={"/heroImgs/lasc.png"}
        />
      </div>
    </div>
  );
};

export default TimelineGraphic;
