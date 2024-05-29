import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface VideoProps {
  title: string;
  description: string;
  videoId: string;
  // embedUrl: string;
  // imgSrc: string;
  // views: string;
  // channel: string;
}
export const videosData: VideoProps[] = [
  {
    title: "The Indian Edtech Story",
    description:
      "Got featured on the 1st episode of The Indian Edtech Story, a Docuseries on Hotstar (Netflix of India). Coding Ninjas covered my story of how I got my first tech job through their bootcamp, dropped out of college in just the 2nd semester, worked at Avalara (a $10B+ tech company) for a couple of years, and started my own startup DevKit!",
    videoId: "w9d11CyWvAY",
  },
  {
    title:
      "How to start a Tech Startup? | Choose between Job and Startup | Destination X | Coding Ninjas",
    description:
      "I was invited for this 90 minutes long podcast with the Founder and CEO of Coding Ninjas Ankush Singla Sir and a Microsoft Engineer Naman Jain. We talked about the difference in the daily life as a Software Engineer at a tech giant and as a Founder of an early-stage startup.",
    videoId: "fBGSgGa1maE",
  },
  // {
  //   title: "Internships in the time of Lockdowns",
  //   description:
  //     "Participated in a discussion led by one of the Principal Engineers at Avalara Manoj Mahalingham. We discussed about our bootcamp at Avalara, how was your internship experience, difference between working in-office and remote, college education, and a few more topics.",
  //   videoId: "5PqQXDDfun8",
  // },
  {
    title:
      "Getting Started with Google Summer of Code - Shashank Kirtania (GSoC'22, PyMC)",
    description:
      "Recorded a podcast with my high-school friend Shashank Kirtania who was selected for GSoc'22 for the PyMC organization. He talked about his journey to getting selected for PyMC, his experience during the program, tips for new college students, and a lot more things!",
    videoId: "icsJVkOsmcg",
  },

  // {
  //   embedUrl:
  //     "https://www.linkedin.com/posts/itsharshag_i-am-so-excited-to-share-that-i-got-featured-activity-7165159678304276480--Pfb/?utm_source=share&utm_medium=member_desktop",
  //   title: "Featured on Hotstar (the Netflix of India)",
  //   channel: "Hotstar",
  //   imgSrc: "/img1.png",
  //   views: "100k+ views",
  // },
  // {
  //   embedUrl: "https://www.youtube.com/watch?v=OK6drJkcPDc",
  //   title: "10 lpa Package CTC - Tech Round of a Drop Out",
  //   channel: "Ru buZZing",
  //   imgSrc: "/img2.png",
  //   views: "95k+ views",
  // },
  // {
  //   embedUrl: "https://www.youtube.com/watch?v=tOPHkvKupcQ",
  //   title:
  //     "The Journey of Harsh Agarwal | From A College Drop out to a Package of 10 LPA | Career Camp|",
  //   channel: "Coding Ninjas",
  //   imgSrc: "/img3.png",
  //   views: "4k+ views",
  // },
  // {
  //   embedUrl:
  //     "https://www.linkedin.com/posts/itsharshag_i-am-so-excited-to-share-that-i-got-featured-activity-7165159678304276480--Pfb/?utm_source=share&utm_medium=member_desktop",
  //   title: "Featured on Hotstar (the Netflix of India)",
  //   channel: "Hotstar",
  //   imgSrc: "/img1.png",
  //   views: "100k+ views",
  // },
  // {
  //   embedUrl: "https://www.youtube.com/watch?v=OK6drJkcPDc",
  //   title: "10 lpa Package CTC - Tech Round of a Drop Out",
  //   channel: "Ru buZZing",
  //   imgSrc: "/img2.png",
  //   views: "95k+ views",
  // },
  // {
  //   embedUrl: "https://www.youtube.com/watch?v=tOPHkvKupcQ",
  //   title:
  //     "The Journey of Harsh Agarwal | From A College Drop out to a Package of 10 LPA | Career Camp|",
  //   channel: "Coding Ninjas",
  //   imgSrc: "/img3.png",
  //   views: "4k+ views",
  // },
  // Add more video objects as needed
];
