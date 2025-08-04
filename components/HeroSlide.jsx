"use client";
import Link from "next/link";
import SecondaryButton from "./SecondaryButton";
import { useRouter } from "next/navigation";
import PrimaryButton from "./PrimaryButton";
import { BASE_URL } from "@/utils/api";

export function HeroSlide({
  image,
  imageSmall,
  heading,
  text,
  buttonText,
  buttonLink,
  noOverlay,
}) {
  const router = useRouter();
  const imageUrl = `${BASE_URL}${image.url}`;
  const imageSmallUrl = imageSmall ? `${BASE_URL}${imageSmall.url}` : "";
  return (
    <div className="relative w-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] bg-cover bg-center rounded-[8px] bg-neutral-200 overflow-hidden px-[32px]">
      {imageSmall ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center sm:hidden"
            style={{ backgroundImage: `url(${imageSmallUrl})` }}
          />

          <div
            className="absolute inset-0 bg-cover bg-center hidden sm:block"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      {!noOverlay && <div className="absolute inset-0 bg-black/50" />}
      {/* overlay */}
      <div className="relative z-10 flex flex-col justify-end pb-12 md:pb-none md:justify-center items-start h-full p-6 sm:p-10 text-white space-y-0">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-extrabold">
          {heading}
        </h2>
        <p className="text-sm sm:text-base max-w-lg mt-2 mb-4 w-[75%]">
          {text}
        </p>
        {buttonLink && (
          <PrimaryButton
            width={"200px"}
            buttonText={buttonText}
            action={() => router.push(buttonLink)}
          />
        )}
      </div>
    </div>
  );
}
