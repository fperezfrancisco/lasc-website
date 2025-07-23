"use client";
import ComingSoonPage from "@/components/ComingSoonPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  return (
    <>
      <Header />
      <ComingSoonPage />
      <Footer />
    </>
  );
};

export default page;
