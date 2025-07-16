"use client";

import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/HeroSection";
import QuickActionsSection from "@/components/QuickActionsSection";
import LandingAboutSection from "@/components/LandingAboutSection";
import StatSection from "@/components/StatSection";
import LandingNewsSection from "@/components/LandingNewsSection";
import Footer from "@/components/Footer";

/** bg-linear-180 from-[#0a0a0a] to-[#2C0404] dark:bg-linear-180 dark:from-[#0a0a0a] dark:to-[#2C0404] */

export default function Home() {
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
        <HeroSection />
        <QuickActionsSection isDark={isDark} />
        <LandingAboutSection />
        <StatSection />
        <LandingNewsSection />
      </div>
      <Footer />
    </>
  );
}
