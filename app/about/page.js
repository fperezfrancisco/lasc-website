"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import PictureAndPara from "@/components/ui/PictureAndPara";
import BannerLascTheme from "@/components/ui/BannerLascTheme";

import StaffCard from "@/components/ui/StaffCard";
import Footer from "@/components/Footer";
import TimelineGraphic from "@/components/TimelineGraphic";
import CoreValuesSection from "@/components/CoreValuesSection";
import { getStaff } from "@/utils/api";

const page = () => {
  const [mounted, setMounted] = useState(false);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const Executives = staff.filter((member) => {
    return member.title === "Executive";
  });

  const Directors = staff.filter((member) => {
    return member.title === "Director";
  });

  const Coaches = staff.filter((member) => {
    return member.title === "Coach";
  });

  //   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // setIsVisible(true);
    async function loadStaff() {
      try {
        const data = await getStaff();
        //console.log("Alumni Data: ", data);

        setStaff(data);
      } catch (err) {
        console.error("Failed to load staff data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadStaff();

    if (typeof window === "undefined") return;

    const { hash } = window.location;
    if (hash) {
      // Try a few frames in case content loads a tick later
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      // run now and shortly after to be safe
      tryScroll();
      requestAnimationFrame(tryScroll);
      setTimeout(tryScroll, 100);
    }
  }, []);

  if (!mounted) {
    return null; // optional: return loading spinner or blank
  }

  return (
    <>
      <Header />
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen text-text`}
      >
        {/* About section starts here */}
        {/* <main className="mt-12 w-full flex flex-col gap-5 px-4"> */}
        <main className={`w-full flex flex-col gap-5 px-4`}>
          {/* <main
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } mt-12 w-full flex flex-col gap-5 px-4`}
        > */}
          <section className="w-full flex flex-col items-center gap-5 mb-12">
            <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-black dark:border-white px-4 py-2">
              About Us
            </h1>
            <PictureAndPara
              title={"Our Origins"}
              subHeader="Who We Are"
              image="/lasc-girls-defending.jpg"
              imageFirst={true}
              text={
                "SCV Magic was established in 1998 with a passion for player development, quality professional coaching and teams competing at the highest levels of youth soccer.  SCV Magic Soccer Club is a 'dba' for the Santa Clarita Valley Soccer Association, that became a not for profit 501 (c)3 corporation in September 2000.  We are most proud of our college placement success. Each and every year numerous players matriculate into the college ranks playing soccer at universities all across the United States.To enable an even more successful path for the players in our program, SCV Magic in 2015 became an affiliate of Real So Cal, one of the best soccer clubs in the country, changing our name to Real So Cal-SCV. This affiliation allowed for the soccer program resources to be shared between the two clubs. This affiliation is also based on respect, familiarity with players and coaches, and shared soccer ideologies, and to unify our respective geographic areas.  In June 2021 Real So Cal-SCV evolved once again to become LAFC So Cal Youth-SCV, being part of a unique partnership with one of Major League Soccer's finest organizations.  In February of 2025, our Board of Directors along with the Administrative staff, respectfully ended the affiliation with LAFC.  With the ever changing landscape of youth club soccer, an opportunity presented itself to partner with Los Angeles Soccer Club and join the Elite Academy League, placing a number of our boys team in EA-2.  While a new name (LASC-SCV), logo and identity has been established, the club's history, growth, and development in the past 25 years is what we are proud of the most."
              }
            />
          </section>

          <BannerLascTheme timeline={true}>
            <TimelineGraphic />
          </BannerLascTheme>
          <section className="mt-12 w-full flex flex-col items-center gap-5 mb-12">
            <PictureAndPara
              title={"Our Mission Statement"}
              imageFirst={false}
              image="/lasc-boys-shot.jpg"
              text={
                "LASC-SCV mission is to provide a positive learning environment that enhances the development of both the physical and psychological components of soccer, along with the technical skills and tactical knowledge of the game. Through the work of our coaching leadership, along with our philosophy and core values, we strive to guide our players to make a positive contribution in a team environment, community, and to pursue the enjoyment and passion for the sport of soccer throughout their lives"
              }
            />
          </section>
          <CoreValuesSection />

          {/* Staff Cards */}
          <section className="w-full flex flex-col mb-12 items-center gap-12">
            {/* Executive Directors */}
            <div className="flex flex-col items-center gap-2">
              <h4 className={`text-md`}>Board and Staff</h4>
              <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
                Executive Board Members
              </h2>
            </div>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center mb-6">
              {Executives.length > 0
                ? Executives.map((member, index) => (
                    <StaffCard
                      key={index}
                      name={member.name}
                      position={member.position}
                      image={member.image}
                    />
                  ))
                : Array(5)
                    .fill(0)
                    .map((_, index) => <StaffCard key={index} />)}
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
              2025/26 Club Directors
            </h2>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-6">
              {Directors.length > 0
                ? Directors.map((member, index) => (
                    <StaffCard
                      key={index}
                      name={member.name}
                      position={member.position}
                      image={member.image}
                    />
                  ))
                : Array(3)
                    .fill(0)
                    .map((_, index) => <StaffCard key={index} />)}
            </div>
            <h2 id="staff" className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
              2025/26 Coaching Staff
            </h2>
            <section className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-6">
              {Coaches.length > 0
                ? Coaches.map((member, index) => (
                    <StaffCard
                      key={index}
                      name={member.name}
                      position={member.position}
                      image={member.image}
                    />
                  ))
                : Array(6)
                    .fill(0)
                    .map((_, index) => <StaffCard key={index} />)}
            </section>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
