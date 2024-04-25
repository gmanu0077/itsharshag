"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer,CardBody,CardItem } from "./ui/3d-card";
CardContainer
const HeroImg = ({imgSrc}:any) => {
  return (
    
        <CardContainer className="inter-var h-72 w-72">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
          
            <CardItem translateZ="100" className="w-72 mt-4">
              <Image
              src={imgSrc}
              
                className=" object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
           
          </CardBody>
        </CardContainer>
      );
    }

export default HeroImg
