import { allNews } from "@/lib/data/news";
import React from "react";

const NewsLandingBox = ({ newsImg, newsImgLarge, newsDate }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full h-[90%] aspect-3/4 rounded-[8px] bg-neutral-200 overflow-hidden">
        <picture>
          <source media="(min-width: 300px)" srcSet={newsImgLarge} />
          <img
            src={newsImg}
            alt="Your image"
            className="w-full h-auto object-cover"
          />
        </picture>
      </div>
      <div className="w-full h-[10%] flex">
        <p>{newsDate}</p>
      </div>
    </div>
  );
};

const LandingNewsSection = () => {
  return (
    <div className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-4 md:gap-8 md:gap-10 xl:gap-18 items-center">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-md font-italic text-text">News & Updates</h3>
        <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
          Stay Informed On What's New
        </h2>
      </div>
      <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6 hidden lg:grid">
        {allNews.slice(0, 5).map((article) => (
          <NewsLandingBox
            key={article.id}
            newsImg={article.imgPortrait}
            newsImgLarge={article.imgPortrait}
            newsDate={article.createdAt}
          />
        ))}
      </div>
      <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6 grid lg:hidden">
        {allNews.slice(0, 4).map((article) => (
          <NewsLandingBox
            key={article.id}
            newsImg={article.imgPortrait}
            newsImgLarge={article.imgPortrait}
            newsDate={article.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingNewsSection;
