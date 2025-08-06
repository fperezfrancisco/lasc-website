"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsPageHero from "@/components/NewsPageHero";
import { allNews, heroNews } from "@/lib/data/news";
import { ArrowRightCircle } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
          mainNewsArticle={heroNews.mainHero}
          subNewsOne={heroNews.subHero[0]}
          subNewsTwo={heroNews.subHero[1]}
        />
        <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-4 md:gap-8 md:gap-10 xl:gap-18 items-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-text">
            All News & Updates
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 xl:gap-6">
            {allNews.slice(3).map((article) => (
              <div
                key={article.id}
                className="flex flex-col items-start gap-4rounded-[8px]"
              >
                <div className="w-full aspect-video sm:aspect-4/3 bg-neutral-300 rounded-[8px]"></div>
                <div className="w-full h-full flex flex-col items-start justify-end py-2">
                  <h2 className="leading-none font-semibold text-md md:text-lg">
                    {article.title}
                  </h2>
                  <p className="text-xs md:text-sm font-medium">
                    {article.createdAt}
                  </p>
                  <p className="text-xs md:text-sm my-2 text-neutral-500 font-medium line-clamp-3">
                    "Some Preview"
                  </p>
                  <Link
                    href={"/"}
                    className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm flex items-center gap-2"
                  >
                    Read More <ArrowRightCircle className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
