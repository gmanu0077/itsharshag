import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import imgSrc from "../public/my-photo.jpg";
import HeroImg from "./HeroImg";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const HeroSection = () => {
  return (
    <section id="home" className="w-full pt-5 md:pt-24 lg:pt-10">
      <div className="space-y-10 xl:space-y-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 ">
          <div className="mt-20 w-80 h-80 relative lg:col-span-1 hidden lg:block">
            <HeroImg imgSrc={imgSrc} />
          </div>
          <div className="space-y-6 flex flex-col col-span-2 justify-center ">
            <h1 className="text-4xl lg:text-7xl font-bold">
              <span className={montserrat.className}>I'm</span>
              <br />{" "}
              <span
                className={cn(
                  "underline underline-offset-8 decoration-blue-500",
                  montserrat.className
                )}
              >
                Manu Goel
              </span>
              <br />
            </h1>
            <p> Dynamic and innovative Full-Stack Developer </p>

            <div className="flex gap-8">
              <div>
                <img
                  src="/book-cover-optimized.jpg"
                  className="w-[200px] h-auto"
                />
              </div>
              <div>
                <p className="text-md text-gray-400 m-0 p-0">
                  Software Developer with strong expertise in front-end and back-end
 technologies, including JavaScript, TypeScript, Node.js, React, Redux, and PostgreSQL
                </p>
                <ul
                  className="m-0 mb-4 pl-4 text-gray-400"
                  style={{ marginTop: 0, listStyleType: "disc" }}
                >
                  <li>
                  Proficient in SQL
 and NoSQLdatabases, with a proven track record in startup environments, leading teams, and driving
 technological innovation.
                  </li>
                  <li>
                  Experienced in developing scalable applications, with a focus on AI integration
 and user experience
                  </li>
                  <li>
                    Building startups 
                  </li>
                  <li>and a lot more!</li>
                </ul>

                {/* <Link
                  href="https://itsharshagrawal.gumroad.com/l/journey"
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="px-4 py-2 rounded-md">Explore</Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
