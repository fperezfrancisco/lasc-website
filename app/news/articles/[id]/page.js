"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsPageHero from "@/components/NewsPageHero";
import SubHeroNewsBlock from "@/components/ui/SubHeroNewsBlock";
import { useTheme } from "next-themes";
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
      {/* <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text `}
      > */}
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text px-10 py-5`}
      >
        <main className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-10 md:px-15 pb-24">
          <section className="lg:col-span-2 flex flex-col">
            {/* Headers like hashtag, title, and author */}
            {/* Props needed would be hashtag, title, and author */}
            <div className="flex flex-col gap-2 mb-6">
              <h4 className="text-center text-xs md:text-lg text-blue-400">
                #Hashtag
              </h4>
              <h1 className="text-center text-4xl md:text-5xl font-semibold">
                LASC Boys 2018 Take Cup Home!
              </h1>
              <h6 className="text-center text-sm md:text-md text-gray-600 dark:text-gray-300">
                By Author Here
              </h6>
            </div>

            {/* Image for blog here */}
            {/* Only props needed would be the image src path */}
            <div className="relative w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] bg-neutral-200 overflow-hidden mb-12">
              <img
                src="/youthSoccerGirls.jpg"
                className="object-cover object-center h-full w-auto sm:h-auto sm:w-full"
              />
              <div className="absolute w-full inset-0 h-full bg-black/50 z-10"></div>
            </div>
            {/* Quote here for the blog */}
            {/* Props would just need the quote prop to stick into the span */}
            <div className="w-full col-span-2 flex flex-col gap-4">
              <span className="w-full text-md sm:text-lg md:text-2xl xl:text-3xl text-left italic mb-6">
                "Everyone said we were the underdogs today, but we showed them
                why they were wrong!"
              </span>

              {/* Blog text here */}
              {/* Easiest way to pass these props would be to pass in the number of paragraphs the user wants on the post,
                            then we generate that many <p> elements and stick each paragraph into it using an array or something similar */}
              <p className="text-md">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>

              <p className="text-md">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>

              <p className="text-md">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center">
            <h2 className="text-2xl text-center underline">Latest news</h2>
            <div className="flex flex-col gap-8 w-full mt-6">
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
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
