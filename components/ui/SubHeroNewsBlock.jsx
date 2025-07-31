import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

const SubHeroNewsBlock = ({
  newsImgWide,
  newsImgPortrait,
  newsImgSquare,
  newsTitle,
  newsDate,
  newsAction,
  newsTextPreview,
}) => (
  <div className="row-span-1 w-full h-full min-h-[275px] lg:min-h-0 lg:w-full lg:h-full col-span-1 lg:col-span-3 rounded-[8px] grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <div className="bg-neutral-200 rounded-[4px] aspect-video sm:aspect-[unset] w-full h-full overflow-hidden">
      <img
        src={newsImgWide}
        alt=""
        className="object-cover h-auto w-full sm:h-full"
      />
    </div>
    <div className="w-full h-full flex flex-col items-start justify-end py-2">
      <h2 className="leading-none font-semibold text-md md:text-lg">
        {newsTitle}
      </h2>
      <p className="text-xs md:text-sm font-medium">{newsDate}</p>
      <p className="text-xs md:text-sm my-4 text-neutral-500 font-medium line-clamp-3">
        {newsTextPreview}
      </p>
      <Link
        href={"/"}
        className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm flex items-center gap-2"
      >
        Read More <ArrowRightCircle className="size-4" />
      </Link>
    </div>
  </div>
);

export default SubHeroNewsBlock;
