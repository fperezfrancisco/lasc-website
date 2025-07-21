"use client";

import "../globals.css";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { teams } from "../../lib/data/team";
import Footer from "@/components/Footer";
import TeamCard from "@/components/ui/TeamCard";
import PictureAndPara from "@/components/ui/PictureAndPara";

export default function Programs() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, [])

  return (
    <>
        <Header />
        <div
        className={`flex flex-col w-full max-w-[2000px] mx-auto my-0 h-full min-h-screen text-text mb-12`}
        >
            {/* About section starts here */}
            {/* <main className="mt-12 w-full flex flex-col gap-5"> */}
            <main className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} mt-12 w-full flex flex-col gap-5`}>
                <section className="w-full flex flex-col items-center justify-center mb-12">
                    <div className="w-full px-4 lg:px-6 py-4 flex">
                        <div className="w-full h-full aspect-3/4 sm:aspect-video min-h-[300px] md:max-h-[700px] rounded-[8px] bg-neutral-200">
                            {/* <img src="" /> */}
                        </div>
                          
                    </div>
                </section>

                {/* More Programs Here */}
                <section className="w-full flex flex-col justify-center items-center px-8 sm:px-6 mb-24">
                    <h1 className="w-fit text-center text-4xl font-bold mb-4 border-b-4 border-black dark:border-white px-4 py-2">
                        Programs
                    </h1>
                    <PictureAndPara
                        title={'Elite Academy Programs'}
                        image={'/youthSoccer1.jpg'}
                        text={'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}
                    />
                    <PictureAndPara 
                        title={'Grassroots Programs'}
                        image={'/youthSoccer1.jpg'}
                        text={'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}
                    />
                    <PictureAndPara 
                        title={'Friday Skills and GK Training'}
                        image={'/youthSoccer1.jpg'}
                        text={'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}
                    />
                </section>
            </main>
        </div>

        <Footer />
    </>
  );
}
