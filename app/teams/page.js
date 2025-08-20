"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
//import { teams } from "../../lib/data/team";
import Footer from "@/components/Footer";
import TeamCard from "@/components/ui/TeamCard";
import { getTeams } from "@/utils/api";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Teams() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBoys, setShowBoys] = useState(true);
  const [showGirls, setShowGirls] = useState(true);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    async function loadTeams() {
      try {
        const data = await getTeams();
        //console.log("Alumni Data: ", data);
        let new_data = [...data].sort((a, b) => {
          const yearA = parseInt(a.team.match(/\d{4}/)[0]); // extract 4-digit year
          const yearB = parseInt(b.team.match(/\d{4}/)[0]);

          if (yearB !== yearA) {
            return yearB - yearA;
          }

          const isGoldA = a.team.includes("Gold");
          const isGoldB = b.team.includes("Gold");

          if (isGoldA && !isGoldB) return -1;
          if (!isGoldA && isGoldB) return 1;

          return a.team.localeCompare(b.team);
        })

        setTeams(new_data);
      } catch (err) {
        console.error("Failed to load teams data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadTeams();

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint in Tailwind = 1024px
        setShowBoys(true);
        setShowGirls(true);
      }
    };

    // run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
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
          <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 mb-24">
            <div className="flex flex-col max-w-[800px] min-w-[500px] w-full px-6 gap-8">
              <span className="inline-flex items-center justify-start w-full gap-2">
                <h2 className="text-3xl font-medium">Boys</h2>
                <button onClick={() => setShowBoys(prev => !prev)} className="hover:cursor-pointer pt-1 lg:hidden">
                  {showBoys ? <ChevronUp/> : <ChevronDown/>}
                </button>
              </span>
              {showBoys && (teams.filter(team => team.gender === "boys")).map((team, index) => (
                <TeamCard
                  key={index}
                  image={team.image}
                  team={team.team}
                  coach={team.coach}
                />
              ))}
            </div>
            
            <div className="flex flex-col max-w-[800px] min-w-[500px] w-full px-6 gap-8 h-fit">
              <span className="inline-flex items-center w-full gap-2">
                <h2 className="text-3xl font-medium">Girls</h2>
                <button onClick={() => setShowGirls(prev => !prev)} className="hover:cursor-pointer pt-1 lg:hidden">
                  {showGirls ? <ChevronUp/> : <ChevronDown/>}
                </button>
              </span>
              {showGirls && (teams.filter(team => team.gender === "girls")).map((team, index) => (
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
