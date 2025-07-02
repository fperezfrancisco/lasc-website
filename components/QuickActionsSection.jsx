import React from "react";
import QuickActionBox from "./QuickActionBox";

const QuickActionsSection = () => {
  return (
    <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] min-h-[700px] flex flex-col gap-8 md:gap-12 items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
        Elite Development is Here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full mx-auto">
        <QuickActionBox />
        <QuickActionBox />
        <QuickActionBox />
        <QuickActionBox />
      </div>
    </section>
  );
};

export default QuickActionsSection;
