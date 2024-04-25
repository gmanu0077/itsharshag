import Link from 'next/link'
import React from 'react'
import { Montserrat } from "next/font/google";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import imgSrc from '../public/hero.png'
import HeroImg from './HeroImg';

const montserrat = Montserrat({

  subsets: ['latin'],

})
const HeroSection = () => {
  return (
    <section id='home' className="w-full pt-5 md:pt-24 lg:pt-10">
    <div className="space-y-10 xl:space-y-16">
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 ">
        <div className="space-y-6 flex flex-col col-span-2 justify-center ">
        <h1 className='text-4xl lg:text-7xl font-bold'><span className={montserrat.className}>👋 I'm</span><br/>{" "}
          <span className={cn("underline underline-offset-8 decoration-green-500", montserrat.className)}>
          Harsh Agrawal. 
          </span>
          <br/>
              </h1>
              <p> I work on ideas that make a dent in the world.</p>


          <p className='text-md text-gray-400'>
              {
                  "Check out my recent book on my journey about learning programming, getting into NYU with a $100K scholarship, dropping out of college, working in corporate and remotely for US startups, getting interest from Tier 1 VCs (like a16z, Sequoia, Nexus Tech Ventures), my first SaaS acquisition, and making my first crore by age 22."
              }
          </p>
          <Link href='https://itsharshagrawal.gumroad.com/l/journey' className='inline-block'>
          
          <Button
              className=" px-4 py-2 rounded-md"
            >
              My Journey
            </Button>
            
          </Link>
        
      </div>
        <div className='w-72 h-72 relative lg:col-span-1 hidden lg:block'>
      <HeroImg imgSrc={imgSrc}  />
    </div>
    </div>
    </div>
  </section>
  )
}

export default HeroSection;

