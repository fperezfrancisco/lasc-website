"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import LightModeSwitch from "./ui/LightModeSwitch";
import { navList } from "@/lib/data/navList";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Icon (only on mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
        aria-label="Open menu"
      >
        <Menu className="size-[28px]" />
      </button>

      {/* Overlay / Menu Panel */}
      <div
        className={clsx(
          "fixed inset-0 z-50 transition-transform duration-300 ease-out xl:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Backdrop (optional, can remove if unwanted) */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        {/* Menu Drawer */}
        <div className="relative ml-auto h-screen min-h-[600px] w-full max-w-[300px] bg-white dark:bg-zinc-900 p-4 flex flex-col items-start shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 rounded-md text-text cursor-pointer transition-all hover:scale-105 duration-300 ease-out"
            aria-label="Close menu"
          >
            <X className="size-[28px]" />
          </button>

          {/* Menu content goes here */}
          <p className="text-sm text-zinc-600 mt-10">Navigation</p>
          <nav className="w-full flex mt-4 text-text">
            <ul className="w-full flex flex-col px-2 items-start gap-5">
              {navList.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-semibold text-sm hover:text-red-500 hover:underline hover:underline-offset-10 transition-all duration-200 ease-out"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 mt-8">
            <a
              className={`flex md:hidden text-xs font-bold px-4 py-2 border border-text text-text rounded-[8px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
              href="mailto:jared.white@lasc-scv.org"
            >
              Contact Us
            </a>
            <a
              className="flex md:hidden text-xs font-bold px-4 py-2 rounded-[8px] bg-[#C51010] hover:bg-[#920C0C] text-white"
              href="http://lascscv.byga.net/tryouts/q5ynru4a6j/signup"
              target="_blank"
            >
              Tryout Form
            </a>
          </div>
          <span className="flex md:hidden mt-4">
            <LightModeSwitch />
          </span>
        </div>
      </div>
    </>
  );
}
