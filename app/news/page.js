"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsPageHero from "@/components/NewsPageHero";
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
      <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen bg-transparent text-text `}
      >
        <NewsPageHero />
      </div>
      <Footer />
    </>
  );
};

export default page;
