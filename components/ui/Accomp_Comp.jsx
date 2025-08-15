import React from "react";

const AccompComp = ({ header,  list, paragraph, image}) => {
  return (
    <div
      id="lascBanner"
      className='w-full h-auto flex flex-col md:flex-row gap-10 items-center justify-between px-10 lg:px-25 py-[100px] rounded-[8px] bg-red-100 md:min-h-[265px] relative text-white'
    >
      <img
        src="/noise-img.png"
        alt=""
        className="w-full h-full absolute inset-0 z-0 rounded-[8px]"
      />
      <div className="w-full flex flex-col gap-4">
        <img src={image} alt="" className="absolute top-[-120px] left-30 lg:left-40 w-[180px] h-auto"/>
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold z-1 mt-8">{header}</h1>
        <ul className="list-disc list-inside font-medium z-1">
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      <p className="w-full text-sm md:text-md lg:text-lg z-1 font-medium">{paragraph}</p>
    </div>
  );
};

export default AccompComp;
