"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { teams } from "../../lib/data/team";
import Footer from "@/components/Footer";
import TeamCard from "@/components/ui/TeamCard";

export default function Teams() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  if(!mounted){
    return null;
  }

  return (
    <>
      <Header />
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen text-text mb-12`}
      >
        {/* About section starts here */}
        {/** <main className=" w-full flex flex-col gap-5">*/}

        <main
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } mt-12 w-full flex flex-col gap-5`}
        >
          <section className="w-full flex justify-center mb-12">
            <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-black dark:border-white px-4 py-2">
              Teams
            </h1>
          </section>

          {/* Team Cards */}
          <section className="w-full flex justify-center px-8 sm:px-6 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-10 max-w-[1100px] w-full">
              {teams.map((team, index) => (
                <TeamCard
                  key={index}
                  image={team.image}
                  team={team.team}
                  coach={team.coach}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
