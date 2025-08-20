"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsPageHero from "@/components/NewsPageHero";
import { allNews, heroNews } from "@/lib/data/news";
import { getNewsArticles } from "@/utils/api";
import { formatDate } from "@/utils/formatDate";
import { getStrapiMedia } from "@/utils/media";
import { ArrowRightCircle } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ArticlePreview = ({ article }) => (
  <div
    key={article.id}
    className="flex flex-col items-start gap-4rounded-[8px]"
  >
    <div className="w-full aspect-video sm:aspect-4/3 rounded-[8px] bg-neutral-200">
      {!article.imgWide ? (
        <div className="w-full h-full bg-neutral-200 animate-pulse"></div>
      ) : (
        <Link href={`/news/articles/${article.documentId}`}>
          <img
            src={getStrapiMedia(article.imgWide.url)}
            alt=""
            className="object-cover w-full h-full rounded-[8px] cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>
      )}
    </div>
    <div className="w-full h-full flex flex-col items-start justify-end py-2">
      <h2 className="leading-none font-semibold text-md md:text-lg">
        {article.title}
      </h2>
      <p className="text-xs md:text-sm font-medium">
        {formatDate(article.createdAt)}
      </p>
      <p className="text-xs md:text-sm my-2 text-neutral-500 font-medium line-clamp-3">
        {article.previewText || "Check out this article"}
      </p>
      <Link
        href={`/news/articles/${article.documentId}`}
        className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm flex items-center gap-2"
      >
        Read More <ArrowRightCircle className="size-4" />
      </Link>
    </div>
  </div>
);

const page = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainHeroArticle, setMainHeroArticle] = useState(null);
  const [subHeroOne, setSubHeroOne] = useState(null);
  const [subHeroTwo, setSubHeroTwo] = useState(null);

  useEffect(() => {
    setMounted(true);

    async function loadNews() {
      try {
        const data = await getNewsArticles();
        console.log("News Data: ", data);
        setNewsData(data);
        const mainHero = data.find(
          (article) => article.articleType === "mainHero"
        );
        const subHeros = data.filter(
          (article) => article.articleType === "subHero"
        );
        //console.log(mainHero.id);
        console.log(subHeros);
        setMainHeroArticle(mainHero);
        setSubHeroOne(subHeros[0]);
        setSubHeroTwo(subHeros[1]);
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

  const isDark = resolvedTheme === "dark";
  return (
    <>
      <Header />
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text `}
      >
        <NewsPageHero
          mainNewsArticle={mainHeroArticle}
          subNewsOne={subHeroOne}
          subNewsTwo={subHeroTwo}
        />
        <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-4 md:gap-8 md:gap-10 xl:gap-18 items-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-text">
            All News & Updates
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
            {newsData && newsData.length > 0
              ? newsData
                  .slice(1)
                  .map((article) => (
                    <ArticlePreview
                      key={article.documentId}
                      article={article}
                    />
                  ))
              : Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <ArticlePreview
                      key={index}
                      article={{
                        title: "Preview Article",
                        createdAt: "May 31, 2025",
                      }}
                    />
                  ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
