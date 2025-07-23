import React from "react";

const PrimaryButton = ({
  buttonText,
  bgColor,
  textColor,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  roundedNumber,
  action,
}) => {
  return (
    <button
      onClick={action}
      className={`
    ${bgColor ? `bg-[${bgColor}]` : "bg-[#C51010] hover:bg-[#920C0C]"}
    ${textColor ? `text-[${textColor}]` : "text-white"}
    ${width ? `w-[${width}]` : "w-full"}
    ${height ? `h-[${height}]` : "h-fit"}
    ${maxWidth ? `max-w-[${maxWidth}]` : "max-w-[300px]"}
    ${maxHeight ? `max-h-[${maxHeight}]` : "max-h-none"}
    ${minWidth ? `min-w-[${minWidth}]` : "min-w-[140px]"}
    ${minHeight ? `min-h-[${minHeight}]` : "min-h-0"}
    ${roundedNumber ? `rounded-[${roundedNumber}]` : "rounded-[8px]"}
    px-2 py-3 transition-all duration-300 ease-out cursor-pointer text-xs font-bold
  `}
    >
      {buttonText ? buttonText : "Primary"}
    </button>
  );
};

export default PrimaryButton;
