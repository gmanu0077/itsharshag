import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export function WallOfLoveAndGratitude() {
  return (
    <section id="loves" className="w-full lg:py-20 py-10">
      <div className="px-4 grid  items-center justify-center gap-6 text-center md:px-6">
        <div className="space-y-6 text-center">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-blue-500 ",
              montserrat.className
            )}
          >
            Wall of Love
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Making a difference in the lives of people is what keeps me
            motivated
          </p>
        </div>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden text-left">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I never said this but now I have to @itsharshag ser is my inspiration like for the work perceptive.",
    name: "Yash Suthar",
    title: "",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1793972245486039040/NbvXEdFR_400x400.jpg",
    link: "https://x.com/yashere_23/status/1790585061810606111",
  },
  {
    quote:
      "You're one of the very first people on twitter who i got the inspiration to build my own products, I'll give it my all to make you proud broski ⚡",
    name: "Monarch",
    title: "",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1787844055004483585/l3YyaCmO_400x400.jpg",
    link: "https://x.com/Monarch_sv/status/1759279060759257221",
  },
  {
    quote: "Thanks Harsh! You inspire me to tweet my winnings lol 🤝🏻",
    name: "Vibhuti",
    title: "",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1791152190717034496/rVJLXHo7_400x400.jpg",
    link: "https://x.com/BafnaVibhuti/status/1788946463197671648",
  },

  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  //   imgSrc:
  //     "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  //   imgSrc:
  //     "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  // },
];
