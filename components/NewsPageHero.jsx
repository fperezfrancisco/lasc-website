import React from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

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
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/100 z-0"></div>
    <div className="my-6 flex flex-col gap-0 z-10 text-white">
      <p className="text-sm sm:text-lg font-medium">{newsDate}</p>
      <h1 className="text-2xl md:text-3xl xl:text-4xl capitalize font-bold leading-none mb-4">
        {newsTitle}
      </h1>
      <PrimaryButton buttonText={"Read Article"} width={"250px"} />
    </div>
  </div>
);

const SubHeroNewsBlock = ({
  newsImgWide,
  newsImgPortrait,
  newsImgSquare,
  newsTitle,
  newsDate,
  newsAction,
  newsTextPreview,
}) => (
  <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3  rounded-[8px] grid grid-cols-2 gap-4">
    <div className="bg-neutral-200 rounded-[4px] w-full h-full overflow-hidden">
      <img
        src={newsImgWide}
        alt=""
        className="object-cover h-full max-h-[500px]"
      />
    </div>
    <div className="w-full h-full flex flex-col items-start justify-end py-2">
      <h2 className="leading-none font-semibold text-md md:text-lg">
        {newsTitle}
      </h2>
      <p className="text-xs md:text-sm font-medium">{newsDate}</p>
      <p className="text-xs md:text-sm my-4 text-neutral-500 font-medium line-clamp-3">
        {newsTextPreview}
      </p>
      <Link
        href={"/"}
        className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm flex items-center gap-2"
      >
        Read More <ArrowRightCircle className="size-4" />
      </Link>
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
      <SubHeroNewsBlock
        newsTitle={"B2018 Win Socal Elite Tournament"}
        newsDate={"July 20, 2025"}
        newsImgWide={"/ourTeams2.jpg"}
        newsTextPreview={
          "A fantastic weekend for the LASC Boys 2018 Gold team, winning their first ever tournament this season!"
        }
      />
      <SubHeroNewsBlock
        newsTitle={"G2014 Finalist at Summer Classic"}
        newsDate={"July 20, 2025"}
        newsImgWide={"/youthSoccer1.jpg"}
        newsTextPreview={
          "A fantastic weekend for the LASC Girls 2014 Team, reaching the Final at the Summer Classic Tournament!"
        }
      />
    </section>
  );
};

export default NewsPageHero;
