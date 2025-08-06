"use client";
import ComingSoonPage from "@/components/ComingSoonPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { alumni } from "@/lib/data/alumni";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const AlumniBox = ({ alumni }) => (
  <div className="w-full h-full flex flex-col items-center gap-4">
    <div className="w-full aspect-square bg-neutral-200 rounded-[8px]"></div>
    <div className="w-full px-2 flex flex-col items-center gap-0 text-center">
      <h2 className="font-semibold text-lg">{alumni.name}</h2>
      <p className="text-text/50 text-sm">{alumni.college}</p>
    </div>
  </div>
);

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

      <main className={`w-full flex flex-col gap-5 px-4`}>
        {/* <main
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } mt-12 w-full flex flex-col gap-5 px-4`}
        > */}
        <section className="w-full flex flex-col items-center gap-5 mb-12">
          <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-black dark:border-white px-4 py-2">
            Alumni
          </h1>
          <p className="text-2xl font-medium text-center max-w-[600px]">
            LASC-SCV proudly congratulates the following alumni for continuing
            to play the "Beautiful Game" at the next level:
          </p>
          <p className="text-sm font-italic text-center max-w-[600px]">
            *Please note: if you know of other alumni who are not included in
            this page, please contact Jared White at jared.white@lasc-scv.org*
          </p>
        </section>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mx-auto  items-center gap-5 mb-[48px]">
          {alumni.map((alumni, idx) => (
            <AlumniBox key={idx} alumni={alumni} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
