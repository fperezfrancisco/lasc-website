"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const QuickActionBox = ({
  boxTitle,
  boxSubtitle,
  boxAction,
  boxImg,
  boxImgAlt,
  boxImgDescription,
  boxImg2,
  isDark,
}) => {
  return (
    <div
      id="quickActionBox"
      className={`aspect-square rounded-[8px] border flex flex-col items-center overflow-hidden
      ${
        isDark
          ? "bg-black text-text border-neutral-100/50 shadow-[0px 0px 10px 0px rgba(255, 255, 255, 0.50) inset;]"
          : "bg-white text-text border-neutral-200/50"
      }
    `}
    >
      <div className="w-full h-[80%] xl:h-[85%] bg-neutral-200 overflow-hidden relative">
        <div className="hidden absolute inset-0 w-full h-full bg-red-600/40 z-0"></div>
        <img
          src={boxImg}
          alt={boxImgAlt}
          className="object-cover w-full duration-300 ease-out transition-all object-bottom hover:scale-110 ease-out duration-200"
        />
      </div>
      <div className="w-full h-[20%] xl:h-[15%] p-2 flex flex-col items-center justify-center">
        <h2 className="text-md xl:text-lg font-medium capitalize">
          {boxTitle ? boxTitle : "Box Title"}
        </h2>
      </div>
    </div>
  );
};

export default QuickActionBox;
