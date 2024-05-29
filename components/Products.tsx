import React from "react";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaCartArrowDown } from "react-icons/fa";
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
      <div className="px-4 grid  items-center justify-center gap-6 text-center md:px-6">
        <div className="space-y-6 text-center">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-blue-500 ",
              montserrat.className
            )}
          >
            Projects and Products
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Here are some of my Products.
          </p>
        </div>
        <BentoGrid className="max-w-4xl mx-auto grid gap-10">
          {productsData.map((product, i) => (
            <BentoGridItem
              link={product.link}
              key={i}
              title={product.name}
              description={product.description}
              header={product.imgSrc}
              icon={product.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
export const productsData = [
  {
    name: "Mini-book",
    link: "https://itsharshagrawal.gumroad.com/l/journey",
    description: "Description of mini-book...",
    imgSrc: (
      <img
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        src="/productImg1.png"
      />
    ),
    icon: (
      <Link href="https://itsharshagrawal.gumroad.com/l/journey">
        <FaCartArrowDown className="text-blue-500 w-5 h-5" />
      </Link>
    ),
  },
  {
    name: "Cohort-based Course",
    link: "https://www.notion.so/faf7b81ea9f748f19884329a1d3e6598?pvs=21",
    description: "Description of cohort-based course...",
    imgSrc: (
      <img
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        src="/productImg2.png"
      />
    ),
    icon: (
      <Link href="https://www.notion.so/faf7b81ea9f748f19884329a1d3e6598?pvs=21">
        <FaCartArrowDown className="text-blue-500 w-5 h-5" />
      </Link>
    ),
  },
  {
    name: "DevKit",
    description: "Description of DevKit...",
    link: "https://www.getdevkit.com/",
    imgSrc: (
      <img
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        src="/productImg3.png"
      />
    ),
    icon: (
      <Link href="https://www.getdevkit.com/">
        <FaCartArrowDown className="text-blue-500 w-5 h-5" />
      </Link>
    ),
  },
  {
    name: "Devin for Data Analysis",
    link: "https://datamagick.com/",
    description: "Description of Devin for Data Analysis...",
    imgSrc: (
      <img
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        src="/productImg4.png"
      />
    ),

    icon: (
      <Link href="https://datamagick.com/">
        <FaCartArrowDown className="text-blue-500 w-5 h-5" />
      </Link>
    ),
  },
  {
    name: "Ethereum Developer Tooling Landscape",
    link: "https://landscape.dappcamp.xyz/",
    description: "Description of Ethereum Developer Tooling Landscape...",
    imgSrc: (
      <img
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        src="/productImg5.png"
      />
    ),
    icon: (
      <Link href="https://landscape.dappcamp.xyz/">
        <FaCartArrowDown className="text-blue-500 w-5 h-5" />
      </Link>
    ),
  },
];
