import React from "react";

const MainHeroNewsBlock = ({
  newsImgWide,
  newsImgSquare,
  newsImgPortrait,
  newsTitle,
  newsSubtitle,
  newsAction,
  newsDate,
}) => (
  <div className="relative overflow-hidden row-span-full aspect-4/3 sm:aspect-video lg:aspect-4/3 xl:aspect-video col-span-full lg:col-span-4 bg-neutral-200 rounded-[8px] p-4 flex flex-col items-start justify-end">
    <div className="absolute inset-0 -z-0">
      <img
        src={newsImgWide}
        alt=""
        className="w-auto h-full sm:w-full sm:h-auto lg:w-auto lg:h-full xl:w-full xl:h-auto object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="my-6 flex flex-col gap-0 z-10 text-white">
      <p className="text-sm sm:text-lg font-medium">{newsDate}</p>
      <h1 className="text-2xl md:text-3xl xl:text-4xl capitalize font-bold leading-none">
        {newsTitle}
      </h1>
    </div>
  </div>
);

const SubHeroNewsBlock = () => (
  <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3  rounded-[8px] grid grid-cols-2 gap-4">
    <div className="bg-neutral-200 rounded-[4px] w-full h-full"></div>
    <div className="w-full h-full flex flex-col items-start py-2">
      <h2 className="leading-none font-semibold text-md md:text-lg">
        Subblock title
      </h2>
      <p className="text-xs md:text-sm font-medium">July 21, 2025</p>
    </div>
  </div>
);

const NewsPageHero = () => {
  return (
    <section className="w-full px-4 lg:px-6 py-4 grid grid-cols-1 grid-rows-2 lg:grid-cols-7 gap-4">
      <MainHeroNewsBlock
        newsTitle={"LASC B2011 National Cup Finals Champions"}
        newsDate={"July 25, 2025"}
        newsImgWide={"/lasc-national-champs-wide.jpg"}
      />
      <SubHeroNewsBlock />
      <SubHeroNewsBlock />
    </section>
  );
};

export default NewsPageHero;
