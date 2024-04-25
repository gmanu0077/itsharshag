
import { SiTwitter,SiInstagram,SiYoutube,SiLinkedin} from 'react-icons/si';
import {LinkedinIcon} from 'lucide-react'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({

    subsets: ['latin'],
  
  })
import { cn } from '@/lib/utils';
import { AnimatedTooltip } from './ui/animated-tooltip';



const Socials = () => {

 
  return (
    <section id='socials' className="w-full py-6">
    <div className="px-4 grid  items-center justify-center gap-6 text-center md:px-6">
      <div className="space-y-6 text-center">
        <h2 className={cn("text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-green-500 ",montserrat.className)}>Follow Mee on Social Media</h2>
        <p className="mx-auto max-w-[600px] text-gray-300 text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ">
        Stay up to date with our latest news and announcements by following us on your favorite social media
            platform.
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
    { id:5,name: 'YouTube (Tech)', url: 'https://www.youtube.com/harshagrawalog', followers: "326+" , icon:<SiYoutube className='bg-white rounded-full w-full h-full text-green-500 hover:scale-125 transition-all'/>,handle:"@harshagrawalog"},
    {id:1, name: 'Twitter', url: 'https://twitter.com/itsharshag', followers: "4659+", icon:<SiTwitter className='bg-white rounded-full w-full h-full text-green-500 hover:scale-125 transition-all'/>,handle:"@itsharshag"},
    { id:4,name: 'Instagram (Travel)', url: 'https://instagram.com/_itsharshag', followers:"197+", icon:<SiInstagram className='bg-green-500 rounded-full  w-full h-full text-white hover:scale-125 transition-all'/>,handle:"@_itsharshag" },
    { id:2,name: 'LinkedIn', url: 'https://www.linkedin.com/in/itsharshag/', followers: "4727+", icon:<SiLinkedin className='bg-green-500 rounded-full  w-full h-full text-green-500hover:scale-125 transition-all'/>,handle:"@itsharshag" },
    {id:3, name: 'Instagram (Tech)', url: 'https://instagram.com/_itsharshag', followers:"197+", icon:<SiInstagram className='bg-green-500 rounded-full  w-full h-full text-white hover:scale-125 transition-all'/>,handle:"@_itsharshag"},
    { id:6,name: 'YouTube (Travel)', url: 'https://www.youtube.com/@HarshAgrawalVlogs', followers: "31+", icon:<SiYoutube className='bg-white rounded-full w-full h-full text-green-500 hover:scale-125 transition-all'/>,handle:"@HarshAgrawalVlogs" },
  ];