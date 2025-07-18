"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { Switch } from "./ui/switch";
import LightModeSwitch from "./ui/LightModeSwitch";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Decide the background based on scroll + theme
  const backgroundClass = isScrolled
    ? resolvedTheme === "dark"
      ? "bg-black/90"
      : "bg-white/90"
    : "bg-transparent";
  return (
    <header
      className={`w-full px-4 lg:px-6 py-2 sticky z-50 top-0 mx-auto h-fit flex items-center justify-between 
      ${isScrolled ? "shadow-md" : ""} ${backgroundClass}
      `}
    >
      <a href="/">
        <span className="h-fit">
          <img
            src="/lasc-black-logo.png"
            className="w-[32px] md:w-[40px] lg:w-[48px] h-auto"
          />
        </span>
      </a>

      <nav className="hidden text-text xl:flex items-center mx-4">
        <ul className="w-full flex items-center gap-5">
          <li>
            <a
              href="/"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/teams"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              Teams
            </a>
          </li>
          <li>
            <a
              href="/programs"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              News & Updates
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              Accomplishments
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold text-sm lg:text-lg hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
            >
              Alumni
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <a
            className={`hidden md:flex text-xs font-semibold px-4 py-2 border rounded-[8px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
            href="/"
          >
            Contact Us
          </a>
          <a
            className="hidden md:flex text-xs font-semibold px-4 py-2 rounded-[8px] bg-[#C51010] hover:bg-[#920C0C] text-white"
            href="/"
          >
            Tryout Form
          </a>
        </div>
        <span className="hidden md:flex">
          <LightModeSwitch />
        </span>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
