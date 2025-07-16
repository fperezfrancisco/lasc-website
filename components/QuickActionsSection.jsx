import React from "react";
import QuickActionBox from "./QuickActionBox";

const QuickActionsSection = ({ isDark }) => {
  return (
    <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[120px] flex flex-col gap-8 md:gap-12 items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
        Elite Development is Here
      </h2>
      <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 lg:gap-6 w-full mx-auto">
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Our Teams"}
          boxImg={"/ourTeams2.jpg"}
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Our Programs"}
          boxImg={"/programs.jpg"}
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Tryout Information"}
          boxImg={"/tryout.jpg"}
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Get in Touch"}
          boxImg={"/getInTouch.jpg"}
        />
      </div>
    </section>
  );
};

export default QuickActionsSection;
