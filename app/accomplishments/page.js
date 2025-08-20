"use client";
import AccompComp from "@/components/ui/Accomp_Comp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { list, AccompCardsData } from "@/lib/data/AccompData";
import AccompCard from "@/components/ui/AccompCard";

const page = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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

        <div className="w-full flex flex-col items-center gap-20 my-10">
          <AccompComp 
            header={list[0].header}
            list={list[0].items}
            paragraph={list[0].paragraph}
            image={list[0].image}
          />
          
          <AccompComp 
            header={list[1].header}
            list={list[1].items}
            paragraph={list[1].paragraph}
            image={list[1].image}
          />
        </div>

        <div className="flex flex-col w-full items-center gap-2">
          <h4 className="italic">Club Recognition</h4>
          <h2 className="text-3xl font-semibold">Recent Club Wins & Accomplishments</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-3">
            {AccompCardsData.map((element, index) => (
              <AccompCard 
                key={index}
                image={element.image}
                title={element.Title}
                date={element.Date}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
