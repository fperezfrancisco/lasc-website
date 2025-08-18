import React from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { getStrapiMedia } from "@/utils/media";

const MainHeroNewsBlock = ({
  newsId,
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
      {newsImgWide === null ? (
        <div className="w-full h-full bg-neutral-100 animate-pulse"></div>
      ) : (
        <img
          src={getStrapiMedia(newsImgWide)}
          alt=""
          className="w-auto h-full sm:w-full sm:h-auto lg:w-auto lg:h-full xl:w-full xl:h-auto object-cover"
        />
      )}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/100 z-0"></div>
    <div className="my-6 flex flex-col gap-0 z-10 text-white">
      <p className="text-sm sm:text-lg font-medium">{newsDate}</p>
      <h1 className="text-2xl md:text-3xl xl:text-4xl capitalize font-bold leading-none mb-4">
        {newsTitle}
      </h1>
      <Link href={`/news/articles/${newsId}`}>
        <PrimaryButton buttonText={"Read Article"} width={"250px"} />
      </Link>
    </div>
  </div>
);

const SubHeroNewsBlock = ({
  newsId,
  newsImgWide,
  newsImgPortrait,
  newsImgSquare,
  newsTitle,
  newsDate,
  newsAction,
  newsTextPreview,
}) => (
  <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3 rounded-[8px] grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <div className="bg-neutral-200 rounded-[4px] aspect-video sm:aspect-[unset] w-full h-full overflow-hidden">
      {newsImgWide === null ? (
        <div className="w-full h-full bg-neutral-100 animate-pulse"></div>
      ) : (
        <img
          src={getStrapiMedia(newsImgWide)}
          alt=""
          className="object-cover h-auto w-full sm:h-full"
        />
      )}
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
        href={`/news/articles/${newsId}`}
        className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm flex items-center gap-2"
      >
        Read More <ArrowRightCircle className="size-4" />
      </Link>
    </div>
  </div>
);

const NewsPageHero = ({ mainNewsArticle, subNewsOne, subNewsTwo }) => {
  return (
    <section className="w-full px-4 lg:px-6 py-4 grid grid-cols-1 grid-rows-2 lg:grid-cols-7 gap-4">
      {mainNewsArticle && mainNewsArticle != null ? (
        <MainHeroNewsBlock
          newsId={mainNewsArticle.id}
          newsTitle={mainNewsArticle.title}
          newsDate={mainNewsArticle.createdAt}
          newsImgWide={mainNewsArticle.imgWide.url}
          newsImgPortrait={mainNewsArticle.imgPortrait.url}
        />
      ) : (
        <div className="relative overflow-hidden row-span-full aspect-4/3 sm:aspect-video lg:aspect-4/3 xl:aspect-video col-span-full lg:col-span-4 bg-neutral-200 rounded-[8px] p-4 flex flex-col items-start justify-end animate-pulse"></div>
      )}
      {subNewsOne && subNewsOne != null ? (
        <SubHeroNewsBlock
          newsId={subNewsOne.id}
          newsTitle={subNewsOne.title}
          newsDate={subNewsOne.createdAt}
          newsImgWide={subNewsOne.imgWide.url}
          newsImgPortrait={subNewsOne.imgPortrait.url}
          newsTextPreview={subNewsOne.previewText}
        />
      ) : (
        <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3 rounded-[8px] grid grid-cols-1 sm:grid-cols-2 gap-4 animate-pulse"></div>
      )}
      {subNewsTwo && subNewsTwo != null ? (
        <SubHeroNewsBlock
          newsId={subNewsTwo.id}
          newsTitle={subNewsTwo.title}
          newsDate={subNewsTwo.createdAt}
          newsImgWide={subNewsTwo.imgWide.url}
          newsTextPreview={
            "A fantastic weekend for the LASC Girls 2014 Team, reaching the Final at the Summer Classic Tournament!"
          }
        />
      ) : (
        <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3 rounded-[8px] grid grid-cols-1 sm:grid-cols-2 gap-4 animate-pulse"></div>
      )}
    </section>
  );
};

export default NewsPageHero;
