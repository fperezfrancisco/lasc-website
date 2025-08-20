import React from "react";

const AccompCard = ({ image, title, date }) => {
  return (
    <div className="w-full h-full px-4 flex flex-col gap-4 items-center">
      {/* Card container with background */}
      <div
        className="relative w-full max-w-[450px] rounded-[6px] overflow-hidden bg-neutral-200 aspect-[4/3]" 
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
      {/* Text Container */}
      <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-medium italic">{date}</h4>
            <h2 className="text-2xl lg:text-3xl font-extrabold uppercase">
                {title}
            </h2>
        </div>
    </div>
  );
};

export default AccompCard;
