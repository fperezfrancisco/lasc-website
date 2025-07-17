import React from "react";

const BannerLascTheme = ({ children, timeline }) => {
  return (
    <div
      id="lascBanner"
      className={`w-full h-full flex items-center justify-center px-2 py-[32px] rounded-[8px] bg-red-100 md:min-h-[265px] relative
        ${timeline ? "flex-col items-center md:flex-row " : "flex-row"}
      `}
    >
      <img
        src="/noise-img.png"
        alt=""
        className="w-full h-full absolute inset-0 z-0 rounded-[8px]"
      />
      {children}
    </div>
  );
};

export default BannerLascTheme;
