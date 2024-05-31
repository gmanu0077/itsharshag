import React from "react";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaCartArrowDown } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export function Products() {
  return (
<section id="products" className="w-full py-6">
  <div className="px-4 flex flex-col items-center justify-center gap-6 text-center md:px-6">
    <div className="space-y-6 text-center">
      <h2
        className={cn(
          "text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-blue-500",
          montserrat.className
        )}
      >
        Projects
      </h2>
      <p className="mx-auto max-w-[600px] text-gray-300 text-xl py-4">
        Here are some of my Projects.
      </p>
    </div>
    <div className="w-full flex flex-col items-center gap-10">
      {productsData.map((product, i) => (
        <div
          key={i}
          className={`w-full ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
        >
          <BentoGridItem
            link={product.link}
            title={product.name}
            icon={product.icon}
            description={<div dangerouslySetInnerHTML={{ __html: product.description }} />}
            className={cn("w-full text-lg py-4 ",montserrat.className)} // Increased text size and padding for height
            
          />
        </div>
      ))}
    </div>
  </div>
</section>


  
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const appDescription = `
  <ul style="list-style: none; padding: 0; font-family: 'Montserrat', sans-serif;">
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Technologies:</strong> MERN</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Project:</strong> Developed a versatile beat-making application that allows users to create, store, update, and delete their musical beats.</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>UI Design:</strong> Crafted a sophisticated user interface with intuitive controls for creating and editing beats, complemented by visual elements like waveforms and timeline views.</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Features:</strong> Integrated interactive features for beat manipulation, real-time playback, and customizable beat patterns. Users can also save their projects, make updates, and delete them as needed.</h3></li>
  </ul>
`;

const footballLeagueDescription = `
  <ul style="list-style: none; padding: 0; font-family: 'Montserrat', sans-serif;">
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Technologies:</strong> MERN, MySQL, Sequelize JS</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Project:</strong> Engineered an advanced football league analysis application, enabling users to conduct detailed searches and obtain comprehensive insights into clubs, players, and positions.</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>UI Design:</strong> Designed an advanced user interface, featuring detailed analytics on clubs, players, and positions with tables, graphs, and heatmaps.</h3></li>
    <li><h3 style="font-size: 1.05rem; margin-bottom: 1rem;font-family: 'Montserrat', sans-serif;"><strong>Features:</strong> Implemented rich, interactive data exploration features, significantly enhancing user engagement and insight into football statistics through innovative visualization and analytics tools.</h3></li>
  </ul>
`;


export const productsData = [
  {
    name: "Football League Analysis",
    link: "https://github.com/gmanu0077/football-league-analysis",
    description: footballLeagueDescription,
    // imgSrc: (
      
    // ),
    icon: (
      <Link href="https://github.com/gmanu0077/football-league-analysis">
        <FaGithub className="text-white-500 w-5 h-5" />
      </Link>
    ),
  },
  {
    name: "beat-maker-app",
    link: "https://github.com/gmanu0077/beats-maker-app.git",
    description: appDescription,
    // imgSrc: (
    //   <img
    //     className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
    //     src="/productImg2.png"
    //   />
    // ),
    icon: (
      <Link href="https://github.com/gmanu0077/beats-maker-app.git">
        <FaGithub className="text-white-500 w-5 h-5" />
      </Link>
    ),
  },
  // {
  //   name: "DevKit",
  //   description: "Description of DevKit...",
  //   link: "https://www.getdevkit.com/",
  //   imgSrc: (
  //     <img
  //       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  //       src="/productImg3.png"
  //     />
  //   ),
  //   icon: (
  //     <Link href="https://www.getdevkit.com/">
  //       <FaCartArrowDown className="text-blue-500 w-5 h-5" />
  //     </Link>
  //   ),
  // },
  // {
  //   name: "Devin for Data Analysis",
  //   link: "https://datamagick.com/",
  //   description: "Description of Devin for Data Analysis...",
  //   imgSrc: (
  //     <img
  //       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  //       src="/productImg4.png"
  //     />
  //   ),

  //   icon: (
  //     <Link href="https://datamagick.com/">
  //       <FaCartArrowDown className="text-blue-500 w-5 h-5" />
  //     </Link>
  //   ),
  // },
  // {
  //   name: "Ethereum Developer Tooling Landscape",
  //   link: "https://landscape.dappcamp.xyz/",
  //   description: "Description of Ethereum Developer Tooling Landscape...",
  //   imgSrc: (
  //     <img
  //       className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  //       src="/productImg5.png"
  //     />
  //   ),
  //   icon: (
  //     <Link href="https://landscape.dappcamp.xyz/">
  //       <FaCartArrowDown className="text-blue-500 w-5 h-5" />
  //     </Link>
  //   ),
  // },
];
