import React from "react";
import BannerLascTheme from "./ui/BannerLascTheme";

const StatBox = ({ statNumber, statText }) => {
  return (
    <div className="flex flex-col items-center text-center text-text gap-0">
      <p className="font-extrabold text-5xl xl:text-6xl">{statNumber}</p>
      <p className=" text-xs lg:text-md">{statText}</p>
    </div>
  );
};

const StatSection = () => {
  return (
    <div className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[120px] flex flex-col-reverse lg:flex-row gap-4 md:gap-8 md:gap-10 xl:gap-18 items-center">
      <BannerLascTheme>
        <div className="w-full max-w-[500px] md:max-w-[1440px] h-full grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 justify-between text-white items-center z-10">
          <StatBox statNumber={"20+"} statText={"Competitive Teams"} />
          <StatBox statNumber={"50+"} statText={"Athletes to College"} />
          <StatBox statNumber={"27 Yrs"} statText={"Serving Santa Clarita"} />
          <StatBox
            statNumber={"200+"}
            statText={"Players Developed Annually"}
          />
        </div>
      </BannerLascTheme>
    </div>
  );
};

export default StatSection;
