import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="relative flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-[80vh] bg-transparent text-white items-center justify-center p-4">
      <div className="absolute inset-0 mx-auto my-auto w-[95%] lg:w-[80%] h-[90%] bg-neutral-100 -z-10 rounded-[8px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 bg-black/50"></div>
        <img
          src="/soccerBallStock.jpg"
          className="object-cover object-bottom bottom-0 my-auto"
          alt=""
        />
      </div>
      <h1 className="text-5xl lg:text-6xl font-extrabold w-full max-w-[500px] lg:max-w-[unset] text-center z-20">
        Page is Coming Soon!
      </h1>
      <p className="max-w-[350px] lg:max-w-[450px] text-center my-4 z-20">
        This page is currently under maintanence, please come back at a later
        time to check out the content on this page.
      </p>
    </div>
  );
};

export default ComingSoonPage;
