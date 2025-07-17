"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import PictureAndPara from "@/components/ui/PictureAndPara";
import BannerLascTheme from "@/components/ui/BannerLascTheme";
import { staff } from "../../lib/data/staff";
import StaffCard from "@/components/ui/StaffCard";
import Footer from "@/components/Footer";

export default function About() {
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

  return (
    <div
      className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen text-text`}
    >
      <Header />
      {/* About section starts here */}
      <main className="mt-12 w-full flex flex-col gap-5 px-4">
        <section className="w-full flex flex-col items-center gap-5 mb-12">
          <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-white px-4 py-2">
            About Us
          </h1>
          <PictureAndPara
            title={"We Are LASC-SFV"}
            image="/youthSoccer1.jpg"
            imageFirst={true}
            text={
              "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
            }
          />
        </section>

        <BannerLascTheme></BannerLascTheme>
        <section className="mt-12 w-full flex flex-col items-center gap-5 mb-12">
          <PictureAndPara
            title={"Our Mission Statement"}
            imageFirst={false}
            image="/youthSoccer1.jpg"
            text={
              "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
            }
          />
        </section>

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
            {Executives.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.img}
              />
            ))}
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
            2025/26 Club Directors
          </h2>
          <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-6">
            {Directors.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.img}
              />
            ))}
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
            2025/26 Coaching Staff
          </h2>
          <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-6">
            {Coaches.map((member, index) => (
              <StaffCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.img}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
