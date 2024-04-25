import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface VideoProps {
  title:string,
  embedUrl:string,
  imgSrc:string,
  views:string,
  channel:string,

}
export const videosData:VideoProps[] = [
  {
    embedUrl:
      "https://www.linkedin.com/posts/itsharshag_i-am-so-excited-to-share-that-i-got-featured-activity-7165159678304276480--Pfb/?utm_source=share&utm_medium=member_desktop",
    title: "Featured on Hotstar (the Netflix of India)",
    channel: "Hotstar",
    imgSrc: "/img1.png",
    views: "100k+ views",
  },
  {
    embedUrl: "https://www.youtube.com/watch?v=OK6drJkcPDc",
    title: "10 lpa Package CTC - Tech Round of a Drop Out",
    channel: "Ru buZZing",
    imgSrc: "/img2.png",

    views: "95k+ views",
  },
  {
    embedUrl: "https://www.youtube.com/watch?v=tOPHkvKupcQ",
    title:
      "The Journey of Harsh Agarwal | From A College Drop out to a Package of 10 LPA | Career Camp|",
    channel: "Coding Ninjas",
    imgSrc: "/img3.png",

    views: "4k+ views",
  },
  {
    embedUrl:
      "https://www.linkedin.com/posts/itsharshag_i-am-so-excited-to-share-that-i-got-featured-activity-7165159678304276480--Pfb/?utm_source=share&utm_medium=member_desktop",
    title: "Featured on Hotstar (the Netflix of India)",
    channel: "Hotstar",
    imgSrc: "/img1.png",
    views: "100k+ views",
  },
  {
    embedUrl: "https://www.youtube.com/watch?v=OK6drJkcPDc",
    title: "10 lpa Package CTC - Tech Round of a Drop Out",
    channel: "Ru buZZing",
    imgSrc: "/img2.png",

    views: "95k+ views",
  },
  {
    embedUrl: "https://www.youtube.com/watch?v=tOPHkvKupcQ",
    title:
      "The Journey of Harsh Agarwal | From A College Drop out to a Package of 10 LPA | Career Camp|",
    channel: "Coding Ninjas",
    imgSrc: "/img3.png",

    views: "4k+ views",
  },
  // Add more video objects as needed
];

