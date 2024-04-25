'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    imgSrc:string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(3);

  const loadMoreVideos = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };
  return (
    <>
      <div className={cn(
        "grid gap-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}>

      {items.slice(0,displayCount).map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-green-500/[0.8] block  rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardImage>{item.imgSrc}</CardImage>
          </Card>
        </Link>
      ))}
      </div>

<div className="flex justify-center items-center p-6">
       {displayCount < items.length && (
            <Button
              className=" px-4 py-2 rounded-md"
              onClick={loadMoreVideos}
              >
              Load More
            </Button>
        )}
        </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-green-500 relative z-20",
        className
      )}
    >
      <div className="relative z-50 space-y-5">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <div className="flex items-center justify-center">

    <img
      className={cn(
        "mt-8 w-[90%] h-[90%] tracking-wide leading-relaxed text-sm",
        className
        )}
        src={children}
        />
        </div>
    
  );
};
