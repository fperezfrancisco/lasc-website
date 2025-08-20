"use client";
import React from "react";
import PictureAndPara from "./ui/PictureAndPara";
import SecondaryButton from "./SecondaryButton";
import { useRouter } from "next/navigation";

const LandingAboutSection = () => {
  const router = useRouter();
  return (
    <div className="w-full items-center">
      {/* <div className="w-full">
        <div className="w-full h-full aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
          <img src="/youthSoccer1.jpg" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-start w-full lg:max-w-[800px] ">
        <h3 className="text-md font-italic text-text">Who We Are</h3>
        <h2 className="text-2xl lg:text-3xl font-extrabold uppercase text-text">
          We Are LASC-SCV
        </h2>
        <p className="my-6 w-full lg:max-w-[600px]">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>{" "}
      */}
      <PictureAndPara
        title={"We Are LASC-SCV"}
        subHeader={"Who We Are"}
        image="/lasc-girls-defending-3.jpg"
        text={
          "LASC-SCV mission is to provide a positive learning environment that enhances the development of both the physical and psychological components of soccer, along with the technical skills and tactical knowledge of the game. Through the work of our coaching leadership, along with our philosophy and core values, we strive to guide our players to make a positive contribution in a team environment, community, and to pursue the enjoyment and passion for the sport of soccer throughout their lives"
        }
        button={
          <SecondaryButton
            buttonText={"More About Us"}
            maxWidth={"300px"}
            action={() => router.push("/about")}
          />
        }
      />
    </div>
  );
};

export default LandingAboutSection;
