import React from "react";

const SecondaryButton = ({
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
${
  bgColor
    ? `bg-[${bgColor}]`
    : "bg-transparent border border-primary hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
}
${textColor ? `text-[${textColor}]` : "text-primary"}
${width ? `w-[${width}]` : "w-full"}
${height ? `h-[${height}]` : "h-fit"}
${maxWidth ? `max-w-[${maxWidth}]` : "max-w-[300px]"}
${maxHeight ? `max-h-[${maxHeight}]` : "max-h-none"}
${minWidth ? `min-w-[${minWidth}]` : "min-w-[120px]"}
${minHeight ? `min-h-[${minHeight}]` : "min-h-0"}
${roundedNumber ? `rounded-[${roundedNumber}]` : "rounded-[8px]"}
px-6 py-3 transition-all duration-300 ease-out cursor-pointer text-xs font-bold
`}
    >
      {buttonText ? buttonText : "Secondary"}
    </button>
  );
};

export default SecondaryButton;
