"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeroNewsBlock from "@/components/ui/SubHeroNewsBlock";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { allNews } from "@/lib/data/news";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";

const page = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!id) {
    return <p>Loading...</p>;
  }

  const article = allNews.find((article) => article.id == id);

  if (!article) {
    return <p>Article not found.</p>;
  }

  const latestNews = [...allNews]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  const isDark = resolvedTheme === "dark";
  return (
    <>
      <Header />
      {/* <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text `}
      > */}
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text px-10 py-5`}
      >
        <Link href={"/news"} className="flex items-center gap-2 pb-4">
          <ArrowLeftSquare className="size-[32px] text-red-500" />
          All News
        </Link>

        <main className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 md:px-6 lg:px-10 pb-12">
          <section className="lg:col-span-2 flex flex-col">
            {/* Headers like hashtag, title, and author */}
            {/* Props needed would be hashtag, title, and author */}
            <div className="flex flex-col gap-2 mb-6">
              {/* <h4 className="text-center text-xs md:text-lg text-blue-400">
                #Hashtag
              </h4> */}
              <h1 className="text-center text-4xl md:text-5xl font-semibold">
                {article.title}
              </h1>
              <h6 className="text-center text-sm md:text-md text-gray-600 dark:text-gray-300">
                By {article.author}
              </h6>
            </div>

            {/* Image for blog here */}
            {/* Only props needed would be the image src path */}
            {/* <picture className="relative w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] bg-neutral-200 overflow-hidden mb-12"> */}
            <picture className="relative w-full rounded-[8px] bg-neutral-200 overflow-hidden mb-12">
              {/* Wide image for large screens */}
              <source media="(min-width: 1024px)" srcSet={article.imgWide} />
              {/* Portrait image for medium screens */}
              <source media="(min-width: 640px)" srcSet={article.imgPortrait} />
              {/* Square image for small screens */}
              <source media="(max-width: 639px)" srcSet={article.imgSquare} />
              {/* Fallback main image */}
              <img
                src={article.imgMain}
                alt={article.title}
                // className="object-cover object-center h-full w-auto sm:h-auto sm:w-full"
                className="w-full h-auto max-h-[700px] object-cover object-center"
              />
              {/* <div className="absolute w-full inset-0 h-full bg-black/50 z-10"></div> */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
            </picture>
            {/* Quote here for the blog */}
            {/* Props would just need the quote prop to stick into the span */}
            <div className="w-full col-span-2 flex flex-col gap-4">
              <span className="w-full text-md sm:text-lg md:text-2xl xl:text-3xl text-left italic mb-2">
                {article.previewText}
              </span>

              {/* Blog text here */}
              {(article.articleSections ?? []).map((entry, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{entry.sectionHeading}</h2>
                  <p className="text-md">{entry.para}</p>
                </div>
              ))}
            </div>
          </section>

          {/* This is the Latest News side bar */}
          <section className="flex flex-col justify-start pt-8 lg:pt-24">
            <h2 className="text-2xl text-center font-semibold">Latest news</h2>
            <div className="flex flex-col gap-8 w-full mt-6">
              {latestNews.map((news) => (
                <SubHeroNewsBlock
                  key={news.id}
                  newsTitle={news.title}
                  newsDate={news.createdAt}
                  newsImgWide={news.imgWide}
                  newsImageLink={news.link}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
