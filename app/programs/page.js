"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import PictureAndPara from "@/components/ui/PictureAndPara";
import PrimaryButton from "@/components/PrimaryButton";

export default function Programs() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
      setMounted(true);
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
            <PictureAndPara
              title={"Elite Academy Programs"}
              image={"/youthSoccer1.jpg"}
              text={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
              }
            />
            <PictureAndPara
              title={"Grassroots Programs"}
              image={"/youthSoccer1.jpg"}
              text={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
              }
            />
            <PictureAndPara
              title={"Friday Skills and GK Training"}
              image={"/youthSoccer1.jpg"}
              text={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
              }
            />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
