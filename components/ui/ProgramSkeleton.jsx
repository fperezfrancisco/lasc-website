import React from "react";

const ProgramSkeleton = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-6 mb-8 animate-pulse">
      <div className="w-full p-6">
        <div className="w-full h-full aspect-video rounded-[8px] bg-neutral-200 overflow-hidden"></div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 xl:justify-center xl:gap-14 items-start w-full lg:max-w-[800px] mt-6 lg:mt-12 px-6">
        <h2 className="w-3/4 h-6 rounded-[6px] bg-neutral-200"></h2>
        <div className="max-w-full w-full h-fit lg:max-w-[600px] flex flex-col gap-2">
          <div className="w-full h-6 rounded-[6px] bg-neutral-200" />
          <div className="w-full h-6 rounded-[6px] bg-neutral-200" />
          <div className="w-full h-6 rounded-[6px] bg-neutral-200" />
        </div>
        <div className="w-1/4 max-w-[150px] h-8 rounded-[6px] bg-neutral-200"></div>
      </div>
    </div>
  );
};

export default ProgramSkeleton;
