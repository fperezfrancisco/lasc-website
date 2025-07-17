import Link from "next/link";

export function HeroSlide({
  image,
  imageSmall,
  heading,
  text,
  buttonText,
  buttonLink,
  noOverlay,
}) {
  return (
    <div className="relative w-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] bg-cover bg-center rounded-[8px] bg-neutral-200 overflow-hidden px-[32px]">
      {imageSmall ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center sm:hidden"
            style={{ backgroundImage: `url(${imageSmall})` }}
          />

          <div
            className="absolute inset-0 bg-cover bg-center hidden sm:block"
            style={{ backgroundImage: `url(${image})` }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {!noOverlay && <div className="absolute inset-0 bg-black/50" />}
      {/* overlay */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-6 sm:p-10 text-white space-y-0">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl uppercase font-extrabold">
          {heading}
        </h2>
        <p className="text-sm sm:text-base max-w-lg">{text}</p>
        {buttonLink && (
          <Link
            href={buttonLink}
            className="mt-8 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 transition"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
