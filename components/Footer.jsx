import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-[32px] md:py-[64px] lg:py[120px] bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <img src="lasc-black-logo.png" className="w-[96px]" />
      </div>
      <ul className="w-fit flex flex-col sm:flex-row items-center justify-center gap-4 font-medium text-sm">
        <li className="hover:text-red-400">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/">Terms & Conditions</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/">Club Policies</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/">Parent Handbook</a>
        </li>
      </ul>
      <div className="text-xs my-4">
        <p>
          2025 Los Angeles Soccer Club Santa Clarita Valley All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
