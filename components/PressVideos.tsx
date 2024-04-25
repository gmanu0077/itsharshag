'use client'
import React, { useState } from "react";
import Link from "next/link";
import { cn, videosData } from "@/lib/utils";
import { Button } from "./ui/button";
import { PinContainer } from "./ui/3d-pin";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({

  subsets: ['latin'],

})

const PressVideos = () => {
  const [displayCount, setDisplayCount] = useState(3); 

  const loadMoreVideos = () => {
    setDisplayCount(prevCount => prevCount + 3);
  };

  return (
    <section id="videos" className="py-8">
    <div className=" mx-auto">
      <h2 className={cn("text-4xl font-bold underline underline-offset-8 decoration-green-500 ",montserrat.className)}>Press Sectioin X Featured Videos</h2>
    <div className="max-w-6xl mx-auto px-8 grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
          {videosData.slice(0, displayCount).map((video, index) => (
            <Link href={video.embedUrl} key={index}>
         <div className="h-[25rem] w-full flex items-center justify-center ">
         <PinContainer 
           title={video.embedUrl}
           href={video.embedUrl}
         >
           <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
             <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               {video.title}
             </h3>
             <div className="text-base !m-0 !p-0 font-normal">
               <span className="text-slate-500 ">
                 
               </span>
             </div>
             <img
             src={video.imgSrc}
          
             className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
           </div>
         </PinContainer>
       </div>
       </Link>
          ))}
        </div>
        {displayCount < videosData.length && (
          <div className="flex justify-center p-6">
            <Button
              className=" px-4 py-2 rounded-md"
              onClick={loadMoreVideos}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressVideos;
