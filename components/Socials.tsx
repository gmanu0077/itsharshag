import { SiTwitter, SiInstagram, SiYoutube, SiLinkedin } from "react-icons/si";
import { LinkedinIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
});
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Socials = () => {
  return (
    <section id="socials" className="w-full py-6">
      <div className="px-4 grid  items-center justify-center gap-6 text-center md:px-6">
        <div className="space-y-6 text-center">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-blue-500 ",
              montserrat.className
            )}
          >
            Connect and Explore more
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ">
            Feel free to visit any of my social media sccounts if you wanna chat
            or explore more of my content
          </p>
        </div>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={socialsData} />
        </div>
      </div>
    </section>
  );
};

export default Socials;

const socialsData = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/itsharshag",
    followers: "6200+",
    icon: (
      <SiTwitter className="bg-white rounded-full w-full h-full text-blue-500 hover:scale-125 transition-all" />
    ),
    handle: "@itsharshag",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/itsharshag",
    followers: "5200+",
    icon: (
      <SiLinkedin className="bg-blue-500 rounded-full  w-full h-full text-blue-500hover:scale-125 transition-all" />
    ),
    handle: "@itsharshag",
  },
  {
    id: 5,
    name: "YouTube (Tech)",
    url: "https://www.youtube.com/HarshAgrawalOG",
    followers: "300+",
    icon: (
      <SiYoutube className="bg-white rounded-full w-full h-full text-blue-500 hover:scale-125 transition-all" />
    ),
    handle: "@HarshAgrawalOG",
  },
  {
    id: 3,
    name: "Instagram (Tech)",
    url: "https://instagram.com/itsharshag",
    followers: "400+",
    icon: (
      <SiInstagram className="bg-blue-500 rounded-full  w-full h-full text-white hover:scale-125 transition-all" />
    ),
    handle: "@_itsharshag",
  },
  {
    id: 6,
    name: "YouTube (Travel)",
    url: "https://www.youtube.com/@HarshAgrawalVlogs",
    followers: "30+",
    icon: (
      <SiYoutube className="bg-white rounded-full w-full h-full text-blue-500 hover:scale-125 transition-all" />
    ),
    handle: "@HarshAgrawalVlogs",
  },
  {
    id: 4,
    name: "Instagram (Travel)",
    url: "https://instagram.com/_itsharshag",
    followers: "200+",
    icon: (
      <SiInstagram className="bg-blue-500 rounded-full  w-full h-full text-white hover:scale-125 transition-all" />
    ),
    handle: "@_itsharshag",
  },
];
