"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import PictureAndPara from "@/components/ui/PictureAndPara";
import PrimaryButton from "@/components/PrimaryButton";
import { getPrograms } from "@/utils/api";
import Link from "next/link";

export default function Programs() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [programs, setPrograms] = useState([]);
  const [featuredProgram, setFeaturedProgram] = useState();
  const [loading, setLoading] = useState(true);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    async function loadPrograms() {
      try {
        const programData = await getPrograms();
        console.log(programData);
        setPrograms(programData);
        const mainHero = programData.find(
          (program) => program.programType === "featured"
        );
        setFeaturedProgram(mainHero);
      } catch (err) {
        console.error("Failed to load news data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, []);

  if (!mounted) {
    return null; // optional: return loading spinner or blank
  }

  return (
    <>
      <Header />
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen text-text mb-12`}
      >
        {/* About section starts here */}
        <main className="mt-12 w-full flex flex-col gap-5">
          {/* <main
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } w-full flex flex-col gap-5`}
        > */}
          <section className="w-full flex flex-col items-center justify-center mb-12">
            <div className="w-full px-4 lg:px-6 py-4 flex">
              <div className="relative w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] bg-neutral-200 overflow-hidden">
                {/* <img src="" /> */}

                <img
                  src="/elite-roots-main.png"
                  className="object-cover object-center h-full sm:w-full hidden sm:block"
                />
                <img
                  src="/elite-roots-small.png"
                  className="object-cover object-center h-full w-auto sm:h-auto sm:w-full block sm:hidden"
                />
                <div className="absolute w-full inset-0 h-full bg-black/25 z-10"></div>
                <div className="absolute z-20 w-full inset-0 h-full flex flex-col items-start justify-end sm:justify-center p-4 text-white">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-extrabold">
                    Elite Roots Program
                  </h2>
                  <h3 className="text-3xl">
                    Boys & Girls born 2019 & 2020 only
                  </h3>
                  <p className="text-sm sm:text-base max-w-lg mt-2 mb-4 w-[75%]">
                    Contact Afsheen for more info
                  </p>
                  <PrimaryButton buttonText={"Register Now"} width={"200"} />
                </div>
              </div>
            </div>
          </section>

          {/* More Programs Here */}
          <section className="w-full flex flex-col justify-center items-center px-8 sm:px-6 mb-24">
            <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-black dark:border-white px-4 py-2">
              Programs
            </h1>
            {!loading &&
              programs
                .sort((a, b) => a.order - b.order)
                .map((program, idx) => (
                  <PictureAndPara
                    key={program.id}
                    title={program.title}
                    image={program.image.url}
                    text={program.Description}
                    button={program.buttonText && program.link ? (
                      <Link href={program.link}>
                        <PrimaryButton
                        buttonText={program.buttonText}
                        width={"200"}
                      />
                      </Link>
                    ) : null}
                  />
                ))}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
