"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, SunMedium } from "lucide-react";

export default function LightModeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative cursor-pointer w-[60px] h-[28px] flex items-center rounded-full border border-gray-300 bg-neutral-900 dark:bg-neutral-900 transition-colors duration-300 shadow-sm"
      aria-label="Toggle theme"
    >
      {/* Sliding Thumb */}
      <span
        className={`absolute size-[20px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-[32px]" : "translate-x-[4px]"
        }`}
      />

      {/* Icon inside switch (Sun / Moon) */}
      <span className="absolute left-[6px] text-white">
        <SunMedium className="size-[20px]" />
      </span>
      <span className="absolute right-[4px] text-white">
        <Moon className="size-[20px]" />
      </span>
    </button>
  );
}
