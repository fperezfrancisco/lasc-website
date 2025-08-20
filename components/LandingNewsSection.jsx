import { allNews } from "@/lib/data/news";
import { getNewsArticles } from "@/utils/api";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NewsLandingBox = ({ newsImg, newsImgLarge, newsDate, newsId }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full h-[90%] aspect-3/4 rounded-[8px] bg-neutral-200 overflow-hidden">
        <Link href={`/news/articles/${newsId}`}>
          <picture className="">
            <source media="(min-width: 300px)" srcSet={newsImgLarge} />
            <img
              src={newsImg}
              alt="Your image"
              className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
            />
          </picture>
        </Link>
      </div>
      <div className="w-full h-[10%] flex">
        <p>{newsDate}</p>
      </div>
    </div>
  );
};

const SkeletonNewsLandingBox = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full h-[90%] aspect-3/4 rounded-[8px] bg-neutral-200 overflow-hidden bg-neutral-100 animate-pulse"></div>
      <div className="w-full h-[10%] flex">
        <p className="w-full h-full rounded-[8px] bg-neutral-100 animate-pulse"></p>
      </div>
    </div>
  );
};

const LandingNewsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    async function loadNews() {
      try {
        const data = await getNewsArticles();
        console.log("News Data: ", data);
        setNewsData(data);
      } catch (err) {
        console.error("Failed to load news data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  if (!mounted) {
    return null; // optional: return loading spinner or blank
  }

  return (
    <div className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-4 md:gap-8 md:gap-10 xl:gap-18 items-center">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-md font-italic text-text">News & Updates</h3>
        <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
          Stay Informed On What's New
        </h2>
      </div>
      <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6 hidden lg:grid">
        {newsData
          ? newsData
              .slice(0, 5)
              .map((article) => (
                <NewsLandingBox
                  key={article.id}
                  newsImg={article.imgPortrait.url}
                  newsImgLarge={article.imgPortrait.url}
                  newsDate={formatDate(article.createdAt)}
                  newsId={article.documentId}
                />
              ))
          : Array(4)
              .fill(0)
              .map((_, index) => <SkeletonNewsLandingBox />)}
      </div>
      <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6 grid lg:hidden">
        {newsData &&
          newsData
            .slice(0, 4)
            .map((article) => (
              <NewsLandingBox
                key={article.id}
                newsImg={article.imgPortrait.url}
                newsImgLarge={article.imgPortrait.url}
                newsDate={formatDate(article.createdAt)}
                newsId={article.documentId}
              />
            ))}
      </div>
    </div>
  );
};

export default LandingNewsSection;
