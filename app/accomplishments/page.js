"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { list, AccompCardsData } from "@/lib/data/AccompData";
import AccompCard from "@/components/ui/AccompCard";
import PrimaryButton from "@/components/PrimaryButton";
import { getAccomplishments } from "@/utils/api";
import { formatDate } from "@/utils/formatDate";

const page = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [accompData, setAccompData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    async function loadAccomps() {
      try {
        const data = await getAccomplishments();
        console.log("Data: ", data);
        setAccompData(data);
      } catch (err) {
        console.error("Failed to load slides:", err);
      } finally {
        setLoading(false);
      }
    }

    //loadSlides();
    loadAccomps();
  }, []);

  if (!mounted) {
    return null; // optional: return loading spinner or blank
  }
  return (
    <>
      <Header />

      <section className="w-full flex flex-col items-center gap-20 mb-12 px-4 py-2">
        <h1 className="w-fit text-center text-4xl font-bold mb-12 border-b-4 border-black dark:border-white px-4 py-2">
          Accomplishments
        </h1>

        {/* Headers */}
        <div className="w-full flex flex-col items-center gap-20 my-10">
          {/* High Quality Staff */}
          <div
            id="lascBanner"
            className="w-full h-auto flex flex-col md:flex-row gap-10 items-center justify-between px-10 lg:px-25 py-[100px] rounded-[8px] bg-red-100 md:min-h-[265px] relative text-white"
          >
            <img
              src="/noise-img.png"
              alt=""
              className="w-full h-full absolute inset-0 z-0 rounded-[8px]"
            />
            <div className="w-full flex flex-col gap-4">
              {/* Image position*/}
              <img
                src={list[0].image}
                alt=""
                className="absolute top-[-120px] sm:top-[-120px] md:top-[-70px] lg:top-[-80px] xl:top-[-115px] 2xl:top-[-140px] left-10 md:left-20 lg:left-30 w-[180px] sm:w-[200px] lg:w-[240px] h-auto"
              />
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold z-1 mt-8">
                {list[0].header}
              </h1>
              <ul className="list-disc list-inside font-medium z-1">
                {list[0].items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="w-full flex flex-col gap-5">
              <p className="text-sm md:text-md lg:text-lg z-1 font-medium">
                {list[0].paragraph}
              </p>
              <Link
                href="/about#staff"
                scroll={true}
                className="text-sm md:text-md lg:text-lg z-1 font-medium w-fit"
              >
                <PrimaryButton buttonText="Meet our staff" />
              </Link>
            </div>
          </div>

          {/* College Success */}
          <div
            id="lascBanner"
            className="w-full h-auto flex flex-col md:flex-row gap-10 items-center justify-between px-10 lg:px-25 py-[100px] rounded-[8px] bg-red-100 md:min-h-[265px] relative text-white"
          >
            <img
              src="/noise-img.png"
              alt=""
              className="w-full h-full absolute inset-0 z-0 rounded-[8px]"
            />
            <div className="w-full flex flex-col gap-4">
              {/* Image Position */}
              <img
                src={list[1].image}
                alt=""
                className="absolute top-[-150px] sm:top-[-150px] lg:top-[-140px] xl:top-[-180px] left-10 sm:left-20 lg:left-30 w-[180px] sm:w-[200px] lg:w-[220px] h-auto"
              />
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold z-1 mt-8">
                {list[1].header}
              </h1>
              <ul className="list-disc list-inside font-medium z-1">
                {list[1].items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-col gap-5">
              <p className="text-sm md:text-md lg:text-lg z-1 font-medium">
                {list[1].paragraph}
              </p>
              <Link
                href="/alumni"
                scroll={true}
                className="text-sm md:text-md lg:text-lg z-1 font-medium w-fit"
              >
                <PrimaryButton buttonText="See our Alumni" />
              </Link>
            </div>
          </div>
        </div>

        {/* Accomplishments Cards */}
        <div className="flex flex-col w-full items-center gap-2 text-center mb-6">
          <h4 className="italic">Club Recognition</h4>
          <h2 className="text-3xl font-semibold">
            Recent Club Wins & Accomplishments
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-12">
            {!loading && accompData && accompData.length > 0
              ? accompData.map((element, index) => (
                  <AccompCard
                    key={index}
                    image={element.image}
                    title={element.title}
                    date={formatDate(element.accomplishmentDate)}
                  />
                ))
              : Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full min-w-[300px] md:min-w-[350px] xl:min-w-[400px] h-full px-4 flex flex-col gap-4 items-center text-white/0"
                    >
                      {/* Card container with background */}
                      <div className="relative w-full max-w-[450px] rounded-[6px] overflow-hidden bg-neutral-200 aspect-[4/3] animate-pulse"></div>
                      {/* Text Container */}
                      <div className="flex flex-col items-center text-center gap-1 w-full">
                        <h4 className="text-sm font-medium italic w-full max-w-[200px] h-4 rounded-[8px] bg-neutral-200 animate-pulse"></h4>
                        <h2 className="text-xl lg:text-2xl font-medium uppercase w-full max-w-[300px] h-4 rounded-[8px] bg-neutral-200 animate-pulse"></h2>
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
