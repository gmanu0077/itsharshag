"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn, videosData } from "@/lib/utils";
import { Button } from "./ui/button";
import { PinContainer } from "./ui/3d-pin";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
});

const PressVideos = () => {
  const [displayCount, setDisplayCount] = useState(3);

  const loadMoreVideos = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  return (
    <section id="videos" className="py-8 mt-12">
      <div className="mx-auto">
        <h2
          className={cn(
            "text-center text-4xl font-bold underline underline-offset-8 decoration-blue-500 ",
            montserrat.className
          )}
        >
          Featured Videos
        </h2>
        <div className="flex flex-col gap-8 max-w-6xl mx-auto px-8 py-10">
          {videosData.slice(0, displayCount).map((video, index) => (
            <div
              className="flex tracking-tight text-slate-100/50 w-full gap-4"
              style={{
                backgroundColor: "rgb(28, 28, 28)",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?si=shYdzhDvsdFIoBT6`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="min-w-[240px] flex-1">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-base text-slate-100">
                  {video.title}
                </h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        {displayCount < videosData.length && (
          <div className="flex justify-center p-6">
            <Button className=" px-4 py-2 rounded-md" onClick={loadMoreVideos}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressVideos;
