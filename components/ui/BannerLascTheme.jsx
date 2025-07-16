import React from "react";

const BannerLascTheme = ({ children }) => {
  return (
    <div
      id="lascBanner"
      className="w-full h-full flex items-center justify-center px-4 py-[64px] rounded-[8px] bg-red-100 min-h-[265px] relative"
    >
      <img
        src="/noise-img.png"
        alt=""
        className="w-full h-full absolute inset-0 z-0"
      />
      {children}
    </div>
  );
};

export default BannerLascTheme;
