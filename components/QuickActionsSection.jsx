"use client";
import React from "react";
import QuickActionBox from "./QuickActionBox";
import { useRouter } from "next/navigation";

const QuickActionsSection = ({ isDark }) => {
  const router = useRouter();

  return (
    <section className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[96px] flex flex-col gap-8 md:gap-12 items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">
        Elite Development is Here
      </h2>
      <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 lg:gap-6 w-full mx-auto">
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Our Teams"}
          boxImg={"/heroImgs/lascTeamGirls.png"}
          boxAction={() => router.push("/teams")}
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Our Programs"}
          boxImg={"/heroImgs/lascTraining2.png"}
          boxAction={() => router.push("/programs")}
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Tryout Info"}
          boxImg={"/heroImgs/lascTraining.png"}
          boxAction={() =>
            window.open(
              "https://lascscv.byga.net/tryouts/3hi1j6z0od/signup?tryout_id=3hi1j6z0od",
              "_blank"
            )
          }
        />
        <QuickActionBox
          isDark={isDark}
          boxTitle={"Get in Touch"}
          boxImg={"/heroImgs/lascTraining2.png"}
          boxAction={() => router.push("/")}
        />
      </div>
    </section>
  );
};

export default QuickActionsSection;
